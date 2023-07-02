import {HttpStatus, Injectable} from "@nestjs/common";
import {DatasourceService} from "../datasource/datasource.service";
import {Cars_services} from "./cars_services.entity";
import {Cars} from "../cars/cars.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateCarServiceDto} from "./dto/CarServiceDTO";
import {IncompleteCarDto} from "../cars/dto/incomplete-car.dto";
import {IncompleteCarserviceDto} from "./dto/incomplete-carservice.dto";

@Injectable()
export class Cars_servicesService
{
    constructor(@InjectRepository(Cars_services)
    private readonly carServiceRepository: Repository<Cars_services>,
    @InjectRepository(Cars)
    private readonly carRepository: Repository<Cars>)
    {
    }
    async create(car_serviceDto: CreateCarServiceDto): Promise<Cars_services>
    {
        const carService = this.carServiceRepository.create();
        carService.servicename = car_serviceDto.servicename;
        carService.price = car_serviceDto.price;
        await this.carServiceRepository.save(carService);
        return carService;
    }
    findOne(id:number)
    {
        return this.carServiceRepository.findOne({
            where:{id},
        })
    }
    async findAll() : Promise<Cars_services[]>
    {
        const carServices = await this.carServiceRepository.find({

        })
        return carServices;
    }
    async update(id: number, updatedCar_service: Cars_services)
    {
        const carService = await this.carServiceRepository.findOne({
            where:{id}
        })
        carService.servicename = updatedCar_service.servicename;
        carService.price = updatedCar_service.price;
        await this.carServiceRepository.save(carService);
        return carService;
    }
    remove(id: number)
    {
        this.carServiceRepository.delete({id});
    }
    async findIncomplete(): Promise<IncompleteCarserviceDto[]>
    {
        const carServices = await this.carServiceRepository.find();
        const incompleteCarServices : IncompleteCarserviceDto[] = carServices.map((carService) => {
            const incompleteCarService = new IncompleteCarserviceDto();
            incompleteCarService.id = carService.id;
            incompleteCarService.servicename = carService.servicename;
            return incompleteCarService;
        });
        return incompleteCarServices;
    }

}
