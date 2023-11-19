import { ApiProperty } from "@nestjs/swagger";

export class CreateProfessorDto {
    @ApiProperty()    
    nome: string;
    @ApiProperty()
    email: string;
}
