import {IsNotEmpty, IsString} from 'class-validator'
export class CreateCarDto
{
    @IsNotEmpty()
    id: number;
    @IsNotEmpty()
    @IsString()
    carname: string;
    @IsNotEmpty()
    @IsString()
    manufacturer: string;
}
