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