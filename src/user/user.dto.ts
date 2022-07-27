import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4, { message: 'name is too short' })
  public name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(50, { message: 'email is too long' })
  @MinLength(10, { message: 'email is too short' })
  public email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(40, { message: 'password is too long' })
  @MinLength(8, { message: 'password is too short' })
  public password: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2, { message: 'age is too long' })
  public age: string;

  @IsString()
  @IsNotEmpty()
  public gender: string;
}
