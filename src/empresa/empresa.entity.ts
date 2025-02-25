import { Usuario } from "src/usuario/usuario.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    emailContacto: string;

    @Column({ length: 50 })
    sector: string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @Column({ length: 10, default: "Activo" })
    estado: string;

    @OneToMany(() => Usuario, (usuario) => usuario.empresa)
    usuarios:Usuario[];

}
