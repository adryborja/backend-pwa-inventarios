import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'categoria' })
export class Categoria {

    @PrimaryGeneratedColumn({ name: 'id_categoria' })
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @Column({ length: 255, nullable: true })
    descripcion: string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
}
