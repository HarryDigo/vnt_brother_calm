import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNotifications } from "@toolpad/core";
import axios from "axios";
import { IAddComment } from "../interfaces/Comments";

const useAddComment = (id: string) => {
  const queryClient = useQueryClient();
  const notifications = useNotifications();
  return useMutation({
    mutationFn: async (newComment: IAddComment) => {
      const response = await axios.post("/api/comentarios", newComment);
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

export { useAddComment };
