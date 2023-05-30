import {IsNotEmpty, IsString} from "class-validator";

export class CreateCarServiceDto
{
    @IsNotEmpty()
    id: number;
    @IsNotEmpty()
    @IsString()
    servicename: string;
    @IsNotEmpty()
    price: number;
}
