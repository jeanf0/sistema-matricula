import { Module } from '@nestjs/common';
import { ProfessoresService } from '../services/professores.service';
import { ProfessoresController } from '../controllers/professores.controller';
import { Professor } from './entities/professor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Professor])],
  controllers: [ProfessoresController],
  providers: [ProfessoresService],
})
export class ProfessoresModule {}
