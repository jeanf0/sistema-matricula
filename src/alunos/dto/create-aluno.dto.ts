import { ApiProperty } from "@nestjs/swagger";

export class CreateAlunoDto {
    @ApiProperty()
    nome: string;
    @ApiProperty()
    email: string;
}
