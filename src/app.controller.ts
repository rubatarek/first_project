import { Body, Controller, Get, Header, HttpCode, Param, Patch, Post, Query, Redirect, Req, Res } from '@nestjs/common';
import { AppService } from './app.service.js';
import type { Request } from 'express';

//http://localhost:3000
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  //@HttpCode(204)
  //@Header('Cache-Control', 'no-store')
  // @Redirect('https://docs.nestjs.com', 302)
  getTest(): string{
    return 'Test';
  }

}
