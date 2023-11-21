// userService.js
const API_URL = 'https://api-node-tienda.onrender.com/v1/user';

export const signUp = async (userData) => {
  const response = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Sign up failed');
  }
};

export const logIn = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Log in failed: ${errorData.message}`);
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error during login:', error.message);
    throw new Error('Unexpected error during login');
  }
};

export const logOut = async (token) => {
  try {
    const response = await fetch(`${API_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Incluye el token de autenticación en los encabezados
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Logout failed: ${errorData.message}`);
    }

    console.log('Logout successful');
  } catch (error) {
    console.error('Error during logout:', error.message);
    throw new Error('Unexpected error during logout');
  }
};
