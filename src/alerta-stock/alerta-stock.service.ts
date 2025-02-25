import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { AlertaStock } from "./alerta-stock.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AlertaStockService {
    constructor(
        @InjectRepository(AlertaStock)
        private readonly alertaRepository: Repository<AlertaStock>,
    ) {}

    async crearAlerta(alertaData: Partial<AlertaStock>): Promise<AlertaStock> {
        const nuevaAlerta = this.alertaRepository.create(alertaData);
        return await this.alertaRepository.save(nuevaAlerta);
    }

    async obtenerAlerta(id: number): Promise<AlertaStock> {
        const alerta = await this.alertaRepository.findOne({ where: { id } });
        if (!alerta) {
            throw new NotFoundException(`Alerta con ID ${id} no encontrada`);
        }
        return alerta;
    }

    async obtenerTodasAlertas(): Promise<AlertaStock[]> {
        return await this.alertaRepository.find();
    }

    async actualizarAlerta(id: number, alertaData: Partial<AlertaStock>): Promise<AlertaStock> {
        await this.alertaRepository.update(id, alertaData);
        return this.obtenerAlerta(id);
    }

    async eliminarAlerta(id: number): Promise<void> {
        const alerta = await this.obtenerAlerta(id);
        await this.alertaRepository.remove(alerta);
    }
}
