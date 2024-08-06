import React from "react";
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: () => void;
}

export interface User{
  username: string,
  email: string,
  password: string

}

export const list_users: User[] = [
  {
    username: "admin",
    email: "admin@gmail.com",
    password: "admin"
  },
];
const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      onLogin();
      if (list_users.find((user) => user.username === username && user.password === password)) {
      navigate('/todo');
    }
    else {
      alert("Usuário ou senha inválidos");
    }
  }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: "100%",
          boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)",
        }}
      ></div>
      <div className="relative flex flex-col p-20 rounded-lg shadow-lg bg-white w-4/5 md:w-1/2 lg:w-1/3">
        <div className="">
          <h1 className="text-3xl font-bold mb-6 pb-7 text-center">
            Faça login na sua conta
          </h1>
          <p className="text-lg mb-2">Email</p>
          <input
            type="email"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 p-3 text-lg border rounded w-full"
          />
          <p className="text-lg mb-2">Senha</p>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-3 text-lg border rounded w-full"
          />
          <div className="flex justify-center">
            <button
              onClick={handleLogin}
              className="bg-purple-500 text-white p-3 text-lg rounded w-full"
            >
              Entrar
            </button>
          </div>
          <div className="text-center mt-6">
            <h3 className="text-lg">
              Não possui uma conta?{" "}
              <a href="/register" className="text-blue-500 underline">
                Cadastre-se
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;