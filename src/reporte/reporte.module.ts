import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Reporte } from "./reporte.entity";
import { ReporteController } from "./reporte.controller";
import { ReporteService } from "./reporte.service";

@Module({
    imports: [TypeOrmModule.forFeature([Reporte])],
    controllers: [ReporteController],
    providers: [ReporteService]
})
export class ReporteModule { }
