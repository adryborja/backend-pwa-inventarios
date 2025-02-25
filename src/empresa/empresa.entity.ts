import { Usuario } from "src/usuario/usuario.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum EstadoEmpresa {
    ACTIVO = "Activo",
    INACTIVO = "Inactivo"
}
@Entity({ name: 'empresa'})
export class Empresa {

    @PrimaryGeneratedColumn({ name: 'id_empresa'})
    id: number;

    @Column({ length: 100})
    nombre: string;

    @Column({ unique: true, length: 20})
    ruc: string;

    @Column({ length: 255})
    direccion: string;

    @Column({ length: 20 })
    telefono: string;

    @Column({ unique: true })
    email_contacto: string;

    @Column({ length: 50 })
    sector: string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @Column({
        type: "enum",
        enum: EstadoEmpresa,  
        default: EstadoEmpresa.ACTIVO
    })
    estado: EstadoEmpresa;

    @OneToMany(() => Usuario, (usuario) => usuario.empresa)
    usuarios:Usuario[];

}
