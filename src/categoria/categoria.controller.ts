import { Controller, Get, Post, Put, Delete, Param, ParseIntPipe, Body } from "@nestjs/common";
import { CategoriaService } from "./categoria.service";
import { Categoria } from "./categoria.entity";

@Controller('categorias')
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) {}

    @Post()
    async crearCategoria(@Body() categoriaData: Partial<Categoria>): Promise<Categoria> {
        return await this.categoriaService.crearCategoria(categoriaData);
    }

    @Get(':id')
    async obtenerCategoria(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return await this.categoriaService.obtenerCategoria(id);
    }

    @Get()
    async obtenerTodasCategorias(): Promise<Categoria[]> {
        return await this.categoriaService.obtenerTodasCategorias();
    }

    @Put(':id')
    async actualizarCategoria(
        @Param('id', ParseIntPipe) id: number,
        @Body() categoriaData: Partial<Categoria>
    ): Promise<Categoria> {
        return await this.categoriaService.actualizarCategoria(id, categoriaData);
    }

    @Delete(':id')
    async eliminarCategoria(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.categoriaService.eliminarCategoria(id);
    }
}
