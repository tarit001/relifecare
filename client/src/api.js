// api.js
// api.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;



// ✅ Named API calls using axios

// Fetch all patients
export const getPatients = async () => {
    const response = await instance.get('/patients');
    return response.data;
};

// Fetch patient by ID
export const getPatientById = async (id) => {
    const response = await instance.get(`/patients/${id}`);
    return response.data;
};

// Create a new patient
export const createPatient = async (patientData) => {
    const response = await instance.post('/patients', patientData);
    return response.data;
};

// Update patient
export const updatePatient = async (id, patientData) => {
    const response = await instance.put(`/patients/${id}`, patientData);
    return response.data;
};

// Delete patient
export const deletePatient = async (id) => {
    const response = await instance.delete(`/patients/${id}`);
    return response.data;
};

// Admin-only data fetch
export const getAdminOnlyData = async () => {
    const token = localStorage.getItem('token');
    const response = await instance.get('/auth/admin-only', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};



export const sendForgotPasswordOtp = async (email) => {
  const response = await instance.post('/forgot/forgot-password', { email });
  return response.data;
};

export const verifyForgotPasswordOtp = async ({ email, otp }) => {
  const response = await instance.post('/forgot/verify-otp', { email, otp });
  return response.data;
};

export const resetUserPassword = async ({ email, newPassword }) => {
  const response = await instance.post('/forgot/reset-password', { email, newPassword });
  return response.data;
};
