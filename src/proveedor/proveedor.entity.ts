import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'proveedor' })
export class Proveedor {

    @PrimaryGeneratedColumn({ name: 'id_proveedor' })
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @Column({ length: 100, nullable: true })
    contacto: string;

    @Column({ length: 20 })
    telefono: string;

    @Column({ unique: true })
    email: string;

    @Column({ length: 255, nullable: true })
    direccion: string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
}
