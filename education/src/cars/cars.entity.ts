import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Cars_services} from "../cars_services/cars_services.entity";

@Entity('cars')
export class Cars{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    carname: string;
    @Column()
    manufacturer: string;
    @ManyToMany(() => Cars_services, (cars_service) => cars_service.id)
    @JoinTable({
        name: 'cars_carsservices',
        joinColumn: {name: 'car_id'},
        inverseJoinColumn: {name: 'carsService_id'},
    })
    car_services: Cars_services[];
}