import { ApiProperty } from "@nestjs/swagger";
import { Aluno } from "src/alunos/entities/aluno.entity";
import { Disciplina } from "src/disciplinas/entities/disciplina.entity";
import { Professor } from "src/professores/entities/professor.entity";

export class CreateTurmaDto {
    @ApiProperty()
    nome: string;

    @ApiProperty()
    turno: string;

    @ApiProperty()
    diaDaSemana: string;

    @ApiProperty()
    professor: Professor;

    @ApiProperty()
    disciplina: Disciplina;

    alunos: Aluno[];
}
