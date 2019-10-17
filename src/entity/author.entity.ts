import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { IsString } from 'class-validator';

@Entity('author')
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column()
    name: string;
}
