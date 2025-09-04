class ApiService {
  constructor(baseURL = 'https://crmgcc.net/api') {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  // Get auth token from localStorage
  getAuthToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  // Get headers with authentication if token exists
  getHeaders(customHeaders = {}) {
    const token = this.getAuthToken();
    const headers = { ...this.defaultHeaders, ...customHeaders };
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    return headers;
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.getHeaders(options.headers),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      // Handle different response statuses
      if (response.status === 401) {
        // Unauthorized - clear token and redirect to login
        if (typeof window !== 'undefined') {
          localStorage.removeItem('authToken');
          localStorage.removeItem('userData');
          window.location.href = '/auth/login';
        }
        throw new Error('Unauthorized access. Please login again.');
      }

      if (response.status === 403) {
        throw new Error('Access forbidden. You do not have permission to perform this action.');
      }

      if (response.status === 404) {
        throw new Error('Resource not found.');
      }

      if (response.status === 500) {
        throw new Error('Internal server error. Please try again later.');
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      // Check if response has content
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      } else if (contentType && contentType.includes('text/')) {
        return await response.text();
      } else {
        return response;
      }

    } catch (error) {
      console.error(`API Request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // GET request
  async get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;
    
    return this.request(url, {
      method: 'GET',
    });
  }

  // POST request
  async post(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // PUT request
  async put(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // PATCH request
  async patch(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  // DELETE request
  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    });
  }

  // Upload file (multipart/form-data)
  async upload(endpoint, formData) {
    const headers = { ...this.defaultHeaders };
    delete headers['Content-Type']; // Let browser set content-type for multipart
    
    const token = this.getAuthToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return this.request(endpoint, {
      method: 'POST',
      headers,
      body: formData,
    });
  }

  // Download file
  async download(endpoint, filename = 'download') {
    const response = await this.request(endpoint, {
      method: 'GET',
      headers: { ...this.defaultHeaders },
    });

    if (response instanceof Response) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
  }

  // Set base URL
  setBaseURL(newBaseURL) {
    this.baseURL = newBaseURL;
  }

  // Set default headers
  setDefaultHeaders(headers) {
    this.defaultHeaders = { ...this.defaultHeaders, ...headers };
  }
}

// Create a default instance
const apiService = new ApiService();

// Export both the class and the default instance
export { ApiService, apiService };

// Export default instance for convenience
export default apiService;
