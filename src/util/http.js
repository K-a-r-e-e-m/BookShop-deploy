import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export  async function NewUser({ email, password }) {
    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // id: id,
            email: email,
            password: password,
            // cart: []
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('User created:', data);
      return data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }



export async function fetchUsers() { 
    const data = await fetch('http://localhost:3001/users');

    if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
    }
    return data.json();
}

export  async  function fetchBooks() {
    const data = await fetch('http://localhost:3001/books');

    if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
    }
    return data.json();
}