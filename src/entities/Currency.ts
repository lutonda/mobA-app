import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Currency {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    money: string;

    @Column("text")
    description: string;

    @Column("double")
    value: number;

    @Column()
    isPublished: boolean;
}