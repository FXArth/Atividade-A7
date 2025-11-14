import { Injectable } from '@nestjs/common';
import { Descarte } from './descarte.model';
import { CreateDescarteDto } from './dto/create-descarte.dto';
import { v4 as uuidv4 } from 'uuid'; // Importamos o gerador de UUID

@Injectable()
export class DescarteService {
  // Array em memória para simular o banco de dados (o mais rápido para a entrega)
  private descartes: Descarte[] = [];

  /**
   * Cria um novo registro de descarte
   */
  create(createDescarteDto: CreateDescarteDto): Descarte {
    const novoDescarte: Descarte = {
      id: uuidv4(), // Gera um ID único
      nomeUsuario: createDescarteDto.nomeUsuario,
      tipoResiduo: createDescarteDto.tipoResiduo,
      pontoDeDescarteId: createDescarteDto.pontoDeDescarteId,
      data: new Date(createDescarteDto.data), // Converte a string do DTO para um objeto Date
    };

    this.descartes.push(novoDescarte);
    return novoDescarte;
  }

  /**
   * Lista todos os descartes, com filtro opcional por tipoResiduo
   */
  findAll(tipoResiduo?: string): Descarte[] {
    // Se o filtro 'tipoResiduo' foi fornecido na URL...
    if (tipoResiduo) {
      const descartesFiltrados = this.descartes.filter(
        (d) => d.tipoResiduo.toLowerCase() === tipoResiduo.toLowerCase(),
      );
      return descartesFiltrados;
    }

    // Se nenhum filtro foi fornecido, retorna todos
    return this.descartes;
  }
}