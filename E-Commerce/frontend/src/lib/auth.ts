import axios from 'axios';

export const setAuthToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

export const getAuthToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

export const removeAuthToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const isAuthenticated = (): boolean => {
  return !!getAuthToken();
};

// Gửi yêu cầu API với token
axios.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});