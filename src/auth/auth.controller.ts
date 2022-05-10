import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { authCredentialDto } from './auth-credential.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    @InjectRepository(AuthService)
    private authService: AuthService,
  ) {}

  @Post('signup')
  singUp(@Body() body: authCredentialDto): Promise<void> {
    return this.authService.singUp(body);
  }
}
