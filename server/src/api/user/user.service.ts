import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;
  @Inject(HttpService)
  private readonly httpService: HttpService;

  @Inject(ConfigService)
  private readonly configService: ConfigService;

  public getUser(id: number): Promise<User> {
    return this.repository.findOneBy({ id });
  }

  public async createUser(body: CreateUserDto): Promise<User> {
    const alreadyCreatedUser = this.repository.findOneBy({ code: body.code });
    if (alreadyCreatedUser) {
      return alreadyCreatedUser;
    } else {
      const user: User = new User();
      user.code = body.code;
      user.token = (await this.getUserInfoFromSpotify(body.code)).access_token;

      return this.repository.save(user);
    }
  }

  public getUserInfoFromSpotify(code: string) {
    const params = new URLSearchParams({
      code,
      grant_type: 'client_credentials',
      redirect_uri: 'http://localhost:3000/process/choose-plan',
    });
    const userInfo = (async () => {
      const response = await this.httpService.axiosRef.post(
        'https://accounts.spotify.com/api/token',
        params,
        {
          headers: {
            Authorization:
              'Basic ' +
              Buffer.from(
                `${this.configService.get(
                  'CLIENT_ID',
                )}:${this.configService.get('CLIENT_SECRET')}`,
              ).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
      return response.data;
    })();

    return userInfo;
  }
}
