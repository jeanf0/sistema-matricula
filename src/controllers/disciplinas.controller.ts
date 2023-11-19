import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DisciplinasService } from '../services/disciplinas.service';
import { CreateDisciplinaDto } from '../disciplinas/dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from '../disciplinas/dto/update-disciplina.dto';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';


@Controller('disciplinas')
@ApiTags('Disciplinas')
export class DisciplinasController {
  constructor(private readonly disciplinasService: DisciplinasService) {}

  @Post()
  @ApiOperation({ summary: 'Criar Disciplina' })
  @ApiResponse({ status: 201, description: 'Disciplina criado' })
  create(@Body() createDisciplinaDto: CreateDisciplinaDto) {
    return this.disciplinasService.create(createDisciplinaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna lista de Disciplinas' })
  findAll() {
    return this.disciplinasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna disciplina por seu ID' })
  findOne(@Param('id') id: string) {
    return this.disciplinasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Disciplina' })
  @ApiResponse({ status: 201 })
  update(@Param('id') id: string, @Body() updateDisciplinaDto: UpdateDisciplinaDto) {
    return this.disciplinasService.update(+id, updateDisciplinaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Disciplina por seu ID' })
  @ApiResponse({ status: 204 })
  remove(@Param('id') id: string) {
    return this.disciplinasService.remove(+id);
  }
}
