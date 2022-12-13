import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public code: string;
}

export class GetUserInfoDto {
  @IsString()
  @IsNotEmpty()
  public access_token: string;

  @IsString()
  @IsNotEmpty()
  public refresh_token: string;
}
