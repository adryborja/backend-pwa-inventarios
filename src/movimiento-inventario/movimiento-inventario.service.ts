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

    async crearMovimiento(movimientoData: Partial<MovimientoInventario>): Promise<MovimientoInventario> {
            const nuevoMovimiento = this.movimientoRepository.create(movimientoData);
            return await this.movimientoRepository.save(nuevoMovimiento);
        }

    async obtenerMovimientos(id: number): Promise<MovimientoInventario> {
        const movimiento = await this.movimientoRepository.findOne({
            where: { id },
            relations: ["producto", "usuario"], // ✅ Incluir relaciones
        });
        if (!movimiento) {
            throw new NotFoundException(`Movimiento con ID ${id} no encontrado`);
        }
        return movimiento;
    }

    async obtenerTodosMovimientos(): Promise<MovimientoInventario[]> {
        return await this.movimientoRepository.find(
            {
                relations: ["producto", "usuario"],
            });
    }

    async actualizarMovimiento(id: number, movimientoData: Partial<MovimientoInventario>): Promise<MovimientoInventario> {
        await this.movimientoRepository.update(id, movimientoData);
        return this.obtenerMovimientos(id);
    }

    async eliminarMovimiento(id: number): Promise<void> {
        const movimiento = await this.obtenerMovimientos(id);
        await this.movimientoRepository.remove(movimiento);
    }
}
