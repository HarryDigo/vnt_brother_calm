import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotifications } from "@toolpad/core";
import axios from "axios";
import { ILikeComment, ILikePost } from "../interfaces/Likes";

const useLikePost = () => {
  const queryClient = useQueryClient();
  const notifications = useNotifications();
  return useMutation({
    mutationFn: async (id: ILikePost) => {
      const response = await axios.post("/api/curtidas/publicacao", id);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["publicacoes"] });
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

const useDeleteLikePost = () => {
  const queryClient = useQueryClient();
  const notifications = useNotifications();
  return useMutation({
    mutationFn: async (id: ILikePost) => {
      const response = await axios.delete("/api/curtidas/publicacao", {
        data: id,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["publicacoes"] });
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

const useLikeComment = (id: string) => {
    const queryClient = useQueryClient();
    const notifications = useNotifications();
    return useMutation({
      mutationFn: async (id: ILikeComment) => {
        const response = await axios.post("/api/curtidas/comentario", id);
        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["publicacao", id] });
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
  
  const useDeleteLikeComment = (id: string) => {
    const queryClient = useQueryClient();
    const notifications = useNotifications();
    return useMutation({
      mutationFn: async (id: ILikeComment) => {
        const response = await axios.delete("/api/curtidas/comentario", {
          data: id,
        });
        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["publicacao", id] });
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

export { useLikePost, useDeleteLikePost, useDeleteLikeComment, useLikeComment };
