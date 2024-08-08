import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthService } from "../service/AuthService";
import { setTokenToLocalStorage } from "../helpers/localStorage.helper";
import { useAppDispatch } from "../store/hooks";
import { login } from '../store/user/userSlice';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.login({ email, password });
      if (data) {
        setTokenToLocalStorage('access_token', data.access_token); 
        dispatch(login(data));
        navigate('/todo'); // Redireciona para a página de tarefas
      }
    } catch (err: any) {
      const error = err.response?.data.message;
      console.log(error);
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
          <form onSubmit={loginHandler}>
            <p className="text-lg mb-2">Email</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                className="bg-purple-500 text-white p-3 text-lg rounded w-full"
              >
                Entrar
              </button>
            </div>
          </form>
          <div className="text-center mt-6">
            <h3 className="text-lg">
              Não possui uma conta?{" "}
              <a href="/register" className="text-blue-500 underline">
                Criar conta
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
