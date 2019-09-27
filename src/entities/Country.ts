import {Entity, Column, PrimaryGeneratedColumn,OneToOne, JoinColumn, BaseEntity} from "typeorm";

@Entity()
export class Country extends BaseEntity {
BaseEntity
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("text")
    alpha2: string;

    @Column("text")
    alpha3: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column()
    isPublished: boolean;
}