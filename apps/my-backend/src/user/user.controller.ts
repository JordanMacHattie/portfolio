import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Post()
  async createUser(@Body() body: { name: string; email: string, avatar: string, title: string }) {
    return this.userService.createUser(body.name, body.email, body.avatar, body.title);
  }
}
