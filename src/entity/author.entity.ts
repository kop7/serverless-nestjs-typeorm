import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('author')
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
