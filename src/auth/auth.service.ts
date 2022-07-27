import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { authCredentialDto } from './auth-credential.dto';
import { JwtService } from '@nestjs/jwt';
import { jwtPayload } from './jwt-payload.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../user/user.entity';

@Injectable()
export class AuthService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delete(id: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Users)
    private userRepository: UserService,
    private jwtService: JwtService,
  ) {}
  async signUp(body: authCredentialDto): Promise<any> {
    return this.userRepository.createUser(body);
  }

  async signIn(body: authCredentialDto): Promise<{ accessToken: string }> {
    const { email, password } = body;
    const user = await this.userRepository.getUserByEmail(email);
    if (user && password === user.password) {
      const payload: jwtPayload = { email };
      const accessToken: string = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your login');
    }
  }
}
