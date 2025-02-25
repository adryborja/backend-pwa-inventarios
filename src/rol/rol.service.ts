import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Rol } from "./rol.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class RolService {
    constructor(
        @InjectRepository(Rol)
        private readonly rolRepository: Repository<Rol>
    ) { }

    async obtenerRoles(): Promise<Rol[]> {
        return await this.rolRepository.find();
    }

    async crearRol(rolData: Partial<Rol>): Promise<Rol> {
        const nuevoRol = this.rolRepository.create(rolData);
        return await this.rolRepository.save(nuevoRol);
    }

    async actualizarRol(id: number, rolData: Partial<Rol>): Promise<Rol> {
        await this.rolRepository.update(id, rolData);
        return this.obtenerRol(id);
    }

    async obtenerRol(id: number): Promise<Rol> {
        const rol = await this.rolRepository.findOne({ where: { id } });
        if (!rol) {
            throw new NotFoundException(`Rol con ID ${id} no encontrado`);
        }
        return rol;
    }

    async eliminarRol(id: number): Promise<void> {
        const rol = await this.obtenerRol(id);
        await this.rolRepository.remove(rol);
    }
}
