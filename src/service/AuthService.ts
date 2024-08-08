import { instance } from "../api/axios.api";
import { IResponseUserData, IUser, IUserData } from "../types/types";

export const AuthService = {
  async registration(
    userData: IUserData
  ): Promise<IResponseUserData | undefined> {
    const { data } = await instance.post<IResponseUserData>(
      "/auth/register",
      userData
    );
    return data;
  },

  async login(userData: IUserData) {
    const { data } = await instance.post("/auth/login", userData);
    return data;
  },
};
