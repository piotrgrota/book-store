import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    originTitle: String;

    @Column()
    subTitle: String;

    @Column()
    isbn10: String;

    @Column()
    isbn13: {type: String, index: {unique: true}};
    
}