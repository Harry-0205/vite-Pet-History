const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const ObtenerHistoriaClinica = async (data) => {
try{
        const response = await fetch (`${BASE_URL}/historiaClinica/${id}`);
        if (!response.ok) throw new Error("Error al obtener Hostoria Clinica")
            return await response.json();
    }catch(error){
        console.error(error);
        throw error;
    }
};
export const crearHistoriaClinica = async (data) => {
    const resp = await fetch(`${BASE_URL}/historiaClinica/crear`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!resp.ok) throw new Error('Error al crear Historia Clinica');
    return resp.json();
};