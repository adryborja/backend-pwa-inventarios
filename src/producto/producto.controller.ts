import { Controller, Get, Post, Put, Delete, Param, ParseIntPipe, Body } from "@nestjs/common";
import { ProductoService } from "./producto.service";
import { Producto } from "./producto.entity";

@Controller('productos')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) {}

    @Post()
    async crearProducto(@Body() productoData: Partial<Producto>): Promise<Producto> {
        return await this.productoService.crearProducto(productoData);
    }

    @Get(':id')
    async obtenerProducto(@Param('id', ParseIntPipe) id: number): Promise<Producto> {
        return await this.productoService.obtenerProducto(id);
    }
    
    @Get()
    async obtenerTodosProductos(): Promise<Producto[]> {
        return await this.productoService.obtenerTodosProductos();
    }

    @Put(':id')
    async actualizarProducto(
        @Param('id', ParseIntPipe) id: number,
        @Body() productoData: Partial<Producto>
    ): Promise<Producto> {
        return await this.productoService.actualizarProducto(id, productoData);
    }

    @Delete(':id')
    async eliminarProducto(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.productoService.eliminarProducto(id);
    }
}
