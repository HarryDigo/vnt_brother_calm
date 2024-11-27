import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IFollow, IFollowers, IFollowing } from "../interfaces/Followers";
import { useNotifications } from "@toolpad/core";

const useFetchFollowing = (id: string) => {
  return useQuery<IFollowing>({
    queryKey: ["seguindo", id],
    queryFn: async () => {
      const response = await axios.get<IFollowing>(`/api/seguidores/seguindo/${id}`);
      return response.data;
    },
  });
};

const useFetchFollowers = (id: string) => {
  return useQuery<IFollowers>({
    queryKey: ["seguidores", id],
    queryFn: async () => {
      const response = await axios.get<IFollowers>(`/api/seguidores/${id}`);
      return response.data;
    },
  });
};

const useFollow = (id: string) => {
  const queryClient = useQueryClient();
  const notifications = useNotifications();
  return useMutation({
    mutationFn: async (newFollow: IFollow) => {
      const response = await axios.post("/api/seguidores", newFollow);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["seguindo", id] });
      queryClient.invalidateQueries({ queryKey: ["seguidores", id] });
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

const useUnfollow = (id: string) => {
  const queryClient = useQueryClient();
  const notifications = useNotifications();
  return useMutation({
    mutationFn: async (newFollow: IFollow) => {
      const response = await axios.delete("/api/seguidores", {
        data: newFollow,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["seguindo", id] });
      queryClient.invalidateQueries({ queryKey: ["seguidores", id] });
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

export { useFetchFollowing, useFetchFollowers, useFollow, useUnfollow };
