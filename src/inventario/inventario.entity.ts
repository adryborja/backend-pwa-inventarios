import { Empresa } from "src/empresa/empresa.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'inventario' })
export class Inventario {

    @PrimaryGeneratedColumn({ name: 'id_inventario' })
    id: number;

    @ManyToOne(() => Empresa, { nullable: false, onDelete: "CASCADE" })
    empresa: Empresa;

    @CreateDateColumn({ name: 'fecha_actualizacion' })
    fechaActualizacion: Date;
}
