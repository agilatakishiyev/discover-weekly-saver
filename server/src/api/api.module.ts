import { Module } from '@nestjs/common';
import { MessageModule } from './message/message.module';
import { SpotifyModule } from './spotify/spotify.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [SpotifyModule, UserModule, MessageModule],
})
export class ApiModule {}
