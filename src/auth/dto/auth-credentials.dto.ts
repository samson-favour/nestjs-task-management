import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredentailsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  password: string;

  @IsString()
  email: string;
}
