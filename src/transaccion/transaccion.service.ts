import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateTransaccionDto } from './dto/create-transaccion.dto';
import { UpdateTransaccionDto } from './dto/update-transaccion.dto';
import { Transaccion } from './entities/transaccion.entity';

@Injectable()
export class TransaccionService {

  constructor(
    @InjectModel(Transaccion.name)  private ModeloTransaccion: Model<Transaccion>
  ){

  }
  async create(createTransaccionDto: CreateTransaccionDto) {
    try {
      const CreateTransaccion = await this.ModeloTransaccion.create( createTransaccionDto )
      return CreateTransaccion;
    } catch (error) {
      throw new InternalServerErrorException('Error al intentar crear el modelo- Error Interno - Logs ')
    }
  }

  async findAll() {
    const ShwoTransaccion = await this.ModeloTransaccion.find(); 
    if(ShwoTransaccion === null){
      throw new BadRequestException('No hay datos en DB')
    } 
    return ShwoTransaccion;
  }

  async findOne(id: string) {
    let ShowTransaccionOne: Transaccion
  
    if(isValidObjectId(id)) 
      ShowTransaccionOne = await this.ModeloTransaccion.findById(id);
    

    if(!ShowTransaccionOne) throw new NotFoundException('Modelo no Encontrado en DB');   
    

    return ShowTransaccionOne;
  }

  async update(id: string, updateTransaccionDto: UpdateTransaccionDto) {
    try {
      const UpdateTransaccion = await this.ModeloTransaccion.findById(id);
      await UpdateTransaccion.updateOne( updateTransaccionDto )
      return updateTransaccionDto;
    } catch (error) {
      throw new NotFoundException('Modelo a actualizar no encontrado');
    }
  }

  async remove(id: string) {
    try {
      const DeleteTrasaccion = await this.ModeloTransaccion.findById(id);
      await DeleteTrasaccion.deleteOne()
      return DeleteTrasaccion;
    } catch (error) {
      throw new NotFoundException('Modelo a eliminar no encontrado');
    }
  }
}
