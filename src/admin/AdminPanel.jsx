import { useMemo, useState } from 'react';
import VeterinariaCard from './VeterinariaCard';
import HaderBando from './HaderBando';
import FooterMi from '../home/Componentes-Miguel/FooterMi/FooterMi';
import '../home/Estilos-Miguel/MiguelEs.css';
import './admin.css';


const initialVets = [
  {
    id: 'vet-1',
    nombre: 'Veterinaria Central',
    direccion: 'Av. Principal 123',
    nit: '123456789-0',
    correo: 'central@vet.com',
    veterinarios: [
      { id: 'med-1', nombre: 'Dra. Ana Ruiz', cedula: '1234567890', correo: 'ana.ruiz@vet.com', telefono: '099888777' },
      { id: 'med-2', nombre: 'Dr. Luis Paredes', cedula: '0987654321', correo: 'luis.paredes@vet.com', telefono: '099777888' },
    ],
  },
  {
    id: 'vet-2',
    nombre: 'Clínica PetCare',
    direccion: 'Calle 10 y Av. 5',
    nit: '987654321-0',
    correo: 'petcare@vet.com',
    veterinarios: [
      { id: 'med-3', nombre: 'Dra. Carla M.', cedula: '1122334455', correo: 'carla.m@vet.com', telefono: '098555444' },
    ],
  },
];

function Modal({ open, title, onClose, children }) {
  if (!open) return null;
  return (
    <div className="modal admin-modal">
      <div className="modal-content admin-modal-content">
        <div className="modal-header admin-modal-header">
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
    return vets.filter(v => {
      const nombre = (v.nombre || '').toString().toLowerCase();
      const direccion = (v.direccion || '').toString().toLowerCase();
      const nit = (v.nit || '').toString().toLowerCase();
      const correo = (v.correo || '').toString().toLowerCase();
      const telefono = (v.telefono || '').toString().toLowerCase();

     
      const vetNames = (v.veterinarios || []).map(m => (m.nombre || '').toString().toLowerCase()).join(' ');

      return (
        nombre.includes(q) ||
        direccion.includes(q) ||
        nit.includes(q) ||
        correo.includes(q) ||
        telefono.includes(q) ||
        vetNames.includes(q)
      );
    });
  }, [filter, vets]);

  const openCreateVet = () => {
    setEditingVet({ id: null, nombre: '', direccion: '', nit: '', correo: '' });
    setOpenVetModal(true);
  };

  const openEditVet = (vet) => {
    setEditingVet({ ...vet });
    setOpenVetModal(true);
  };

  const saveVet = () => {
    if (!editingVet) return;
    const { id, nombre, direccion, nit, correo } = editingVet;
    if (!nombre || !direccion || !nit || !correo) return;

    if (id) {
      setVets(prev => prev.map(v => v.id === id ? { ...v, nombre, direccion, nit, correo } : v));
    } else {
      const newVet = { id: 'vet-' + Math.random().toString(36).slice(2, 8), nombre, direccion, nit, correo, veterinarios: [] };
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
  setEditingMed({ id: null, nombre: '', cedula: '', correo: '', telefono: '' });
    setOpenMedModal(true);
  };

  const openEditMed = (vetId, med) => {
    setCurrentVetId(vetId);
    setEditingMed({ ...med });
    setOpenMedModal(true);
  };

  const saveMed = () => {
    if (!currentVetId || !editingMed) return;
  const { id, nombre, cedula, correo, telefono } = editingMed;
  if (!nombre || !cedula || !correo || !telefono) return;

    setVets(prev => prev.map(v => {
      if (v.id !== currentVetId) return v;
      if (id) {
        return {
          ...v,
          veterinarios: v.veterinarios.map(m => m.id === id ? { ...m, nombre, cedula, correo, telefono } : m)
        };
      }
      const newMed = { id: 'med-' + Math.random().toString(36).slice(2, 8), nombre, cedula, correo, telefono };
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
  <HaderBando />

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
          {filtered.length === 0 ? (
            <div className="admin-card-container">
              <div className="admin-card admin-card-empty">
                <div className="admin-card-header">
                  <h2>Sin veterinarias registradas</h2>
                </div>
                <div className="admin-card-body">
                  <p>Agrega una nueva veterinaria para comenzar.</p>
                </div>
              </div>
            </div>
          ) : (
            filtered.map(v => (
              <VeterinariaCard
                key={v.id}
                nombre={v.nombre}
                direccion={v.direccion}
                nit={v.nit}
                correo={v.correo}
                veterinarios={v.veterinarios}
                onEdit={() => openEditVet(v)}
                onDelete={() => deleteVet(v.id)}
                onAddVet={() => openCreateMed(v.id)}
                onEditVet={idx => openEditMed(v.id, v.veterinarios[idx])}
                onDeleteVet={idx => deleteMed(v.id, v.veterinarios[idx].id)}
              />
            ))
          )}
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
          <label>NIT
            <input
              type="text"
              value={editingVet?.nit || ''}
              onChange={(e) => setEditingVet(v => ({ ...v, nit: e.target.value }))}
              placeholder="NIT de la veterinaria"
            />
          </label>
          <label>Correo
            <input
              type="email"
              value={editingVet?.correo || ''}
              onChange={(e) => setEditingVet(v => ({ ...v, correo: e.target.value }))}
              placeholder="Correo de la veterinaria"
            />
          </label>
        </div>
        <div className="modal-actions" style={{ gap: '24px' }}>
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
          <label>Cédula
            <input
              type="text"
              value={editingMed?.cedula || ''}
              onChange={(e) => setEditingMed(m => ({ ...m, cedula: e.target.value }))}
              placeholder="Cédula del veterinario"
            />
          </label>
          <label>Correo
            <input
              type="email"
              value={editingMed?.correo || ''}
              onChange={(e) => setEditingMed(m => ({ ...m, correo: e.target.value }))}
              placeholder="Correo del veterinario"
            />
          </label>
          <label>Teléfono
            <input
              type="text"
              value={editingMed?.telefono || ''}
              onChange={(e) => setEditingMed(m => ({ ...m, telefono: e.target.value }))}
              placeholder="Teléfono del veterinario"
            />
          </label>
        </div>
        <div className="modal-actions" style={{ gap: '24px' }}>
          <button className="btn-secondary" onClick={() => { setOpenMedModal(false); setEditingMed(null); setCurrentVetId(null); }}>Cancelar</button>
          <button className="btn-primary" onClick={saveMed}>Guardar</button>
        </div>
      </Modal>
  <FooterMi />
    </>
  );
}
export default AdminPanel;
