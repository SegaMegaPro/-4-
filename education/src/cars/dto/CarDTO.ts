import {IsNotEmpty, IsString} from 'class-validator'
import {UsePipes, ValidationPipe} from "@nestjs/common";
@UsePipes(new ValidationPipe({ transform: true }))
export class CreateCarDto
{
    @IsNotEmpty()
    @IsString()
    carname: string;
    @IsNotEmpty()
    @IsString()
    manufacturer: string;
}
