import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Pedido } from "./pedido.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PedidoService {
    constructor(
        @InjectRepository(Pedido)
        private readonly pedidoRepository: Repository<Pedido>,
    ) {}

    async crearPedido(pedidoData: Partial<Pedido>): Promise<Pedido> {
        const nuevoPedido = this.pedidoRepository.create(pedidoData);
        return await this.pedidoRepository.save(nuevoPedido);
    }

    async obtenerPedido(id: number): Promise<Pedido> {
        const pedido = await this.pedidoRepository.findOne({ where: { id } });
        if (!pedido) {
            throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
        }
        return pedido;
    }

    async obtenerTodosPedidos(): Promise<Pedido[]> {
        return await this.pedidoRepository.find();
    }

    async actualizarPedido(id: number, pedidoData: Partial<Pedido>): Promise<Pedido> {
        await this.pedidoRepository.update(id, pedidoData);
        return this.obtenerPedido(id);
    }

    async eliminarPedido(id: number): Promise<void> {
        const pedido = await this.obtenerPedido(id);
        await this.pedidoRepository.remove(pedido);
    }
}
