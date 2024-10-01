import { Controller, Get, Post, Param, Patch, Delete, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findUserById(+id);
  }

  @Post()
  create(@Body() createUserDto: any) {
    return this.userService.createUser(createUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.userService.updateUser(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
}
