export interface IUser {
  id: number;
  name: string;
  email: string;
  token: string; // Inclua o token aqui para simplificar
}

export interface IToken {
  token: string;
}

export interface IUserData {
  email: string;
  password: string;
}

export interface IResponseUser {
  email: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  password: string;
}

export interface IResponseUserData {
  id: number;
  email: string;
  token: string; // Inclua o token aqui para simplificar
}

export interface ITask {
  id: number;
  description: string;
  isCompleted: boolean;
  userId: number;
}

export interface ICreateTaskData {
  description: string;
  isCompleted: boolean;
}

export interface IUpdateTaskData {
  description: string;
}
