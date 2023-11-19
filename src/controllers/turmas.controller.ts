import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TurmasService } from '../services/turmas.service';
import { CreateTurmaDto } from '../turmas/dto/create-turma.dto';
import { UpdateTurmaDto } from '../turmas/dto/update-turma.dto';

@Controller('turmas')
export class TurmasController {
  constructor(private readonly turmasService: TurmasService) {}

  @Post()
  create(@Body() createTurmaDto: CreateTurmaDto) {
    return this.turmasService.create(createTurmaDto);
  }

  @Get()
  findAll() {
    return this.turmasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turmasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTurmaDto: UpdateTurmaDto) {
    return this.turmasService.update(+id, updateTurmaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turmasService.remove(+id);
  }
}
