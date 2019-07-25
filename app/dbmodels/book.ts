import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class BookEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: String;

    @Column()
    subTitle: String;

    @Column()
    isbn13: {type: String, index: {unique: true}};
    
}