import { Injectable } from '@nestjs/common';
import { CreateDisciplinaDto } from '../disciplinas/dto/create-disciplina.dto';
import { UpdateDisciplinaDto } from '../disciplinas/dto/update-disciplina.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Disciplina } from '../disciplinas/entities/disciplina.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DisciplinasService {
  constructor(
    @InjectRepository(Disciplina)
    private disciplinaRepository: Repository<Disciplina>,
  ) {}

  create(createDisciplinaDto: CreateDisciplinaDto) {
    return this.disciplinaRepository.save(createDisciplinaDto);
  }

  findAll() {
    return this.disciplinaRepository.find();
  }

  findOne(id: number) {
    return this.disciplinaRepository.find({where: {id: id}});
  }

  update(id: number, updateDisciplinaDto: UpdateDisciplinaDto) {
    return this.disciplinaRepository.update(id, updateDisciplinaDto);
  }

  remove(id: number) {
    return this.disciplinaRepository.delete({id: id});
  }
}
