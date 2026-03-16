'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) {
      router.push('/dashboard');
    } else {
      alert('Pogrešni podaci za prijavu.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Dobrodošli</h2>
        
        <div className="mb-4">
          <label className="block text-sm mb-1">Korisničko ime (email):</label>
          <input 
            type="email" 
            className="w-full p-2 border rounded" 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm mb-1">Lozinka:</label>
          <input 
            type="password" 
            className="w-full p-2 border rounded" 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        
        <button type="submit" className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900">
          PRIJAVA
        </button>
      </form>
    </div>
  );
}
