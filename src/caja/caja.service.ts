import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateCajaDto } from './dto/create-caja.dto';
import { UpdateCajaDto } from './dto/update-caja.dto';
import { Caja } from './entities/caja.entity';

@Injectable()
export class CajaService {

  constructor(
    @InjectModel(Caja.name) private ModeloCaja: Model<Caja>
  ){
    
  }
  async create(createCajaDto: CreateCajaDto) {
    try {
      const CreateCaja = await this.ModeloCaja.create( createCajaDto )
      return CreateCaja;
    } catch (error) {
      throw new InternalServerErrorException('Error al intentar crear el modelo- Error Interno - Logs')
    }
  }

  async findAll() {

      const busquedaCaja = await this.ModeloCaja.find(); 
      if(busquedaCaja === null){
        throw new BadRequestException('No hay datos en DB')
      } 
      return busquedaCaja;

  }

  async findOne(id: string) {
    let BuscarOnoCaja: Caja
  
      if(!BuscarOnoCaja && isValidObjectId(id))
        BuscarOnoCaja = await this.ModeloCaja.findById(id);
      

      if(!BuscarOnoCaja) throw new NotFoundException('Modelo no Encontrado en DB');
        

      return BuscarOnoCaja;

  }

  async update(id: string, updateCajaDto: UpdateCajaDto) {
    try {
      const UpdateCaja = await this.ModeloCaja.findById(id);
      await UpdateCaja.updateOne( updateCajaDto )
      return updateCajaDto;
    } catch (error) {
      throw new NotFoundException('Modelo a actualizar no encontrado');
    }

  }

  async remove(id: string) {
    try {

      const DeleteCaja = await this.ModeloCaja.findById(id);
      await DeleteCaja.deleteOne()
      return DeleteCaja;
    } catch (error) {
      throw new NotFoundException('Modelo a eliminar no encontrado');
    }


  }
}
