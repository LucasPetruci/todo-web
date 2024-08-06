import React, { useState } from "react";
import { list_users, User } from "./login";

interface RegisterProps {
  onRegister: () => void;
}
const Register: React.FC<RegisterProps> = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    let new_user: User = { username, email, password };
    list_users.push(new_user);
    console.log("Lista de usuários atualizada:", list_users);
  };

  return (
    <div className="flex h-screen">
      <div className="relative flex flex-col p-20 rounded-lg shadow-lg bg-white  md:w-1/2 h-full ">
        <h1 className="text-3xl font-bold mb-6 pb-7 ">Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <p className="text-lg-mb-2"> Nome</p>
          <input
            type="email"
            placeholder="Digite seu Nome"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 p-3 text-lg border rounded w-full"
          ></input>
          <p className="text-lg-mb-2"> Email</p>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-3 text-lg border rounded w-full"
          ></input>

          <p className="text-lg-mb-2"> Senha</p>
          <input
            type="password"
            placeholder="Crie uma senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-3 text-lg border rounded w-full"
          ></input>

          <button
            onClick={handleSubmit}
            className="bg-purple-500 text-white p-3 text-lg rounded w-full mt-3"
          >
            Criar conta
          </button>
        </form>
        <div className=" mt-6">
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
        ></div>
      </div>
    </div>
  );
};

export default Register;
