import { ApiProperty } from "@nestjs/swagger";

export class CreateAlunoTurmaDto {
    @ApiProperty()
    alunoId: number;

    @ApiProperty()
    turmaId: number;
}
