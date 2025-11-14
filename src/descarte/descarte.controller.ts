import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { DescarteService } from './descarte.service';
import { CreateDescarteDto } from './dto/create-descarte.dto';
import { Descarte } from './descarte.model';

@Controller('descarte') // Define a rota base: /descarte
export class DescarteController {
  constructor(private readonly descarteService: DescarteService) {}

  /**
   * Rota: POST /descarte
   * Usa o CreateDescarteDto para validar o corpo da requisição
   */
  @Post()
  create(@Body() createDescarteDto: CreateDescarteDto): Descarte {
    return this.descarteService.create(createDescarteDto);
  }

  /**
   * Rota: GET /descarte
   * Ou com filtro: GET /descarte?tipoResiduo=plástico
   * Usa @Query() para pegar o parâmetro da URL
   */
  @Get()
  findAll(@Query('tipoResiduo') tipoResiduo?: string): Descarte[] {
    // O parâmetro 'tipoResiduo' (se existir) é passado para o service
    return this.descarteService.findAll(tipoResiduo);
  }
}