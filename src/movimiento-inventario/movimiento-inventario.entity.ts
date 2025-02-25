import { Usuario } from "src/usuario/usuario.entity";
import { Producto } from "src/producto/producto.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'movimiento_inventario' })
export class MovimientoInventario {

    @PrimaryGeneratedColumn({ name: 'id_movimiento' })
    id: number;

    @ManyToOne(() => Producto, { nullable: false, onDelete: "CASCADE" })
    producto: Producto;

    @Column({ length: 20 })
    tipo_movimiento: string; // Entrada, Salida, Ajuste

    @Column({ type: "int" })
    cantidad: number;

    @CreateDateColumn({ name: 'fecha_movimiento' })
    fecha_movimiento: Date;

    @Column({ length: 255 })
    motivo: string;

    @ManyToOne(() => Usuario, { nullable: false, onDelete: "CASCADE" })
    usuario: Usuario;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    costo_unitario: number;

    @Column({ length: 100, nullable: true })
    ubicacion: string;
}
