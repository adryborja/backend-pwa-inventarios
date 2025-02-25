import { Usuario } from "src/usuario/usuario.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'rol' })
export class Rol {

    @PrimaryGeneratedColumn({ name: 'id_rol' })
    id: number;

    @Column({ length: 50 })
    nombre: string;

    @Column({ length: 255, nullable: true })
    descripcion: string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @ManyToMany(() => Usuario, (usuario) => usuario.roles)
    usuarios: Usuario[];
}
