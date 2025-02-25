import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { DetallePedido } from "./detalle-pedido.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class DetallePedidoService {
    constructor(
        @InjectRepository(DetallePedido)
        private readonly detallePedidoRepository: Repository<DetallePedido>,
    ) {}

    async crearDetallePedido(detallePedidoData: Partial<DetallePedido>): Promise<DetallePedido> {
        const nuevoDetallePedido = this.detallePedidoRepository.create(detallePedidoData);
        return await this.detallePedidoRepository.save(nuevoDetallePedido);
    }

    async obtenerDetallePedido(id: number): Promise<DetallePedido> {
        const detallePedido = await this.detallePedidoRepository.findOne({ where: { id } });
        if (!detallePedido) {
            throw new NotFoundException(`Detalle de pedido con ID ${id} no encontrado`);
        }
        return detallePedido;
    }

    async obtenerTodosDetallesPedido(): Promise<DetallePedido[]> {
        return await this.detallePedidoRepository.find();
    }

    async actualizarDetallePedido(id: number, detallePedidoData: Partial<DetallePedido>): Promise<DetallePedido> {
        await this.detallePedidoRepository.update(id, detallePedidoData);
        return this.obtenerDetallePedido(id);
    }

    async eliminarDetallePedido(id: number): Promise<void> {
        const detallePedido = await this.obtenerDetallePedido(id);
        await this.detallePedidoRepository.remove(detallePedido);
    }
}
