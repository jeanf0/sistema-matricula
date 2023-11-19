import { Injectable } from '@nestjs/common';
import { CreateTurmaDto } from '../turmas/dto/create-turma.dto';
import { UpdateTurmaDto } from '../turmas/dto/update-turma.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Turma } from '../turmas/entities/turma.entity';
import { Repository } from 'typeorm';
import { where } from 'sequelize';

@Injectable()
export class TurmasService {
  constructor(
    @InjectRepository(Turma)
    private turmaRepository: Repository<Turma>,
  ) {}

  create(createTurmaDto: CreateTurmaDto) {
    return this.turmaRepository.save(createTurmaDto);
  }

  findAll() {
    return this.turmaRepository.find({ relations: {
      professor: true,
      disciplina: true,
      alunos: true,
    }});
  }

  findOne(id: number) {
    return this.turmaRepository.find({where: {id: id}, relations: {
      professor: true,
      disciplina: true,
      alunos: true,
    }});
  }

  update(id: number, updateTurmaDto: UpdateTurmaDto) {
    return this.turmaRepository.update(id, updateTurmaDto);
  }

  remove(id: number) {
    return this.turmaRepository.delete({id: id});
  }
}
