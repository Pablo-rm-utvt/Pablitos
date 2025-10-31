
export interface Clinica {
    id: number;
    nombre_paciente: string;
    edad: number;
    sexo: string;
    estado_civil: string;
    curp: string;
    domicilio: string;
    telefono: string;
    correo_electronico: string;
    fecha_ingreso: Date;
    diagnostico_inicial: string;
    enfermedades_previas: string;
    medicamentos_actuales: string;
    alergias: string;
    medico_asignado: string;
    area_internamiento: string;
    presion_arterial: string;
    frecuencia_cardiaca: number;
    temperatura_corporal: number;
    saturacion_oxigeno: number;
    notas_evolucion: string;
    firma_medico: string;
    fecha_alta: Date;
    grupo_sanguineo: string;

    //imagenes
    foto_paciente: string;
    radiografia_torax: string;
    electrocardiograma: string;
    analisis_sangre: string;
    resonancia_magnetica: string;
    tomografia: string;
    foto_herida: string;
}

export type ClinicaResponse = Clinica;