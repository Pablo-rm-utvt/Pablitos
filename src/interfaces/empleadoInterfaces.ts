export interface Empleado {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    puesto: string;
    departamento: string;
    correo: string;
    telefono: string;
    fecha_contratacion: Date;
    salario: number;
    activo: boolean;
}

export type EmpleadoCreate = Omit<Empleado, 'id'>;
export type EmpleadoUpdate = Partial<Empleado>;
export type EmpleadoResponse = Empleado;