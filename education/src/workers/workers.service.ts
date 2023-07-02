import {HttpStatus, Injectable} from "@nestjs/common";
import {DatasourceService} from "../datasource/datasource.service";
import {Workers} from "./workers.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CreateWorkerDto} from "./dto/WorkerDTO";

@Injectable()
export class WorkersService
{
    constructor(@InjectRepository(Workers)
    private readonly workerRepository: Repository<Workers>)
    {
    }
    async create(workerDto: CreateWorkerDto): Promise<Workers>
    {
        const worker = this.workerRepository.create();
        worker.fullname = workerDto.fullname;
        worker.position = workerDto.position;
        worker.phone = workerDto.phone;
        await this.workerRepository.save(worker);
        return worker;
    }
    findOne(id: number): Promise<Workers>
    {
        return this.workerRepository.findOne({
            where: {id},
        })
    }
    async findAll(): Promise<Workers[]>
    {
        const workers = await this.workerRepository.find({})
        return workers;
    }
    async update(id: number, updatedWorker: Workers)
    {
        const worker = await this.workerRepository.findOne({where:{id}});
        worker.fullname = updatedWorker.fullname;
        worker.position = updatedWorker.position;
        worker.phone = updatedWorker.phone;
        await this.workerRepository.save(worker);
        return worker;
    }
    remove(id: number)
    {
        this.workerRepository.delete({id});
    }
}
