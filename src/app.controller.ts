import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/login')
  login() {
    return 'login!';
  }

  @Get('/logout')
  logout() {
    return 'logout!';
  }

  @Get('/dashboard')
  dashboard() {
    return 'dashboard!';
  }
}
