import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity()
export class Version extends BaseEntity  {

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