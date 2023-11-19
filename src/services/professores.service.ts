import { Injectable } from '@nestjs/common';
import { Professor } from '../professores/entities/professor.entity';
import { Repository } from 'typeorm';
import { CreateProfessorDto } from '../professores/dto/create-professor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProfessorDto } from '../professores/dto/update-professor.dto';

@Injectable()
export class ProfessoresService {
  constructor(
    @InjectRepository(Professor)
    private professorRepository: Repository<Professor>,
  ) {}

  create(createprofessorDto: CreateProfessorDto) {
    return this.professorRepository.save(createprofessorDto);
  }

  findAll() {
    return this.professorRepository.find();
  }

  findOne(id: number) {
    return this.professorRepository.find({where: {id: id}});
  }

  update(id: number, updateprofessorDto: UpdateProfessorDto) {
    return this.professorRepository.update(id, updateprofessorDto);
  }

  remove(id: number) {
    return this.professorRepository.delete({id: id});
  }
}
