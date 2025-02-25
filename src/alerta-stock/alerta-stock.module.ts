import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AlertaStock } from "./alerta-stock.entity";
import { AlertaStockController } from "./alerta-stock.controller";
import { AlertaStockService } from "./alerta-stock.service";

@Module({
    imports: [TypeOrmModule.forFeature([AlertaStock])],
    controllers: [AlertaStockController],
    providers: [AlertaStockService]
})
export class AlertaStockModule { }
