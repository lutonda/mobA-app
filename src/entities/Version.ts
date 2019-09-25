import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Version {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    version: number;

    @Column("text")
    description: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column()
    isPublished: boolean;
}