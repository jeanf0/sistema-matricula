import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfessoresService } from '../services/professores.service';
import { CreateProfessorDto } from '../professores/dto/create-professor.dto';
import { UpdateProfessorDto } from '../professores/dto/update-professor.dto';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';


@Controller('professores')
@ApiTags('Professores')
export class ProfessoresController {
  constructor(private readonly professoresService: ProfessoresService) {}

  @Post()
  @ApiOperation({ summary: 'Criar Professor' })
  @ApiResponse({ status: 201, description: 'Professor criado' })
  create(@Body() createProfessorDto: CreateProfessorDto) {
    return this.professoresService.create(createProfessorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna lista de Professor' })
  findAll() {
    return this.professoresService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna professor por seu ID' })
  findOne(@Param('id') id: string) {
    return this.professoresService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Professor' })
  @ApiResponse({ status: 201 })
  update(@Param('id') id: string, @Body() updateProfessorDto: UpdateProfessorDto) {
    return this.professoresService.update(+id, updateProfessorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Professor por seu ID' })
  @ApiResponse({ status: 204 })
  remove(@Param('id') id: string) {
    return this.professoresService.remove(+id);
  }
}
