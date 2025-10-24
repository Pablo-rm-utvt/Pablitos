// Tipos base para la entidad Example/UseExample en la app

export interface UseExample {
    id_example: number;
    correo_example: string;
    nota_example: string;
    ciudad_example: string;
    proveedor_example: string;
    image1_example: string;
    image2_example: string;
    image3_example: string;
    prioridad_example: number;
    updaate: string;
}

// Puedes extender o ajustar según tus necesidades
export type FormDataExample = UseExample;
