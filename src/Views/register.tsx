import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthService } from "../service/AuthService";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const newUser = { name, email, password };
      const data = await AuthService.registration(newUser);
      if (data) {
        navigate('/'); // Redirecionar para a página de login após o registro
      }
    } catch (err: any) {
      const error = err.response?.data.message;
      setError(error || 'Erro no registro. Tente novamente.');
    }
  };

  return (
    <div className="flex h-screen">
      <div className="relative flex flex-col p-20 rounded-lg shadow-lg bg-white md:w-1/2 h-full">
        <h1 className="text-3xl font-bold mb-6 pb-7">Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <p className="text-lg mb-2">Nome</p>
          <input
            type="text"
            placeholder="Digite seu Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 p-3 text-lg border rounded w-full"
          />
          <p className="text-lg mb-2">Email</p>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-3 text-lg border rounded w-full"
          />
          <p className="text-lg mb-2">Senha</p>
          <input
            type="password"
            placeholder="Crie uma senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-3 text-lg border rounded w-full"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit" 
            className="bg-purple-500 text-white p-3 text-lg rounded w-full mt-3"
          >
            Criar conta
          </button>
        </form>
        <div className="mt-6">
          <h3 className="text-lg">
            Já possui uma conta?{" "}
            <a href="/" className="text-blue-500 underline">
              Faça login
            </a>
          </h3>
        </div>
      </div>
      <div className="w-1/2 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "150%",
            backgroundPosition: "left",
          }}
        />
      </div>
    </div>
  );
};

export default Register;
