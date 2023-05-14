import {CarsService} from "../cars/cars.service";
import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {Cars_services} from "./cars_services.entity";
import {Cars_servicesService} from "./cars_services.service";

@Controller("car_services")
export class Cars_servicesController
{
    constructor(private readonly cars_servicesService: Cars_servicesService)
    {

    }
    @Get()
    findAll()
    {
        return this.cars_servicesService.findAll();
    }
    @Get(":id")
    findOne(@Param("id") id: string)
    {
        return this.cars_servicesService.findOne(+id);
    }
    @Put(":id")
    update(@Param("id") id: string, @Body() updateCars_services: Cars_services)
    {
        return this.cars_servicesService.update(+id, updateCars_services);
    }
    @Post()
    create(@Body() createCars_services: Cars_services)
    {
        return this.cars_servicesService.create(createCars_services);
    }
    @Delete(":id")
    remove(@Param("id") id: string)
    {
        return this.cars_servicesService.remove(+id);
    }
    @Get('incomplete')
    findIncomplete()
    {
        this.cars_servicesService.findIncomplete();
    }

}