import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from "@nestjs/common";
import { RolService } from "./rol.service";
import { Rol } from "./rol.entity";

@Controller('roles')
export class RolController {
    constructor(private readonly rolService: RolService) { }

    @Get()
    async obtenerRoles(): Promise<Rol[]> {
        return await this.rolService.obtenerRoles();
    }

    @Post()
    async crearRol(@Body() rolData: Partial<Rol>): Promise<Rol> {
        return await this.rolService.crearRol(rolData);
    }

    @Put(':id')
    async actualizarRol(
        @Param('id', ParseIntPipe) id: number,
        @Body() rolData: Partial<Rol>
    ): Promise<Rol> {
        return await this.rolService.actualizarRol(id, rolData);
    }

    @Delete(':id')
    async eliminarRol(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.rolService.eliminarRol(id);
    }
}