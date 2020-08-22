import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Render('home')
  root() {
    return { title: 'Home Page' };
  }

  @Get('/about')
  @Render('about')
  about() {
    return { title: 'About Page' };
  }
  
}