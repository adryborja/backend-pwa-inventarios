import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Usuario } from "./usuario.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Rol } from "src/rol/rol.entity";

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(Usuario)
        private readonly repositorioUsuario: Repository<Usuario>,

        @InjectRepository(Rol)
        private readonly repositorioRol: Repository<Rol>,
    ) { }

    async crearUsuario(usuarioData: Partial<Usuario>): Promise<Usuario> {
        const nuevoUsuario = this.repositorioUsuario.create(usuarioData);
        return await this.repositorioUsuario.save(nuevoUsuario);
    }

    async obtenerUsuario(id: number): Promise<Usuario> {
        const usuario = await this.repositorioUsuario.findOne({
            where: { id },
            relations: ['roles','empresa']
        });
        if (!usuario) {
            throw new NotFoundException(`No existe el usuario con id: ${id}`);
        }
        return usuario;
    }

    async obtenerTodosUsuarios(): Promise<Usuario[]> {
        return await this.repositorioUsuario.find({ relations: ['roles', 'empresa'] });
    }

    async actualizarUsuario(id: number, usuarioData: Partial<Usuario>): Promise<Usuario> {
        const usuario = await this.repositorioUsuario.findOne({
            where: { id },
            relations: ['roles'], 
        });
    
        if (!usuario) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
    
        if (usuarioData.roles) {
            const rolesIds = usuarioData.roles.map((rol) => rol.id); 
            const roles = await this.repositorioRol.findByIds(rolesIds);
            usuario.roles = roles; 
        }
    
        
        delete usuarioData.roles;
        Object.assign(usuario, usuarioData);
    
        return this.repositorioUsuario.save(usuario);
    }

    async eliminarUsuario(id: number): Promise<void> {
        const usuario = await this.obtenerUsuario(id);
        await this.repositorioUsuario.remove(usuario);
    }

    async asignarRol(idUsuario: number, idRol: number): Promise<Usuario> {
        const usuario = await this.repositorioUsuario.findOne({
            where: { id: idUsuario },
            relations: ['roles']
        });

        if (!usuario) {
            throw new NotFoundException(`Usuario con ID ${idUsuario} no encontrado`);
        }

        const rol = await this.repositorioRol.findOne({
            where: { id: idRol }
        });

        if (!rol) {
            throw new NotFoundException(`Rol con ID ${idRol} no encontrado`);
        }

        
        if (usuario.roles.some(r => r.id === idRol)) {
            throw new NotFoundException(`El usuario ya tiene asignado el rol con ID ${idRol}`);
        }

        usuario.roles.push(rol);
        return await this.repositorioUsuario.save(usuario);
    }
}