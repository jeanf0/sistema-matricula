import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Aluno } from "../alunos/entities/aluno.entity";
import { Turma } from "src/turmas/entities/turma.entity";

@Entity('aluno_turma')
export class AlunoTurma {
    @PrimaryColumn({name: 'aluno_id'})
    alunoId: number;

    @PrimaryColumn({name: 'turma_id'})
    turmaId: number;

    @ManyToOne(
        () => Aluno,
        aluno => aluno.turmas,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
    )
    @JoinColumn([{ name: 'aluno_id', referencedColumnName: 'id'}])
    alunos: Aluno[];

    @ManyToOne(
        () => Turma,
        turma => turma.alunos,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
    )
    @JoinColumn([{ name: 'turma_id', referencedColumnName: 'id'}])
    turmas: Turma[];
}