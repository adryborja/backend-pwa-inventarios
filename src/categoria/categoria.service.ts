import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Categoria } from "./categoria.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private readonly categoriaRepository: Repository<Categoria>,
    ) {}

    async crearCategoria(categoriaData: Partial<Categoria>): Promise<Categoria> {
        const nuevaCategoria = this.categoriaRepository.create(categoriaData);
        return await this.categoriaRepository.save(nuevaCategoria);
    }

    async obtenerCategoria(id: number): Promise<Categoria> {
        const categoria = await this.categoriaRepository.findOne({ where: { id } });
        if (!categoria) {
            throw new NotFoundException(`Categoría con ID ${id} no encontrada`);
        }
        return categoria;
    }

    async obtenerTodasCategorias(): Promise<Categoria[]> {
        return await this.categoriaRepository.find();
    }

    async actualizarCategoria(id: number, categoriaData: Partial<Categoria>): Promise<Categoria> {
        await this.categoriaRepository.update(id, categoriaData);
        return this.obtenerCategoria(id);
    }

    async eliminarCategoria(id: number): Promise<void> {
        const categoria = await this.obtenerCategoria(id);
        await this.categoriaRepository.remove(categoria);
    }
}
