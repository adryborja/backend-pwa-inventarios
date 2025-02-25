import { Controller, Get, Post, Put, Delete, Param, ParseIntPipe, Body } from "@nestjs/common";
import { AlertaStockService } from "./alerta-stock.service";
import { AlertaStock } from "./alerta-stock.entity";

@Controller('alertas')
export class AlertaStockController {
    constructor(private readonly alertaService: AlertaStockService) {}

    @Post()
    async crearAlerta(@Body() alertaData: Partial<AlertaStock>): Promise<AlertaStock> {
        return await this.alertaService.crearAlerta(alertaData);
    }

    @Get(':id')
    async obtenerAlerta(@Param('id', ParseIntPipe) id: number): Promise<AlertaStock> {
        return await this.alertaService.obtenerAlerta(id);
    }

    @Get()
    async obtenerTodasAlertas(): Promise<AlertaStock[]> {
        return await this.alertaService.obtenerTodasAlertas();
    }

    @Put(':id')
    async actualizarAlerta(
        @Param('id', ParseIntPipe) id: number,
        @Body() alertaData: Partial<AlertaStock>
    ): Promise<AlertaStock> {
        return await this.alertaService.actualizarAlerta(id, alertaData);
    }

    @Delete(':id')
    async eliminarAlerta(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.alertaService.eliminarAlerta(id);
    }
}
