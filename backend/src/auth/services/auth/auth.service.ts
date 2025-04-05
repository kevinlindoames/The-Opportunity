import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // En validateUser de auth.service.ts
  async validateUser(username: string, password: string): Promise<any> {
    try {
      const user = await this.usersService.findByUsername(username);

      // Cambiar a comparación directa
      const isPasswordValid = password === user.password;

      if (isPasswordValid) {
        const { password, ...result } = user.toObject();
        return result;
      }

      return null;
    } catch (error) {
      return null;
    }
  }
  async login(user: any) {
    const payload = { username: user.username, sub: user._id, role: user.role };

    await this.usersService.updateLastLogin(user._id);

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    };
  }
}
