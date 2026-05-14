import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from '../../entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  findAll() {
    return this.authorRepository.find();
  }

  findOne(id: number) {
    return this.authorRepository.findOneBy({ id });
  }

  create(data: Partial<Author>) {
    const entity = this.authorRepository.create(data);
    return this.authorRepository.save(entity);
  }

  async update(id: number, data: Partial<Author>) {
    await this.authorRepository.update({ id }, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    const entity = await this.findOne(id);
    if (!entity) {
      return null;
    }

    const removed = { ...entity };
    await this.authorRepository.remove(entity);
    return removed;
  }
}
