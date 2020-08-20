import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('book')
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
