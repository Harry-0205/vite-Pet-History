const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const obtenerMascotas = async () => {
    try {
        const response = await fetch(`${BASE_URL}/Mascota`);
        if (!response.ok) throw new Error("Error al obtener mascotas");
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const obtenerMascotaPorId = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/Mascota/${id}`);
        if (!response.ok) throw new Error("Error al obtener mascota por ID");
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const crearMascota = async (mascota) => {
    try {
        const response = await fetch(`${BASE_URL}/Mascota/crear`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mascota),
        });
        if (!response.ok) throw new Error("Error al crear mascota");
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const obtenerRazas = async () => {
    try {
        const response = await fetch(`${BASE_URL}/raza`);
        if (!response.ok) throw new Error("Error al obtener razas");
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const obtenerEspecies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/especie`);
        if (!response.ok) throw new Error("Error al obtener especies");
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const obtenerColores = async () => {
    try {
        const response = await fetch(`${BASE_URL}/color`);
        if (!response.ok) throw new Error("Error al obtener colores");
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

