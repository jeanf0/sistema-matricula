import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TurmasService } from '../services/turmas.service';
import { CreateTurmaDto } from '../turmas/dto/create-turma.dto';
import { UpdateTurmaDto } from '../turmas/dto/update-turma.dto';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';


@Controller('turmas')
@ApiTags('Turmas')
export class TurmasController {
  constructor(private readonly turmasService: TurmasService) {}

  @Post()
  @ApiOperation({ summary: 'Criar Turma' })
  @ApiResponse({ status: 201, description: 'Turma criada' })
  create(@Body() createTurmaDto: CreateTurmaDto) {
    return this.turmasService.create(createTurmaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna lista de Turmas' })
  findAll() {
    return this.turmasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna turma por seu ID' })
  findOne(@Param('id') id: string) {
    return this.turmasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Turma' })
  @ApiResponse({ status: 201 })
  update(@Param('id') id: string, @Body() updateTurmaDto: UpdateTurmaDto) {
    return this.turmasService.update(+id, updateTurmaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Turma por seu ID' })
  @ApiResponse({ status: 204 })
  remove(@Param('id') id: string) {
    return this.turmasService.remove(+id);
  }
}
