import { Pedido } from "src/pedido/pedido.entity";
import { Producto } from "src/producto/producto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'detalle_pedido' })
export class DetallePedido {

    @PrimaryGeneratedColumn({ name: 'id_detalle_pedido' })
    id: number;

    @ManyToOne(() => Pedido, { nullable: false, onDelete: "CASCADE" })
    pedido: Pedido;

    @ManyToOne(() => Producto, { nullable: false, onDelete: "CASCADE" })
    producto: Producto;

    @Column({ type: "int" })
    cantidad: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    precio_unitario: number;
}
