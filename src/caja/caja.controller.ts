import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CajaService } from './caja.service';
import { CreateCajaDto } from './dto/create-caja.dto';
import { UpdateCajaDto } from './dto/update-caja.dto';
import { Caja } from './entities/caja.entity';

@ApiTags('Entidad Caja-Controllers')
@Controller('caja')
export class CajaController {
  constructor(private readonly cajaService: CajaService) {}

  @Post()
  @ApiResponse({status:201, description:'Datos insertados', type: Caja})
  @ApiResponse({status:500, description:'Internal Error Server'})
  create(@Body() createCajaDto: CreateCajaDto) {
    return this.cajaService.create(createCajaDto);
  }

  @Get()
  @ApiResponse({status:200, description:'Mostrar todos los datos insertados'})
  findAll() {
    return this.cajaService.findAll();
  }

  @Get(':id')
  @ApiResponse({status:201, description:'Mostrar datos espesificos buscados por id'})
  @ApiResponse({status:404, description:'Datos no encontrados en DB'})
  findOne(@Param('id') id: string) {
    return this.cajaService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({status:201, description:'Actualizar datos por el id'})
  @ApiResponse({status:404, description:'Datos no encontrados en DB'})
  update(@Param('id') id: string, @Body() updateCajaDto: UpdateCajaDto) {
    return this.cajaService.update(id, updateCajaDto);
  }

  @Delete(':id')
  @ApiResponse({status:201, description:'Eliminar datos por el id'})
  @ApiResponse({status:404, description:'Datos no encontrados en DB'})
  remove(@Param('id') id: string) {
    return this.cajaService.remove(id);
  }
}
