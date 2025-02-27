import { Rol } from "src/rol/rol.entity";
import { Empresa } from "src/empresa/empresa.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, JoinTable } from "typeorm";

export enum EstadoUsuario {
    ACTIVO = "Activo",
    INACTIVO = "Inactivo"
}
@Entity({ name: 'usuario' })
export class Usuario {

    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    id: number;

    @Column({ name: 'nombre_completo', length: 100 })
    nombre_completo: string;

    @Column({ unique: true })
    email: string;

    @Column({ length: 20, nullable: true })
    telefono: string;

    @Column({
        type: "enum",
        enum: EstadoUsuario,  
        default: EstadoUsuario.ACTIVO
    })
    estado: EstadoUsuario;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'ultima_conexion', nullable: true })
    ultimaConexion: Date;

    @Column({ name: 'password_hash' })
    passwordHash: string;

    @ManyToOne(() => Empresa, (empresa) => empresa.usuarios, {eager: true, nullable: false, onDelete: "CASCADE" })
    empresa: Empresa;


    @ManyToMany(() => Rol, (rol) => rol.usuarios)
    @JoinTable({
        name: 'usuario_rol',
        joinColumn: { name: 'id_usuario' },
        inverseJoinColumn: { name: 'id_rol' }
    })
    roles: Rol[];
}
