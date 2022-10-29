import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransaccionService } from './transaccion.service';
import { CreateTransaccionDto } from './dto/create-transaccion.dto';
import { UpdateTransaccionDto } from './dto/update-transaccion.dto';
import { Transaccion } from './entities/transaccion.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Entidad Transaccion-Controllers')
@Controller('transaccion')
export class TransaccionController {
  constructor(private readonly transaccionService: TransaccionService) {}

  @Post()
  @ApiResponse({status:201, description:'Datos insertados - Modelo Transaccion', type: Transaccion})
  @ApiResponse({status:500, description:'Internal Error Server'})
  create(@Body() createTransaccionDto: CreateTransaccionDto) {
    return this.transaccionService.create(createTransaccionDto);
  }

  @Get()
  @ApiResponse({status:200, description:'Mostrar todos los datos insertados - Modelo Transaccion'})
  findAll() {
    return this.transaccionService.findAll();
  }

  @Get(':id')
  @ApiResponse({status:201, description:'Mostrar datos espesificos buscados por id - Modelo Transaccion'})
  @ApiResponse({status:404, description:'Datos no encontrados en DB'})
  findOne(@Param('id') id: string) {
    return this.transaccionService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({status:201, description:'Actualizar datos por el id - Modelo Transaccion'})
  @ApiResponse({status:404, description:'Datos no encontrados en DB'})
  update(@Param('id') id: string, @Body() updateTransaccionDto: UpdateTransaccionDto) {
    return this.transaccionService.update(id, updateTransaccionDto);
  }

  @Delete(':id')
  @ApiResponse({status:201, description:'Eliminar datos por el id - Modelo Transaccion'})
  @ApiResponse({status:404, description:'Datos no encontrados en DB'})
  remove(@Param('id') id: string) {
    return this.transaccionService.remove(id);
  }
}
