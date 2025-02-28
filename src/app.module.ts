import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

// Importación de módulos de todas las entidades
import { EmpresaModule } from './empresa/empresa.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ProductoModule } from './producto/producto.module';
import { InventarioModule } from './inventario/inventario.module';
import { MovimientoInventarioModule } from './movimiento-inventario/movimiento-inventario.module';
import { AlertaStockModule } from './alerta-stock/alerta-stock.module';
import { PedidoModule } from './pedido/pedido.module';
import { DetallePedidoModule } from './detalle-pedido/detalle-pedido.module';
import { ReporteModule } from './reporte/reporte.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'control-inventario',
      //entities: [Rol],
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    EmpresaModule,
    UsuarioModule,
    RolModule,
    ProveedorModule,
    CategoriaModule,
    ProductoModule,
    InventarioModule,
    MovimientoInventarioModule,
    AlertaStockModule,
    PedidoModule,
    DetallePedidoModule,
    ReporteModule,
  ]
})
export class AppModule { }

