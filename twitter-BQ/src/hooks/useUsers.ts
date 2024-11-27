import { useMutation, useQuery } from "@tanstack/react-query";
import { useNotifications } from "@toolpad/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { IUpdateUser, IUser, IUserResponse } from "../interfaces/Users";

const useAddUser = () => {
  const notifications = useNotifications();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (newUser: IUser) => {
      const response = await axios.post("/api/usuarios", newUser);
      return response.data;
    },
    onSuccess: () => {
      notifications.show("Usuário criado com sucesso", {
        severity: "success",
        autoHideDuration: 3000,
      });
      navigate("/");
    },
    onError: (error) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      notifications.show((error as any)?.response?.data.erro, {
        severity: "error",
        autoHideDuration: 3000,
      });
    },
  });
};

const useUpdateUser = () => {
  const notifications = useNotifications();
  const { setUser } = useAuth();
  return useMutation({
    mutationFn: async ([user, usuario_id]: [IUpdateUser, string]) => {
      const response = await axios.patch(`/api/usuarios/${usuario_id}`, user);
      setUser(response.data);
      return response.data;
    },
    onSuccess: () => {
      notifications.show("Usuário editado com sucesso", {
        severity: "success",
        autoHideDuration: 3000,
      });
    },
    onError: (error) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      notifications.show((error as any)?.response?.data.erro, {
        severity: "error",
        autoHideDuration: 3000,
      });
    },
  });
};

const useSingIn = () => {
  return useQuery<IUserResponse[]>({
    queryKey: ["usuarios"],
    queryFn: async () => {
      const response = await axios.get<IUserResponse[]>("/api/usuarios");
      return response.data;
    },
  });
};

const useGetUser = (usuario_id: string) => {
  return useQuery<IUser[]>({
    queryKey: ["usuariosId"],
    queryFn: async () => {
      const response = await axios.get<IUser[]>(`/api/usuarios/${usuario_id}`);
      return response.data;
    },
  });
};

export { useAddUser, useSingIn, useGetUser, useUpdateUser };
