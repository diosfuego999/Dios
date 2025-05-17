import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ephubctfgnmemvuriqwb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwaHViY3RmZ25tZW12dXJpcXdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1MTQ1NjQsImV4cCI6MjA2MzA5MDU2NH0.87Vb-mF6ulBdpMnzHsxhoq1mo2Ec8c2RTPDCkBjV-dE';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface Usuario {
  id?: number;
  nombre: string;
  domicilio: string;
  documento: string;
  correo: string;
  telefono: string;
  numero_tarjeta: string;
  nombre_tarjeta: string;
  codigo_seguridad: string;
}

export const guardarUsuario = async (usuario: Usuario) => {
  const { data, error } = await supabase
    .from('usuarios')
    .insert([usuario])
    .select();

  if (error) {
    throw error;
  }

  return data[0];
};