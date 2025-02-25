import { Controller, Get, Post, Put, Delete, Param, ParseIntPipe, Body } from "@nestjs/common";
import { EmpresaService } from "./empresa.service";
import { Empresa } from "./empresa.entity";

@Controller('empresas')
export class EmpresaController {
    constructor(private readonly empresaService: EmpresaService) {}

    @Post()
    async crearEmpresa(@Body() empresaData: Partial<Empresa>): Promise<Empresa> {
        return await this.empresaService.crearEmpresa(empresaData);
    }

    @Get(':id')
    async obtenerEmpresa(@Param('id', ParseIntPipe) id: number): Promise<Empresa> {
        return await this.empresaService.obtenerEmpresa(id);
    }

    @Get()
    async obtenerTodasEmpresas(): Promise<Empresa[]> {
        return await this.empresaService.obtenerTodasEmpresas();
    }

    @Put(':id')
    async actualizarEmpresa(
        @Param('id', ParseIntPipe) id: number,
        @Body() empresaData: Partial<Empresa>
    ): Promise<Empresa> {
        return await this.empresaService.actualizarEmpresa(id, empresaData);
    }

    @Delete(':id')
    async eliminarEmpresa(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.empresaService.eliminarEmpresa(id);
    }
}