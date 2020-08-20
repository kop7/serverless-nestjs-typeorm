import {Controller } from '@nestjs/common';
import {AuthorService} from './author.service';
import {Crud, CrudController} from '@nestjsx/crud';
import { Author } from '../../entity';

@Crud({ model: {type: Author }})
@Controller('api/author')
export class AuthorController implements CrudController<Author> {
    constructor(public readonly service: AuthorService) {}
}
