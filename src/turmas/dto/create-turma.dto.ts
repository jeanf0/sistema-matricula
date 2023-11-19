import { Aluno } from "src/alunos/entities/aluno.entity";
import { Disciplina } from "src/disciplinas/entities/disciplina.entity";
import { Professor } from "src/professores/entities/professor.entity";

export class CreateTurmaDto {
    nome: string;
    turno: string;
    diaDaSemana: string;
    professor: Professor;
    disciplina: Disciplina;
    alunos: Aluno[];

}
