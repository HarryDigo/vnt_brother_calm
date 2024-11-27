import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNotifications } from "@toolpad/core";
import { IAddPost, IPostComment, IPostCommentSingle, IPostList } from "../interfaces/Posts";

const useFetchPosts = () => {
  return useQuery<IPostList>({
    queryKey: ["publicacoes"],
    queryFn: async () => {
      const response = await axios.get<IPostList>("/api/publicacoes");
      return response.data;
    },
  });
};

const useFetchPostById = (id: string) => {
  return useQuery<IPostCommentSingle>({
    queryKey: ["publicacao", id],
    queryFn: async () => {
      const response = await axios.get<IPostCommentSingle>(`/api/publicacoes/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

const useFetchPostByUser= (id: string) => {
  return useQuery<IPostComment>({
    queryKey: ["publicacaoUser", id],
    queryFn: async () => {
      const response = await axios.get<IPostComment>(`/api/publicacoes/de/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

const useAddPost = () => {
  const queryClient = useQueryClient();
  const notifications = useNotifications();
  return useMutation({
    mutationFn: async (newPost: IAddPost) => {
      const response = await axios.post("/api/publicacoes", newPost);
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

export { useFetchPosts, useAddPost, useFetchPostById, useFetchPostByUser };
