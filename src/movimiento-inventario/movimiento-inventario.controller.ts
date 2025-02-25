import { Controller, Get, Post, Param, ParseIntPipe, Body } from "@nestjs/common";
import { MovimientoInventarioService } from "./movimiento-inventario.service";
import { MovimientoInventario } from "./movimiento-inventario.entity";

@Controller('movimientos')
export class MovimientoInventarioController {
    constructor(private readonly movimientoService: MovimientoInventarioService) {}

    @Post()
    async registrarMovimiento(@Body() movimientoData: Partial<MovimientoInventario>): Promise<MovimientoInventario> {
        return await this.movimientoService.registrarMovimiento(movimientoData);
    }

    @Get()
    async obtenerTodosMovimientos(): Promise<MovimientoInventario[]> {
        return await this.movimientoService.obtenerTodosMovimientos();
    }
}
