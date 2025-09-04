import apiService from './apiService';

// Example usage of the API service

// 1. GET request with query parameters
export const getUsers = async (page = 1, limit = 10) => {
  try {
    const users = await apiService.get('/users', { page, limit });
    return users;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};

// 2. POST request (like login)
export const loginUser = async (email, password) => {
  try {
    const response = await apiService.post('/admin/login', { email, password });
    return response;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

// 3. PUT request (update user)
export const updateUser = async (userId, userData) => {
  try {
    const updatedUser = await apiService.put(`/users/${userId}`, userData);
    return updatedUser;
  } catch (error) {
    console.error('Failed to update user:', error);
    throw error;
  }
};

// 4. PATCH request (partial update)
export const patchUser = async (userId, partialData) => {
  try {
    const patchedUser = await apiService.patch(`/users/${userId}`, partialData);
    return patchedUser;
  } catch (error) {
    console.error('Failed to patch user:', error);
    throw error;
  }
};

// 5. DELETE request
export const deleteUser = async (userId) => {
  try {
    await apiService.delete(`/users/${userId}`);
    return true;
  } catch (error) {
    console.error('Failed to delete user:', error);
    throw error;
  }
};

// 6. File upload
export const uploadProfilePicture = async (userId, file) => {
  try {
    const formData = new FormData();
    formData.append('profile_picture', file);
    
    const response = await apiService.upload(`/users/${userId}/profile-picture`, formData);
    return response;
  } catch (error) {
    console.error('Failed to upload profile picture:', error);
    throw error;
  }
};

// 7. File download
export const downloadReport = async (reportId, filename) => {
  try {
    await apiService.download(`/reports/${reportId}/download`, filename);
  } catch (error) {
    console.error('Failed to download report:', error);
    throw error;
  }
};

// 8. Custom headers example
export const getSensitiveData = async () => {
  try {
    const response = await apiService.get('/sensitive-data', {}, {
      headers: {
        'X-Custom-Header': 'custom-value',
        'Cache-Control': 'no-cache'
      }
    });
    return response;
  } catch (error) {
    console.error('Failed to fetch sensitive data:', error);
    throw error;
  }
};

// 9. Change base URL for different environments
export const switchToStagingAPI = () => {
  apiService.setBaseURL('https://staging.crmgcc.net/api');
};

export const switchToProductionAPI = () => {
  apiService.setBaseURL('https://crmgcc.net/api');
};

// 10. Add custom default headers
export const addCustomHeaders = () => {
  apiService.setDefaultHeaders({
    'X-App-Version': '1.0.0',
    'X-Platform': 'web'
  });
};
