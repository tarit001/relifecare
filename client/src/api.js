import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Fetch all patients
export const getPatients = async () => {
  const response = await fetch(`${API_URL}/api/patients`);
  if (!response.ok) throw new Error('Failed to fetch patients');
  return response.json();
};

// Fetch patient by ID
export const getPatientById = async (id) => {
  const response = await fetch(`${API_URL}/api/patients/${id}`);
  if (!response.ok) throw new Error('Failed to fetch patient');
  return response.json();
};

// Create a new patient
export const createPatient = async (patientData) => {
  const response = await fetch(`${API_URL}/api/patients`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patientData),
  });
  if (!response.ok) throw new Error('Failed to create patient');
  return response.json();
};

// Update patient
export const updatePatient = async (id, patientData) => {
  const response = await fetch(`${API_URL}/api/patients/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patientData),
  });
  if (!response.ok) throw new Error('Failed to update patient');
  return response.json();
};

// Delete patient
export const deletePatient = async (id) => {
  const response = await fetch(`${API_URL}/api/patients/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete patient');
  return response.json();
};





// src/api/auth.js

export async function getAdminOnlyData() {
  const token = localStorage.getItem('token');

  const response = await fetch('http://localhost:5000/api/auth/admin-only', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
}





const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
});

export default api;

