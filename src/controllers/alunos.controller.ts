import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlunosService } from '../services/alunos.service';
import { CreateAlunoDto } from '../alunos/dto/create-aluno.dto';
import { CreateAlunoTurmaDto } from 'src/aluno-turma/dto/create-aluno-turma.dto';
import { UpdateAlunoDto } from '../alunos/dto/update-aluno.dto';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('alunos')
@ApiTags('Alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar Aluno' })
  @ApiResponse({ status: 201, description: 'Aluno criado' })
  create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunosService.create(createAlunoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna lista de Alunos' })
  findAll() {
    return this.alunosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna aluno por seu ID' })
  findOne(@Param('id') id: string) {
    return this.alunosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar Aluno' })
  @ApiResponse({ status: 201 })
  update(@Param('id') id: string, @Body() updateAlunoDto: UpdateAlunoDto) {
    return this.alunosService.update(+id, updateAlunoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Aluno por seu ID' })
  @ApiResponse({ status: 204 })
  remove(@Param('id') id: string) {
    return this.alunosService.remove(+id);
  }

  @Post('/join-turma')
  @ApiOperation({ summary: 'Matricula Aluno em uma turma' })
  @ApiResponse({ status: 201, description: 'Aluno matriculado' })
  async joinTurma(@Body() createAlunoTurmaDto: CreateAlunoTurmaDto) {
    await this.alunosService.joinTurma(createAlunoTurmaDto)
  }
}
