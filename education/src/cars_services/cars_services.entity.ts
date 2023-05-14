import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Cars} from "../cars/cars.entity";

@Entity('cars_services')
export class Cars_services
{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true})
    servicename: string;
    @Column()
    price: number;
    @ManyToMany(() => Cars, (car) => car.car_services)
    @JoinTable({
        name: 'cars_carsservices',
        joinColumn: {name: 'car_service_id'},
        inverseJoinColumn: {name: 'car_id'},
    })
    cars: Cars[];
}
