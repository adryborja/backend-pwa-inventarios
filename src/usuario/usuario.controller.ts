import { Controller, Get, Post, Put, Delete, Param, ParseIntPipe, Body } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";

@Controller('usuarios')
export class UsuarioController {
    constructor(private readonly service: UsuarioService) { }

    @Post()
    async crearUsuario(@Body() usuarioData: Partial<Usuario>): Promise<Usuario> {
        return await this.service.crearUsuario(usuarioData);
    }

    @Get(':id')
    async obtenerUsuario(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
        return await this.service.obtenerUsuario(id);
    }

    @Get()
    async obtenerTodosUsuarios(): Promise<Usuario[]> {
        return await this.service.obtenerTodosUsuarios();
    }

    @Put(':id')
    async actualizarUsuario(
        @Param('id', ParseIntPipe) id: number,
        @Body() usuarioData: Partial<Usuario>
    ): Promise<Usuario> {
        return await this.service.actualizarUsuario(id, usuarioData);
    }

    @Delete(':id')
    async eliminarUsuario(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.service.eliminarUsuario(id);
    }

    @Post(':idUsuario/roles/:idRol')
    async asignarRol(
        @Param('idUsuario', ParseIntPipe) idUsuario: number,
        @Param('idRol', ParseIntPipe) idRol: number
    ): Promise<Usuario> {
        return await this.service.asignarRol(idUsuario, idRol);
    }
}