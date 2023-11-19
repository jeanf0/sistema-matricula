import { Turma } from "src/turmas/entities/turma.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Professor {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @OneToMany(
        () => Turma,
        turma => turma.professor,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
    )
    turmas: Turma[];
}
