import { useEffect, useState } from 'react';
import {
    getEmpleados,
    getEmpleado,
    createEmpleado as apiCreateEmpleado,
    updateEmpleado as apiUpdateEmpleado,
    deleteEmpleado as apiDeleteEmpleado,
} from '../api/empleadosApi';

export const useEmpleadosApi = () => {
    const [empleados, setEmpleados] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchAll = async () => {
        setLoading(true);
        try {
            const data = await getEmpleados();
            setEmpleados(data || []);
            setError(null);
        } catch (err: any) {
            console.error('fetchAll empleados error', err?.response?.data || err.message || err);
            setError(err?.message || 'Error fetching empleados');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAll();
    }, []);

    const create = async (payload: any) => {
        setLoading(true);
        try {
            const res = await apiCreateEmpleado(payload);
            await fetchAll();
            return res;
        } catch (err: any) {
            console.error('create empleado error', err?.response?.data || err.message || err);
            setError(err?.message || 'Error creating empleado');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const update = async (id: number, payload: any) => {
        setLoading(true);
        try {
            const res = await apiUpdateEmpleado(id, payload);
            await fetchAll();
            return res;
        } catch (err: any) {
            console.error('update empleado error', err?.response?.data || err.message || err);
            setError(err?.message || 'Error updating empleado');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const find = async (id: number) => {
        setLoading(true);
        try {
            const res = await getEmpleado(id);
            setError(null);
            return res;
        } catch (err: any) {
            console.error('find empleado error', err?.response?.data || err.message || err);
            setError(err?.message || 'Error fetching empleado');
            return null;
        } finally {
            setLoading(false);
        }
    };

    const remove = async (id: number) => {
        setLoading(true);
        try {
            const res = await apiDeleteEmpleado(id);
            await fetchAll();
            return res;
        } catch (err: any) {
            console.error('delete empleado error', err?.response?.data || err.message || err);
            setError(err?.message || 'Error deleting empleado');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { empleados, loading, error, fetchAll, create, update, find, remove };
};

export default useEmpleadosApi;
