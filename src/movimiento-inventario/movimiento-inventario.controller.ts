import { Controller, Get, Post, Param, ParseIntPipe, Body, Put, Delete } from "@nestjs/common";
import { MovimientoInventarioService } from "./movimiento-inventario.service";
import { MovimientoInventario } from "./movimiento-inventario.entity";

@Controller('movimientos')
export class MovimientoInventarioController {
    constructor(private readonly movimientoService: MovimientoInventarioService) {}

    @Post()
    async registrarMovimiento(@Body() movimientoData: Partial<MovimientoInventario>): Promise<MovimientoInventario> {
        return await this.movimientoService.crearMovimiento(movimientoData);
    }
    @Get(':id')
    async obtenerMovimiento(@Param('id', ParseIntPipe) id: number): Promise<MovimientoInventario> {
        return await this.movimientoService.obtenerMovimientos(id);
    }

    @Get()
    async obtenerTodosMovimientos(): Promise<MovimientoInventario[]> {
        return await this.movimientoService.obtenerTodosMovimientos();
    }
    @Put(':id')
    async actualizarMovimiento(
        @Param('id', ParseIntPipe) id: number,
        @Body() movimientoData: Partial<MovimientoInventario>
    ): Promise<MovimientoInventario> {
        return await this.movimientoService.actualizarMovimiento(id, movimientoData);
    }   
    @Delete(':id')
    async eliminarMovimiento(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.movimientoService.eliminarMovimiento(id);
    }
}
