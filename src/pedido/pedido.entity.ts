import { Empresa } from "src/empresa/empresa.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum EstadoPedido {
    PENDIENTE = "Pendiente",
    ENTREGADO = "Entregado",
    CANCELADO = "Cancelado"
} 
@Entity({ name: 'pedido' })
export class Pedido {

    @PrimaryGeneratedColumn({ name: 'id_pedido' })
    id: number;

    @ManyToOne(() => Empresa, { nullable: false, onDelete: "CASCADE" })
    empresa: Empresa;

    @CreateDateColumn({ name: 'fecha_solicitud' })
    fecha_solicitud: Date;

    @Column({ type: 'date', nullable: true })
    fecha_entrega: Date;

    @Column({
        type: "enum", 
        enum: EstadoPedido, 
        default: EstadoPedido.PENDIENTE 
    })
    estado: EstadoPedido;
}
