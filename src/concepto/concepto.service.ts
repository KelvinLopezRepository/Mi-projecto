import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';
import { Concepto } from './entities/concepto.entity';

@Injectable()
export class ConceptoService {
  constructor(
    @InjectModel(Concepto.name)  private ModeloConcepto: Model<Concepto>
  ){

  }
  async create(createConceptoDto: CreateConceptoDto) {
    try {
      const CreateConcepto = await this.ModeloConcepto.create( createConceptoDto )
      return CreateConcepto;
    } catch (error) {
      throw new InternalServerErrorException('Error al intentar crear el modelo- Error Interno - Logs')
    }
  }

  async findAll() {
    const ShwoConcepto = await this.ModeloConcepto.find(); 
    if(ShwoConcepto === null){
      throw new BadRequestException('No hay datos en DB')
    } 
    return ShwoConcepto;

  }

  async findOne(id: string) {
    let ShowConceptoOne: Concepto
  
    if(!ShowConceptoOne && isValidObjectId(id))
      ShowConceptoOne = await this.ModeloConcepto.findById(id);
    

    if(!ShowConceptoOne) throw new NotFoundException('Modelo no Encontrado en DB');
      
  
    return ShowConceptoOne;
  }

  async update(id: string, updateConceptoDto: UpdateConceptoDto) {
    try {
      const UpdateConcepto = await this.ModeloConcepto.findById(id);
      await UpdateConcepto.updateOne( updateConceptoDto )
      return updateConceptoDto;
    } catch (error) {
      throw new NotFoundException('Modelo a actualizar no encontrado');
    }
  }

  async remove(id: string) {
    try {
      const DeleteConcepto = await this.ModeloConcepto.findById(id);
      await DeleteConcepto.deleteOne()
      return DeleteConcepto;
    } catch (error) {
      throw new NotFoundException('Modelo a eliminar no encontrado');
    }
  }
}
