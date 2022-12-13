import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateUserDto, GetUserInfoDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Get('/info')
  public getUser(@Body() body: GetUserInfoDto): Promise<User> {
    return this.service.getUserInfo(body);
  }

  @Post('/save-user')
  public createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.service.createUser(body);
  }
}
