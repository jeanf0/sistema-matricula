import { Module } from '@nestjs/common';
import { AlunosService } from '../services/alunos.service';
import { AlunosController } from '../controllers/alunos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './entities/aluno.entity';
import { AlunoTurma } from 'src/aluno-turma/aluno-turma.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aluno]), TypeOrmModule.forFeature([AlunoTurma])],
  controllers: [AlunosController],
  providers: [AlunosService],
})
export class AlunosModule {}
