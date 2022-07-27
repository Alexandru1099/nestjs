import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { Users } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  public getUser(@Param('id') id: number): Promise<Users> {
    return this.userService.getUser(id);
  }

  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<Users> {
    return this.userService.createUser(body);
  }

  @Delete(':id')
  public deleteUser(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }

  @Patch(':id/name')
  public updateUser(
    @Param('id') id: number,
    @Body('name') name: string,
  ): Promise<Users> {
    return this.userService.updateUser(id, name);
  }
}
