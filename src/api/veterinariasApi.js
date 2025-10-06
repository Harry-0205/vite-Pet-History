const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const obtenerVeterinariaId = async (id) => {
    try{
        const response = await fetch (`${BASE_URL}/veterinarias/${id}`);
        if (!response.ok) throw new Error("Error al obtener veterinaria")
            return await response.json();
    }catch(error){
        console.error(error);
        throw error;
    }
};

export const crearVeterinaria = async (data) => {
    const resp = await fetch(`${BASE_URL}/veterinarias/crearVet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!resp.ok) throw new Error('Error al crear veterinaria');
    return resp.json();
}

export const obtenerVeterinarias = async () => {
    try {
        const response = await fetch(`${BASE_URL}/veterinarias`,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) throw new Error("Error al obtener veterinarias");
        return await response.json();
    } catch (error) {
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
            throw new Error("No se pudo conectar al servidor.");
        }
    }
};