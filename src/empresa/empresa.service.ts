import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Empresa } from "./empresa.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class EmpresaService {
    constructor(
        @InjectRepository(Empresa)
        private readonly empresaRepository: Repository<Empresa>,
    ) {}

    async crearEmpresa(empresaData: Partial<Empresa>): Promise<Empresa> {
        const nuevaEmpresa = this.empresaRepository.create(empresaData);
        return await this.empresaRepository.save(nuevaEmpresa);
    }

    async obtenerEmpresa(id: number): Promise<Empresa> {
        const empresa = await this.empresaRepository.findOne({ where: { id } });
        if (!empresa) {
            throw new NotFoundException(`Empresa con ID ${id} no encontrada`);
        }
        return empresa;
    }

    async obtenerTodasEmpresas(): Promise<Empresa[]> {
        return await this.empresaRepository.find();
    }

    async actualizarEmpresa(id: number, empresaData: Partial<Empresa>): Promise<Empresa> {
        await this.empresaRepository.update(id, empresaData);
        return this.obtenerEmpresa(id);
    }

    async eliminarEmpresa(id: number): Promise<void> {
        const empresa = await this.obtenerEmpresa(id);
        await this.empresaRepository.remove(empresa);
    }
}