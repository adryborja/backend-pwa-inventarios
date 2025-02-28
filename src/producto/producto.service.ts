import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Producto } from "./producto.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
    ) {}

    async crearProducto(productoData: Partial<Producto>): Promise<Producto> {
        const nuevoProducto = this.productoRepository.create(productoData);
        return await this.productoRepository.save(nuevoProducto);
    }

    async obtenerProducto(id: number): Promise<Producto> {
        const producto = await this.productoRepository.findOne({
            where: { id },
            relations: ["categoria", "empresa", "proveedor"], // ✅ Incluir relaciones
        });
    
        if (!producto) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }
    
        return producto;
    }
    
    async obtenerTodosProductos(): Promise<Producto[]> {
        return await this.productoRepository.find({
            relations: ["categoria", "empresa", "proveedor"], // ✅ Incluir relaciones
        });
    }

    async actualizarProducto(id: number, productoData: Partial<Producto>): Promise<Producto> {
        await this.productoRepository.update(id, productoData);
        return this.obtenerProducto(id);
    }

    async eliminarProducto(id: number): Promise<void> {
        const producto = await this.obtenerProducto(id);
        await this.productoRepository.remove(producto);
    }
}
