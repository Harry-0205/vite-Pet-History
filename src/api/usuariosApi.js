const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/";

export const crearUsuario = async (data) => {
    const resp = await fetch(`${BASE_URL}api/Usuario/crear`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!resp.ok) throw new Error('Error al crear usuario');
    return resp.json();
};

export const obtenerUsuarios = async () => {
    try {
        const resp = await fetch(`${BASE_URL}api/Usuario`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!resp.ok) throw new Error('Error al obtener usuarios');
        return await resp.json();
    } catch (error) {
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
            throw new Error("No se pudo conectar al servidor.");
        }
    }
};

export const obtenerUsuarioPorId = async (id) => {
    const resp = await fetch(`${BASE_URL}api/Usuario/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!resp.ok) throw new Error('Error al obtener usuario');
    return resp.json();
};

export const actualizarUsuario = async (data) => {
    const resp = await fetch(`${BASE_URL}api/Usuario/update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!resp.ok) throw new Error('Error al actualizar usuario');
    return resp.json();
};