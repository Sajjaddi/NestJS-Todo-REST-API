import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LoginDto, RegisterDto } from './dto/auth.dto.js';
import { AuthGuard } from './auth.guard.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(
      registerDto.username,
      registerDto.email,
      registerDto.password,
    );
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  async getProfile(@Req() request: any) {
    const user = await this.authService.getProfile(request.user.id);
    return {
      message: 'Profile fetched successfully',
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        todos: user.todos,
        todoCount: user.todos.length,
      },
    };
  }
}
