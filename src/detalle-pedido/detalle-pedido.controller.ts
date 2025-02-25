import { Controller, Get, Post, Put, Delete, Param, ParseIntPipe, Body } from "@nestjs/common";
import { DetallePedidoService } from "./detalle-pedido.service";
import { DetallePedido } from "./detalle-pedido.entity";

@Controller('detalles-pedido')
export class DetallePedidoController {
    constructor(private readonly detallePedidoService: DetallePedidoService) {}

    @Post()
    async crearDetallePedido(@Body() detallePedidoData: Partial<DetallePedido>): Promise<DetallePedido> {
        return await this.detallePedidoService.crearDetallePedido(detallePedidoData);
    }

    @Get(':id')
    async obtenerDetallePedido(@Param('id', ParseIntPipe) id: number): Promise<DetallePedido> {
        return await this.detallePedidoService.obtenerDetallePedido(id);
    }

    @Get()
    async obtenerTodosDetallesPedido(): Promise<DetallePedido[]> {
        return await this.detallePedidoService.obtenerTodosDetallesPedido();
    }

    @Put(':id')
    async actualizarDetallePedido(
        @Param('id', ParseIntPipe) id: number,
        @Body() detallePedidoData: Partial<DetallePedido>
    ): Promise<DetallePedido> {
        return await this.detallePedidoService.actualizarDetallePedido(id, detallePedidoData);
    }

    @Delete(':id')
    async eliminarDetallePedido(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return await this.detallePedidoService.eliminarDetallePedido(id);
    }
}
