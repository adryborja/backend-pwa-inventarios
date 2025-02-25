import { Producto } from "src/producto/producto.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum EstadoAlerta {
    ACTIVO = "Activo",
    INACTIVO = "Inactivo"
}
@Entity({ name: 'alerta_stock' })
export class AlertaStock {

    @PrimaryGeneratedColumn({ name: 'id_alerta' })
    id: number;

    @ManyToOne(() => Producto, { nullable: false, onDelete: "CASCADE" })
    producto: Producto;

    @Column({ type: "int" })
    nivel_minimo: number;

    @Column({
        type: "enum",
        enum: EstadoAlerta,  // ✅ Solo permite "Activo" o "Inactivo"
        default: EstadoAlerta.ACTIVO
    })
    estado: EstadoAlerta;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
}
