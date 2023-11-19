import { ApiProperty } from "@nestjs/swagger";

export class CreateDisciplinaDto {
    @ApiProperty()
    nome: string;

    @ApiProperty()
    descricao: string;
}
