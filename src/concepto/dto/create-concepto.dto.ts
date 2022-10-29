import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateConceptoDto {



    @ApiProperty({required: true, type: String})
    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    Concepto: string


    @ApiProperty({required: true, type: String})
    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    Detalle: string

    
}
