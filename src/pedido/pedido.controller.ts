import { Controller, Get, Post, Put, Delete, Param, ParseIntPipe, Body } from "@nestjs/common";
import { PedidoService } from "./pedido.service";
import { Pedido } from "./pedido.entity";

@Controller('pedidos')
export class PedidoController {
    constructor(private readonly pedidoService: PedidoService) {}

    @Post()
    async crearPedido(@Body() pedidoData: Partial<Pedido>): Promise<Pedido> {
        return await this.pedidoService.crearPedido(pedidoData);
    }

    @Get(':id')
    async obtenerPedido(@Param('id', ParseIntPipe) id: number): Promise<Pedido> {
        return await this.pedidoService.obtenerPedido(id);
    }

    @Get()
    async obtenerTodosPedidos(): Promise<Pedido[]> {
        return await this.pedidoService.obtenerTodosPedidos();
    }

    @Put(':id')
    async actualizarPedido(
        @Param('id', ParseIntPipe) id: number,
        @Body() pedidoData: Partial<Pedido>
    ): Promise<Pedido> {
        return await this.pedidoService.actualizarPedido(id, pedidoData);
    }

    @Delete(':id')
    async eliminarPedido(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.pedidoService.eliminarPedido(id);
    }
}
