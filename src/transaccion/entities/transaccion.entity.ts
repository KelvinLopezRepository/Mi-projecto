import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";


@Schema()
export class Transaccion {

    id: ObjectId

    @ApiProperty({required: true, type: String})
    @Prop()
    Fecha: string


    @ApiProperty({required: true, type: String})
    @Prop()
    Ingreso: string


    @ApiProperty({required: true, type: String})
    @Prop()
    Egreso: string

    
    @ApiProperty({required: true, type: String})
    @Prop()
    Observacion: string

}


export const EsquemaTransaccion = SchemaFactory.createForClass( Transaccion )
