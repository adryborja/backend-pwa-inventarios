import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Inventario } from "./inventario.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class InventarioService {
    constructor(
        @InjectRepository(Inventario)
        private readonly inventarioRepository: Repository<Inventario>,
    ) {}

    async crearInventario(inventarioData: Partial<Inventario>): Promise<Inventario> {
        const nuevoInventario = this.inventarioRepository.create(inventarioData);
        return await this.inventarioRepository.save(nuevoInventario);
    }

    async obtenerInventario(id: number): Promise<Inventario> {
        const inventario = await this.inventarioRepository.findOne({ 
            where: { id },
            relations: ["empresa"],
        });
        
        if (!inventario) {
            throw new NotFoundException(`Inventario con ID ${id} no encontrado`);
            
        }
        return inventario;
    }

    async obtenerTodosInventarios(): Promise<Inventario[]> {
        return await this.inventarioRepository.find({
            relations: ["empresa"],
        });
        
    }

    async actualizarInventario(id: number, inventarioData: Partial<Inventario>): Promise<Inventario> {
        await this.inventarioRepository.update(id, inventarioData);
        return this.obtenerInventario(id);
    }

    async eliminarInventario(id: number): Promise<void> {
        const inventario = await this.obtenerInventario(id);
        await this.inventarioRepository.remove(inventario);
    }
}
