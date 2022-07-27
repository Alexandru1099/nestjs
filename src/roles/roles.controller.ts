import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRolesDto } from './roles.dto';
import { Role } from './roles.entity';
import { RolesService } from './roles.service';

@Controller('role')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @Get(':id')
  async getRole(@Param('id') id: number): Promise<Role> {
    return this.roleService.getRoles(id);
  }

  @Post()
  async createRole(@Body() body: CreateRolesDto): Promise<Role> {
    return this.roleService.createRoles(body);
  }

  @Delete(':id')
  async deleteRole(@Param('id') id: number): Promise<void> {
    return this.roleService.deleteRoles(id);
  }

  @Patch(':id/name')
  async updateName(
    @Param('id') id: number,
    @Body('name') name: string,
  ): Promise<Role> {
    return this.roleService.updateRoles(id, name);
  }
}
