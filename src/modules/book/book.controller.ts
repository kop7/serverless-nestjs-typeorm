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
import { Book } from '../../entity';
import { BookService } from './book.service';

@Controller('api/book')
export class BookController {
  constructor(private readonly service: BookService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const entity = await this.service.findOne(id);
    if (!entity) {
      throw new NotFoundException(`Book ${id} not found`);
    }
    return entity;
  }

  @Post()
  create(@Body() body: Partial<Book>) {
    return this.service.create(body);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<Book>,
  ) {
    const entity = await this.service.update(id, body);
    if (!entity) {
      throw new NotFoundException(`Book ${id} not found`);
    }
    return entity;
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const entity = await this.service.remove(id);
    if (!entity) {
      throw new NotFoundException(`Book ${id} not found`);
    }
    return entity;
  }
}
