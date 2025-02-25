import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Reporte } from "./reporte.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ReporteService {
    constructor(
        @InjectRepository(Reporte)
        private readonly reporteRepository: Repository<Reporte>,
    ) {}

    async crearReporte(reporteData: Partial<Reporte>): Promise<Reporte> {
        const nuevoReporte = this.reporteRepository.create(reporteData);
        return await this.reporteRepository.save(nuevoReporte);
    }

    async obtenerReporte(id: number): Promise<Reporte> {
        const reporte = await this.reporteRepository.findOne({ where: { id } });
        if (!reporte) {
            throw new NotFoundException(`Reporte con ID ${id} no encontrado`);
        }
        return reporte;
    }

    async obtenerTodosReportes(): Promise<Reporte[]> {
        return await this.reporteRepository.find();
    }

    async actualizarReporte(id: number, reporteData: Partial<Reporte>): Promise<Reporte> {
        await this.reporteRepository.update(id, reporteData);
        return this.obtenerReporte(id);
    }

    async eliminarReporte(id: number): Promise<void> {
        const reporte = await this.obtenerReporte(id);
        await this.reporteRepository.remove(reporte);
    }
}
