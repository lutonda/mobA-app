import {Entity, Column, PrimaryGeneratedColumn,OneToOne, JoinColumn} from "typeorm";
import { Version } from "./Version";

@Entity()
export class Currency {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    money: string;

    @Column("double")
    value: number;

    @Column("text")
    description: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @OneToOne(type => Version)
    @JoinColumn()
    version: Version;

    @Column()
    isPublished: boolean;
}