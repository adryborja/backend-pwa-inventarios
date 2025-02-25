import { Categoria } from "src/categoria/categoria.entity";
import { Proveedor } from "src/proveedor/proveedor.entity";
import { Empresa } from "src/empresa/empresa.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'producto' })
export class Producto {

    @PrimaryGeneratedColumn({ name: 'id_producto' })
    id: number;

    @Column({ unique: true, length: 50 })
    codigoBarras: string;

    @Column({ length: 100 })
    nombre: string;

    @Column({ length: 255, nullable: true })
    descripcion: string;

    @ManyToOne(() => Categoria, { nullable: false })
    categoria: Categoria;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    precioCompra: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    precioVenta: number;

    @Column({ type: "int" })
    stockMinimo: number;

    @Column({ type: "int" })
    stockMaximo: number;

    @ManyToOne(() => Empresa, { nullable: false, onDelete: "CASCADE" })
    empresa: Empresa;

    @ManyToOne(() => Proveedor, { nullable: false, onDelete: "CASCADE" })
    proveedor: Proveedor;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'ultima_actualizacion' })
    ultimaActualizacion: Date;
}
