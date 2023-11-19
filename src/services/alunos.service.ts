import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from '../alunos/dto/create-aluno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aluno } from '../alunos/entities/aluno.entity';
import { Repository } from 'typeorm';
import { AlunoTurma } from '../aluno-turma/aluno-turma.entity';
import { UpdateAlunoDto } from '../alunos/dto/update-aluno.dto';
import { CreateAlunoTurmaDto } from 'src/aluno-turma/dto/create-aluno-turma.dto';

@Injectable()
export class AlunosService {
  constructor(
    @InjectRepository(Aluno)
    private readonly alunoRepository: Repository<Aluno>,
    @InjectRepository(AlunoTurma)
    private readonly alunoTurmaRepository: Repository<AlunoTurma>,
  ) {}

  create(createAlunoDto: CreateAlunoDto) {
    return this.alunoRepository.save(createAlunoDto);
  }

  findAll() {
    return this.alunoRepository.find();
  }

  findOne(id: number) {
    return this.alunoRepository.find({where: {id: id}, relations: {
      turmas: {
        disciplina: true,
        professor: true
      },
    }});
  }

  update(id: number, updateAlunoDto: UpdateAlunoDto) {
    return this.alunoRepository.update(id, updateAlunoDto);
  }

  remove(id: number) {
    return this.alunoRepository.delete({id: id});
  }

  
  async joinTurma(createAlunoTurma: CreateAlunoTurmaDto): Promise<void> {
    await this.alunoTurmaRepository.save(createAlunoTurma);
  }
}
