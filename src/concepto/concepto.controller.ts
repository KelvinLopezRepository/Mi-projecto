import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConceptoService } from './concepto.service';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';

@ApiTags('Entidad Concepto-Controllers')
@Controller('concepto')
export class ConceptoController {
  constructor(private readonly conceptoService: ConceptoService) {}

  @Post()
  @ApiBody({description: 'Se insertan los datos declarados en el createConceptoDto'})
  @ApiResponse({status:201, description:'Datos insertados-Modelo Concepto'})
  @ApiResponse({status:500, description:'Internal Error Server'})
  create(@Body() createConceptoDto: CreateConceptoDto) {
    return this.conceptoService.create(createConceptoDto);
  }

  @Get()
  @ApiResponse({status:200, description:'Mostrar todos los datos insertados-Modelo Concepto'})
  findAll() {
    return this.conceptoService.findAll();
  }

  @Get(':id')
  @ApiResponse({status:201, description:'Mostrar datos espesificos buscados por id - Modelo Concepto'})
  @ApiResponse({status:404, description:'Datos no encontrados en DB'})
  findOne(@Param('id') id: string) {
    return this.conceptoService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({description: 'Se insertan los datos declarados en el updateCajaDto'})
  @ApiResponse({status:201, description:'Actualizar datos por el id - Modelo Concepto'})
  @ApiResponse({status:404, description:'Datos no encontrados en DB'})
  update(@Param('id') id: string, @Body() updateConceptoDto: UpdateConceptoDto) {
    return this.conceptoService.update(id, updateConceptoDto);
  }

  @Delete(':id')
  @ApiResponse({status:201, description:'Eliminar datos por el id - Concepto'})
  @ApiResponse({status:404, description:'Datos no encontrados en DB'})
  remove(@Param('id') id: string) {
    return this.conceptoService.remove(id);
  }
}
