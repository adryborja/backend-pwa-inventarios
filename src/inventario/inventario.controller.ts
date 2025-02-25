import { Controller, Get, Post, Put, Delete, Param, ParseIntPipe, Body } from "@nestjs/common";
import { InventarioService } from "./inventario.service";
import { Inventario } from "./inventario.entity";

@Controller('inventarios')
export class InventarioController {
    constructor(private readonly inventarioService: InventarioService) {}

    @Post()
    async crearInventario(@Body() inventarioData: Partial<Inventario>): Promise<Inventario> {
        return await this.inventarioService.crearInventario(inventarioData);
    }

    @Get(':id')
    async obtenerInventario(@Param('id', ParseIntPipe) id: number): Promise<Inventario> {
        return await this.inventarioService.obtenerInventario(id);
    }

    @Get()
    async obtenerTodosInventarios(): Promise<Inventario[]> {
        return await this.inventarioService.obtenerTodosInventarios();
    }

    @Put(':id')
    async actualizarInventario(
        @Param('id', ParseIntPipe) id: number,
        @Body() inventarioData: Partial<Inventario>
    ): Promise<Inventario> {
        return await this.inventarioService.actualizarInventario(id, inventarioData);
    }

    @Delete(':id')
    async eliminarInventario(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.inventarioService.eliminarInventario(id);
    }
}
