import React, { useState } from 'react';
import { User } from 'lucide-react';

interface LoginProps {
  onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <User className="mr-2" /> Login
          
         
        </h2>
        <img src="/src/logo.jpg" alt="" width="400" height="400" /><br></br>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingrese su Nombre"
            className="w-full p-2 border rounded mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition-colors"
          >
            Ingresar
          </button>
          <p> <a href="Registro.tsx">ㅤ</a></p>
         <a href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Ftab%3Drm%26ogbl&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Ftab%3Drm%26ogbl&osid=1&passive=1209600&service=mail&ifkv=ARpgrqdo33KTW829CCzKcqL2QEVPvdrd4pQi-6w6jMw2x3hGhIDFq2FQVvZazom4jVTgIr9ZbjRakA&ddm=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" class="btn google">Iniciar sesión con Gmail</a>
          <br></br><a href="https://www.facebook.com/?locale=es_LA" class="btn facebook">Iniciar sesión con Facebook</a>
       
          <footer className="bg-amber-800 text-amber-50 py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; Cafeteria Buenisimo, elaborado por Grupo DECATECH</p>
        </div>
      </footer>

        </form>
      </div>
      
    </div>
    
  );
};

export default Login;