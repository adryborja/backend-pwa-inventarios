import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Proveedor } from "./proveedor.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProveedorService {
    constructor(
        @InjectRepository(Proveedor)
        private readonly proveedorRepository: Repository<Proveedor>,
    ) {}

    async crearProveedor(proveedorData: Partial<Proveedor>): Promise<Proveedor> {
        const nuevoProveedor = this.proveedorRepository.create(proveedorData);
        return await this.proveedorRepository.save(nuevoProveedor);
    }

    async obtenerProveedor(id: number): Promise<Proveedor> {
        const proveedor = await this.proveedorRepository.findOne({ where: { id } });
        if (!proveedor) {
            throw new NotFoundException(`Proveedor con ID ${id} no encontrado`);
        }
        return proveedor;
    }

    async obtenerTodosProveedores(): Promise<Proveedor[]> {
        return await this.proveedorRepository.find();
    }

    async actualizarProveedor(id: number, proveedorData: Partial<Proveedor>): Promise<Proveedor> {
        await this.proveedorRepository.update(id, proveedorData);
        return this.obtenerProveedor(id);
    }

    async eliminarProveedor(id: number): Promise<void> {
        const proveedor = await this.obtenerProveedor(id);
        await this.proveedorRepository.remove(proveedor);
    }
}
