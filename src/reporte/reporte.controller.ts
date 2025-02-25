import { Controller, Get, Post, Put, Delete, Param, ParseIntPipe, Body } from "@nestjs/common";
import { ReporteService } from "./reporte.service";
import { Reporte } from "./reporte.entity";

@Controller('reportes')
export class ReporteController {
    constructor(private readonly reporteService: ReporteService) {}

    @Post()
    async crearReporte(@Body() reporteData: Partial<Reporte>): Promise<Reporte> {
        return await this.reporteService.crearReporte(reporteData);
    }

    @Get(':id')
    async obtenerReporte(@Param('id', ParseIntPipe) id: number): Promise<Reporte> {
        return await this.reporteService.obtenerReporte(id);
    }

    @Get()
    async obtenerTodosReportes(): Promise<Reporte[]> {
        return await this.reporteService.obtenerTodosReportes();
    }

    @Put(':id')
    async actualizarReporte(
        @Param('id', ParseIntPipe) id: number,
        @Body() reporteData: Partial<Reporte>
    ): Promise<Reporte> {
        return await this.reporteService.actualizarReporte(id, reporteData);
    }

    @Delete(':id')
    async eliminarReporte(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.reporteService.eliminarReporte(id);
    }
}
