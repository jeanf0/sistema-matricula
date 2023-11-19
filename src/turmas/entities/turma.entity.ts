import { Aluno } from "src/alunos/entities/aluno.entity";
import { Disciplina } from "src/disciplinas/entities/disciplina.entity";
import { Professor } from "src/professores/entities/professor.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Turma {

    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    nome: string;
    @Column()
    turno: string;
    @Column()
    diaDaSemana: string;

    @ManyToOne(
        () => Professor,
        professor => professor.turmas,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
    )
    professor: Professor;

    @ManyToOne(
        () => Disciplina,
        disciplina => disciplina.turmas,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
    )
    disciplina: Disciplina;
    
    @ManyToMany(
        () => Aluno,
        aluno => aluno.turmas,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
    )
    alunos?: Aluno[];

}
