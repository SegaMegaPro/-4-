import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('workers')
export class Workers
{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    fullname: string;
    @Column()
    position: string;
    @Column()
    phone: string;
}