import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamplesModule } from './examples/examples.module';
import { Example } from './examples/entities/example.entity';
import { EmpleadoModule } from './empleado/empleado.module';
import { Empleado } from './empleado/entities/empleado.entity';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: '',
//       database: 'api_dsm44',
//       entities: [Usuario],
//       synchronize: true,
//       autoLoadEntities: true
//     }),
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: '1234',
//       database: 'api_dsm44',
//       entities: [Tarea],
//       synchronize: true,
//       autoLoadEntities: true
//     }),
//     UsuariosModule,
//     TareaModule

//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule { }

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "1234",
      database: "pollosanjuan",
      entities: [Example],
      synchronize: true,
      autoLoadEntities: true,

    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "1234",
      database: "empleadosdb",
      entities: [Empleado],
      synchronize: true,
      autoLoadEntities: true,

    }),
    ExamplesModule,
    EmpleadoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }