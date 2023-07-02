import {HttpStatus, Injectable} from "@nestjs/common";
import {DatasourceService} from "../datasource/datasource.service";
import {Cars} from "./cars.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Cars_services} from "../cars_services/cars_services.entity";
import {CreateCarDto} from "./dto/CarDTO";
import {IncompleteCarDto} from "./dto/incomplete-car.dto";

@Injectable()
export class CarsService
{
    constructor(@InjectRepository(Cars)
    private readonly carRepository: Repository<Cars>,
    @InjectRepository(Cars_services)
    private readonly cars_servicesRepository: Repository<Cars_services>,)
    {

    }
    async create(carDto: CreateCarDto): Promise<Cars>
    {
        const car = this.carRepository.create();
        car.carname = carDto.carname;
        car.manufacturer = carDto.manufacturer;
        await this.carRepository.save(car);
        return car;
    }
    findOne(id:number): Promise<Cars>
    {
        return this.carRepository.findOne({
            where: {id},
        })
    }
    async findAll() : Promise<Cars[]>
    {
        const cars = await this.carRepository.find({
          /*relations: {car_services: true}*/
        })
        return cars;
    }
    async update(id: number, updatedCar: Cars)
    {
        const car = await this.carRepository.findOne({where:{id}});
        car.carname = updatedCar.carname;
        car.manufacturer = updatedCar.manufacturer;
        await this.carRepository.save(car);
        return car;
    }
    remove(id: number)
    {
        this.carRepository.delete({id});
    }

    async findIncomplete(): Promise<IncompleteCarDto[]> {
        const cars = await this.carRepository.find();
        const incompleteCars : IncompleteCarDto[] = cars.map((car) => {
            const incompleteCar = new IncompleteCarDto();
            incompleteCar.id = car.id ;
            incompleteCar.carname = car.carname;
            return incompleteCar;
        });
        return incompleteCars;
    }
}
