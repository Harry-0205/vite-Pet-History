const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const obtenerTiposDoc = async () => {
    const resp = await fetch(`${BASE_URL}/tipodoc`);
        if (!resp.ok) throw new Error('Error al obtener tipos de documento');
        return resp.json();
}