import { Producto } from "src/producto/producto.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'alerta_stock' })
export class AlertaStock {

    @PrimaryGeneratedColumn({ name: 'id_alerta' })
    id: number;

    @ManyToOne(() => Producto, { nullable: false, onDelete: "CASCADE" })
    producto: Producto;

    @Column({ type: "int" })
    nivelMinimo: number;

    @Column({ length: 10, default: "Activo" })
    estado: string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
}
