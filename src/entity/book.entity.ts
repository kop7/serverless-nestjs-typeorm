import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { IsString } from 'class-validator';

@Entity('book')
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @IsString()
    @Column()
    name: string;
}
