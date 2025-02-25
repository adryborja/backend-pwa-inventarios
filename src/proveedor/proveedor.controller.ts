import { Controller, Get, Post, Put, Delete, Param, ParseIntPipe, Body } from "@nestjs/common";
import { ProveedorService } from "./proveedor.service";
import { Proveedor } from "./proveedor.entity";

@Controller('proveedores')
export class ProveedorController {
    constructor(private readonly proveedorService: ProveedorService) {}

    @Post()
    async crearProveedor(@Body() proveedorData: Partial<Proveedor>): Promise<Proveedor> {
        return await this.proveedorService.crearProveedor(proveedorData);
    }

    @Get(':id')
    async obtenerProveedor(@Param('id', ParseIntPipe) id: number): Promise<Proveedor> {
        return await this.proveedorService.obtenerProveedor(id);
    }

    @Get()
    async obtenerTodosProveedores(): Promise<Proveedor[]> {
        return await this.proveedorService.obtenerTodosProveedores();
    }

    @Put(':id')
    async actualizarProveedor(
        @Param('id', ParseIntPipe) id: number,
        @Body() proveedorData: Partial<Proveedor>
    ): Promise<Proveedor> {
        return await this.proveedorService.actualizarProveedor(id, proveedorData);
    }

    @Delete(':id')
    async eliminarProveedor(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.proveedorService.eliminarProveedor(id);
    }
}
