import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DetallePedido } from "./detalle-pedido.entity";
import { DetallePedidoController } from "./detalle-pedido.controller";
import { DetallePedidoService } from "./detalle-pedido.service";

@Module({
    imports: [TypeOrmModule.forFeature([DetallePedido])],
    controllers: [DetallePedidoController],
    providers: [DetallePedidoService]
})
export class DetallePedidoModule { }
