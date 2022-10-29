import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsPositive, IsString, MinLength, Min } from "class-validator"

export class CreateTransaccionDto {


    @ApiProperty({required: true, type: String})
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    Fecha: string


    @ApiProperty({required: true, type: String})
    @IsNotEmpty()
    @MinLength(2)
    @IsString()
    Ingreso: string


    @ApiProperty({required: true, type: String})
    @IsNotEmpty()
    @MinLength(2)
    @IsString()
    Egreso: string


    @ApiProperty({required: true, type: String})
    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    Observacion: string
}
