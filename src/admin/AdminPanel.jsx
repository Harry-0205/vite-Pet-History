import { useMemo, useState } from 'react';
import HeaderMi from '../home/Componentes-Miguel/HeaderMi/HeaderMi';
import FooterMi from '../home/Componentes-Miguel/FooterMi/FooterMi';
import '../home/Estilos-Miguel/MiguelEs.css';
import './admin.css';


const initialVets = [
  {
    id: 'vet-1',
    nombre: 'Veterinaria Central',
    direccion: 'Av. Principal 123',
    telefono: '099111222',
    veterinarios: [
      { id: 'med-1', nombre: 'Dra. Ana Ruiz', especialidad: 'Felinos' },
      { id: 'med-2', nombre: 'Dr. Luis Paredes', especialidad: 'Caninos' },
    ],
  },
  {
    id: 'vet-2',
    nombre: 'Clínica PetCare',
    direccion: 'Calle 10 y Av. 5',
    telefono: '098333444',
    veterinarios: [
      { id: 'med-3', nombre: 'Dra. Carla M.', especialidad: 'Exóticos' },
    ],
  },
];

function Modal({ open, title, onClose, children }) {
  if (!open) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

function AdminPanel() {
  const [vets, setVets] = useState(initialVets);
  const [filter, setFilter] = useState('');

  
  const [openVetModal, setOpenVetModal] = useState(false);
  const [editingVet, setEditingVet] = useState(null); 

  const [openMedModal, setOpenMedModal] = useState(false);
  const [currentVetId, setCurrentVetId] = useState(null);
  const [editingMed, setEditingMed] = useState(null);

  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return vets;
    return vets.filter(v =>
      v.nombre.toLowerCase().includes(q) ||
      v.direccion.toLowerCase().includes(q) ||
      v.telefono.toLowerCase().includes(q)
    );
  }, [filter, vets]);

  const openCreateVet = () => {
    setEditingVet({ id: null, nombre: '', direccion: '', telefono: '' });
    setOpenVetModal(true);
  };

  const openEditVet = (vet) => {
    setEditingVet({ ...vet });
    setOpenVetModal(true);
  };

  const saveVet = () => {
    if (!editingVet) return;
    const { id, nombre, direccion, telefono } = editingVet;
    if (!nombre || !direccion || !telefono) return;

    if (id) {
      setVets(prev => prev.map(v => v.id === id ? { ...v, nombre, direccion, telefono } : v));
    } else {
      const newVet = { id: 'vet-' + Math.random().toString(36).slice(2, 8), nombre, direccion, telefono, veterinarios: [] };
      setVets(prev => [newVet, ...prev]);
    }
    setOpenVetModal(false);
    setEditingVet(null);
  };

  const deleteVet = (id) => {
    if (!confirm('¿Eliminar esta veterinaria y todos sus veterinarios?')) return;
    setVets(prev => prev.filter(v => v.id !== id));
  };

  
  const openCreateMed = (vetId) => {
    setCurrentVetId(vetId);
    setEditingMed({ id: null, nombre: '', especialidad: '' });
    setOpenMedModal(true);
  };

  const openEditMed = (vetId, med) => {
    setCurrentVetId(vetId);
    setEditingMed({ ...med });
    setOpenMedModal(true);
  };

  const saveMed = () => {
    if (!currentVetId || !editingMed) return;
    const { id, nombre, especialidad } = editingMed;
    if (!nombre || !especialidad) return;

    setVets(prev => prev.map(v => {
      if (v.id !== currentVetId) return v;
      if (id) {
        return {
          ...v,
          veterinarios: v.veterinarios.map(m => m.id === id ? { ...m, nombre, especialidad } : m)
        };
      }
      const newMed = { id: 'med-' + Math.random().toString(36).slice(2, 8), nombre, especialidad };
      return { ...v, veterinarios: [newMed, ...v.veterinarios] };
    }));

    setOpenMedModal(false);
    setEditingMed(null);
    setCurrentVetId(null);
  };

  const deleteMed = (vetId, medId) => {
    if (!confirm('¿Eliminar este veterinario?')) return;
    setVets(prev => prev.map(v => v.id === vetId ? { ...v, veterinarios: v.veterinarios.filter(m => m.id !== medId) } : v));
  };

  return (
    <>
      <HeaderMi />

      <div className="admin-page">
        <div className="admin-header">
          <h1>Panel de Administración</h1>
          <div className="actions">
            <input
              type="text"
              placeholder="Buscar por nombre, dirección o teléfono"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <button className="he-button-pos" onClick={openCreateVet}>Nueva Veterinaria</button>
          </div>
        </div>

        <div className="admin-grid">
          {filtered.map(v => (
            <div key={v.id} className="card">
              <div className="card-header">
                <h3>{v.nombre}</h3>
                <div className="card-actions">
                  <button className="icon-btn" title="Editar" onClick={() => openEditVet(v)}>✎</button>
                  <button className="icon-btn" title="Eliminar" onClick={() => deleteVet(v.id)}>X</button>
                </div>
              </div>
              <div className="card-body">
                <p><strong>Dirección:</strong> {v.direccion}</p>
                <p><strong>Teléfono:</strong> {v.telefono}</p>

                <div className="sub-header">
                  <h4>Veterinarios</h4>
                  <button className="btn-chip" onClick={() => openCreateMed(v.id)}>+ Agregar</button>
                </div>
                <ul className="list">
                  {v.veterinarios.map(m => (
                    <li key={m.id} className="list-item">
                      <div>
                        <div className="item-title">{m.nombre}</div>
                        <div className="item-sub">{m.especialidad}</div>
                      </div>
                      <div>
                        <button className="icon-btn" onClick={() => openEditMed(v.id, m)}>✎</button>
                        <button className="icon-btn" onClick={() => deleteMed(v.id, m.id)}>X</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={openVetModal}
        title={editingVet?.id ? 'Editar Veterinaria' : 'Nueva Veterinaria'}
        onClose={() => { setOpenVetModal(false); setEditingVet(null); }}
      >
        <div className="form-grid">
          <label>Nombre
            <input
              type="text"
              value={editingVet?.nombre || ''}
              onChange={(e) => setEditingVet(v => ({ ...v, nombre: e.target.value }))}
              placeholder="Nombre de la veterinaria"
            />
          </label>
          <label>Dirección
            <input
              type="text"
              value={editingVet?.direccion || ''}
              onChange={(e) => setEditingVet(v => ({ ...v, direccion: e.target.value }))}
              placeholder="Dirección"
            />
          </label>
          <label>Teléfono
            <input
              type="text"
              value={editingVet?.telefono || ''}
              onChange={(e) => setEditingVet(v => ({ ...v, telefono: e.target.value }))}
              placeholder="3009776778"
            />
          </label>
        </div>
        <div className="modal-actions">
          <button className="btn-secondary" onClick={() => { setOpenVetModal(false); setEditingVet(null); }}>Cancelar</button>
          <button className="btn-primary" onClick={saveVet}>Guardar</button>
        </div>
      </Modal>
      <Modal
        open={openMedModal}
        title={editingMed?.id ? 'Editar Veterinario' : 'Nuevo Veterinario'}
        onClose={() => { setOpenMedModal(false); setEditingMed(null); setCurrentVetId(null); }}
      >
        <div className="form-grid">
          <label>Nombre
            <input
              type="text"
              value={editingMed?.nombre || ''}
              onChange={(e) => setEditingMed(m => ({ ...m, nombre: e.target.value }))}
              placeholder="Nombre del médico"
            />
          </label>
          <label>Especialidad
            <input
              type="text"
              value={editingMed?.especialidad || ''}
              onChange={(e) => setEditingMed(m => ({ ...m, especialidad: e.target.value }))}
              placeholder="Ej: Caninos, Felinos, Exóticos"
            />
          </label>
        </div>
        <div className="modal-actions">
          <button className="btn-secondary" onClick={() => { setOpenMedModal(false); setEditingMed(null); setCurrentVetId(null); }}>Cancelar</button>
          <button className="btn-primary" onClick={saveMed}>Guardar</button>
        </div>
      </Modal>
      <FooterMi />
    </>
  );
}
export default AdminPanel;
