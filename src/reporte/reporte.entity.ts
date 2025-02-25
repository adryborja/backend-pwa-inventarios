import { Usuario } from "src/usuario/usuario.entity";
import { Empresa } from "src/empresa/empresa.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum TipoReporte {
    INVENTARIO = "Inventario",
    VENTAS = "Ventas",
    PERDIDAS = "Perdidas"
}
@Entity({ name: 'reporte' })
export class Reporte {

    @PrimaryGeneratedColumn({ name: 'id_reporte' })
    id: number;

    @ManyToOne(() => Empresa, { nullable: false, onDelete: "CASCADE" })
    empresa: Empresa;

    @Column({
        type: "enum",
        enum: TipoReporte,  
        default: TipoReporte.INVENTARIO
    })
    tipo: TipoReporte;

    @CreateDateColumn({ name: 'fecha_generacion' })
    fecha_generacion: Date;

    @Column({ name: 'archivo_pdf', nullable: false }) 
    archivo_pdf: string;

    @ManyToOne(() => Usuario, { nullable: false, onDelete: "CASCADE" })
    usuario: Usuario;
}
