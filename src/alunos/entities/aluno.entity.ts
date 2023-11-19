import { Turma } from "src/turmas/entities/turma.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Aluno {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @ManyToMany(
        () => Turma,
        turma => turma.alunos,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
    @JoinTable({
        name: 'aluno_turma',
        joinColumn: {
            name: 'aluno_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'turma_id',
            referencedColumnName: 'id',
        }
    })
    turmas?: Turma[];
}
