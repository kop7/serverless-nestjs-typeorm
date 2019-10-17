import { Controller } from '@nestjs/common';
import {Crud, CrudController} from '@nestjsx/crud';
import { Book} from '../../entity';
import { BookService} from './book.service';

@Crud({model: {
        type: Book,
    }})
@Controller('api/book')
export class BookController implements CrudController<Book> {
    constructor(public readonly service: BookService) {}
}
