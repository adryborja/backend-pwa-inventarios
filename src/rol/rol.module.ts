import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Rol } from "./rol.entity";
import { RolController } from "./rol.controller";
import { RolService } from "./rol.service";
import { Usuario } from "src/usuario/usuario.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Rol, Usuario])],
    controllers: [RolController],
    providers: [RolService],
    exports: [RolService]  // Exportar el servicio si es necesario en otros módulos
})
export class RolModule { }