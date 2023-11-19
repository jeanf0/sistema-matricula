import { Module } from '@nestjs/common';
import { DisciplinasService } from '../services/disciplinas.service';
import { DisciplinasController } from '../controllers/disciplinas.controller';
import { Disciplina } from './entities/disciplina.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Disciplina])],
  controllers: [DisciplinasController],
  providers: [DisciplinasService],
})
export class DisciplinasModule {}
