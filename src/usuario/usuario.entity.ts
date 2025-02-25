import { Rol } from "src/rol/rol.entity";
import { Empresa } from "src/empresa/empresa.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, JoinTable } from "typeorm";

@Entity({ name: 'usuario' })
export class Usuario {

    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    id: number;

    @Column({ name: 'nombre_completo', length: 100 })
    nombreCompleto: string;

    @Column({ unique: true })
    email: string;

    @Column({ length: 20, nullable: true })
    telefono: string;

    @Column({ length: 10, default: 'Activo' })
    estado: string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'ultima_conexion', nullable: true })
    ultimaConexion: Date;

    @Column({ name: 'password_hash' })
    passwordHash: string;

    @ManyToOne(() => Empresa, (empresa) => empresa.usuarios, { nullable: false, onDelete: "CASCADE" })
    empresa: Empresa;

    @ManyToMany(() => Rol, (rol) => rol.usuarios)
    @JoinTable({
        name: 'usuario_rol',
        joinColumn: { name: 'id_usuario' },
        inverseJoinColumn: { name: 'id_rol' }
    })
    roles: Rol[];
}
