import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunosModule } from './alunos/alunos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { DisciplinasModule } from './disciplinas/disciplinas.module';
import { ProfessoresModule } from './professores/professores.module';
import { TurmasModule } from './turmas/turmas.module';

@Module({
  imports: [AlunosModule,TypeOrmModule.forRoot(config), DisciplinasModule, ProfessoresModule, TurmasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
