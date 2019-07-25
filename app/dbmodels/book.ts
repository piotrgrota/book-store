import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class BookEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    subTitle: string;

    //{type: String, index: {unique: true}} - not working with sqllite
    @Column()
    isbn13: string;
    
}