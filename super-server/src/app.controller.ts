import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('activation')
  async sendActivationCode(@Query() query: { email: string }) {
    return this.appService.sendEmail(query.email);
  }

  @Get('verify-code')
  async verifyCode(@Query() query: { email: string; code: number }) {
    return this.appService.verifyCode(query.email, query.code);
  }
}
