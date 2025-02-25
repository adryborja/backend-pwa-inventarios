import { Usuario } from "src/usuario/usuario.entity";
import { Empresa } from "src/empresa/empresa.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'reporte' })
export class Reporte {

    @PrimaryGeneratedColumn({ name: 'id_reporte' })
    id: number;

    @ManyToOne(() => Empresa, { nullable: false, onDelete: "CASCADE" })
    empresa: Empresa;

    @Column({ length: 50 })
    tipo: string; // Inventario, Ventas, Pérdidas

    @CreateDateColumn({ name: 'fecha_generacion' })
    fechaGeneracion: Date;

    @Column({ length: 255 })
    archivoPdf: string;

    @ManyToOne(() => Usuario, { nullable: false, onDelete: "CASCADE" })
    usuario: Usuario;
}
