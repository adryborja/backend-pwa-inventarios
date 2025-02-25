import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { MovimientoInventario } from "./movimiento-inventario.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class MovimientoInventarioService {
    constructor(
        @InjectRepository(MovimientoInventario)
        private readonly movimientoRepository: Repository<MovimientoInventario>,
    ) {}

    async registrarMovimiento(movimientoData: Partial<MovimientoInventario>): Promise<MovimientoInventario> {
        const nuevoMovimiento = this.movimientoRepository.create(movimientoData);
        return await this.movimientoRepository.save(nuevoMovimiento);
    }

    async obtenerTodosMovimientos(): Promise<MovimientoInventario[]> {
        return await this.movimientoRepository.find();
    }
}
