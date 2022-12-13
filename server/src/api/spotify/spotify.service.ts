import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import SpotifyWebApi from 'spotify-web-api-node';

@Injectable()
export class SpotifyService {
  @Inject(ConfigService)
  private readonly configService: ConfigService;

  @Inject(HttpService)
  private readonly httpService: HttpService;

  public client: SpotifyWebApi;

  constructor(configService: ConfigService) {
    this.client = new SpotifyWebApi({
      clientId: configService.get('CLIENT_ID'),
      clientSecret: configService.get('CLIENT_SECRET'),
      redirectUri: configService.get('APP_URL'),
    });
  }

  public async authenticate(code: string) {
    const params = new URLSearchParams({
      code,
      grant_type: 'authorization_code',
      redirect_uri: `${this.configService.get('APP_URL')}/process/choose-plan`,
    });

    const response = await this.httpService.axiosRef.post(
      'https://accounts.spotify.com/api/token',
      params,
      {
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(
              `${this.configService.get('CLIENT_ID')}:${this.configService.get(
                'CLIENT_SECRET',
              )}`,
            ).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    this.client.setAccessToken(response.data.access_token);

    return response.data;
  }
}
