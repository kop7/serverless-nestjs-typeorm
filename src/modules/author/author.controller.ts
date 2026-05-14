import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Author } from '../../entity';
import { AuthorService } from './author.service';

@Controller('api/author')
export class AuthorController {
  constructor(private readonly service: AuthorService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const entity = await this.service.findOne(id);
    if (!entity) {
      throw new NotFoundException(`Author ${id} not found`);
    }
    return entity;
  }

  @Post()
  create(@Body() body: Partial<Author>) {
    return this.service.create(body);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<Author>,
  ) {
    const entity = await this.service.update(id, body);
    if (!entity) {
      throw new NotFoundException(`Author ${id} not found`);
    }
    return entity;
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const entity = await this.service.remove(id);
    if (!entity) {
      throw new NotFoundException(`Author ${id} not found`);
    }
    return entity;
  }
}
