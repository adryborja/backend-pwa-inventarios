import { Empresa } from "src/empresa/empresa.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'pedido' })
export class Pedido {

    @PrimaryGeneratedColumn({ name: 'id_pedido' })
    id: number;

    @ManyToOne(() => Empresa, { nullable: false, onDelete: "CASCADE" })
    empresa: Empresa;

    @CreateDateColumn({ name: 'fecha_solicitud' })
    fechaSolicitud: Date;

    @Column({ type: 'date', nullable: true })
    fechaEntrega: Date;

    @Column({ length: 20, default: "Pendiente" })
    estado: string;
}
