import { Inject, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { SpotifyService } from 'src/api/spotify/spotify.service';
import { Repository } from 'typeorm';
import { CreateUserDto, GetUserInfoDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  @Inject(SpotifyService)
  private readonly spotifyService: SpotifyService;

  getUserInfo(body: GetUserInfoDto): Promise<User> {
    return null;
  }

  public async createUser(body: CreateUserDto): Promise<User> {
    const existingUser = await this.repository.findOneBy({ code: body.code });

    if (existingUser) {
      return existingUser;
    } else {
      const userInfoFromSpotify = await this.spotifyService.authenticate(
        body.code,
      );

      const user: User = new User();
      user.code = body.code;

      user.access_token = userInfoFromSpotify.access_token;
      user.refresh_token = userInfoFromSpotify.refresh_token;

      return this.repository.save(user);
    }
  }
}
