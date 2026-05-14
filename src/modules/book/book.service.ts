import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../../entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  findAll() {
    return this.bookRepository.find();
  }

  findOne(id: number) {
    return this.bookRepository.findOneBy({ id });
  }

  create(data: Partial<Book>) {
    const entity = this.bookRepository.create(data);
    return this.bookRepository.save(entity);
  }

  async update(id: number, data: Partial<Book>) {
    await this.bookRepository.update({ id }, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    const entity = await this.findOne(id);
    if (!entity) {
      return null;
    }

    const removed = { ...entity };
    await this.bookRepository.remove(entity);
    return removed;
  }
}
