import { Turma } from "src/turmas/entities/turma.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Disciplina {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    nome: string;
    @Column()
    descricao: string;

    @OneToMany(
        () => Turma,
        turma => turma.disciplina,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
    )
    turmas: Turma[];

}
