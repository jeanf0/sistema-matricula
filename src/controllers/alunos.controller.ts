import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlunosService } from '../services/alunos.service';
import { CreateAlunoDto } from '../alunos/dto/create-aluno.dto';
import { CreateAlunoTurmaDto } from 'src/aluno-turma/dto/create-aluno-turma.dto';
import { UpdateAlunoDto } from '../alunos/dto/update-aluno.dto';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunosService.create(createAlunoDto);
  }

  @Get()
  findAll() {
    return this.alunosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alunosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlunoDto: UpdateAlunoDto) {
    return this.alunosService.update(+id, updateAlunoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alunosService.remove(+id);
  }

  @Post('/join-turma')
  async joinTurma(@Body() createAlunoTurmaDto: CreateAlunoTurmaDto) {
    await this.alunosService.joinTurma(createAlunoTurmaDto)
  }
}
