import { Module } from '@nestjs/common';
import { TurmasService } from '../services/turmas.service';
import { TurmasController } from '../controllers/turmas.controller';
import { Turma } from './entities/turma.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Turma])],
  controllers: [TurmasController],
  providers: [TurmasService],
})
export class TurmasModule {}
