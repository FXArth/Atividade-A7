import { IsString, IsNotEmpty, IsDateString, IsUUID } from 'class-validator';

// Data Transfer Object: Define o que esperamos receber no "corpo" (Body) da requisição POST.
// As anotações @IsString, @IsNotEmpty, etc., fazem a validação automática.

export class CreateDescarteDto {
  @IsString()
  @IsNotEmpty()
  nomeUsuario: string;

  @IsString()
  @IsNotEmpty()
  tipoResiduo: string;

  @IsDateString() // Valida se é uma string em formato de data ISO (ex: "2025-11-20T10:00:00.000Z")
  @IsNotEmpty()
  data: string;

  @IsUUID() // Valida se é um ID universalmente único (UUID)
  @IsNotEmpty()
  pontoDeDescarteId: string;
}