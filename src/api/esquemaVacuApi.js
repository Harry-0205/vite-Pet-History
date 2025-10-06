const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const Obteneresquemavacu = async (data) => {
    try{
        const response = await fetch (`${BASE_URL}/EsquemaVacunas/${id}`);
        if (!response.ok) throw new Error("Error al obtener vacunas")
            return await response.json();
    }catch(error){
        console.error(error);
        throw error;
    }
};

export const obtenervacunas = async () => {
    try {
        const response = await fetch(`${BASE_URL}/vacunas`);
        if (!response.ok) throw new Error("Error al obtener vacunas");
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export const crearEsquemaVacu = async (data) => {
    const resp = await fetch(`${BASE_URL}/EsquemaVacunas/crear`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!resp.ok) throw new Error('Error al crear esquema de vacunas');
    return resp.json();
}