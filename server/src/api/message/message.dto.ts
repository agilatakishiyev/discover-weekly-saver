import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsString()
  public fullname: string;

  @IsString()
  public message: string;
}
