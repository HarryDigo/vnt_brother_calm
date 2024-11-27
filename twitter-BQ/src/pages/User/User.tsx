import React, { useState } from "react";
import { Avatar, Button, CardContent, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { PostCard } from "../../components";
import { useFetchPostByUser } from "../../hooks/usePosts";
import {
  useFetchFollowers,
  useFetchFollowing,
  useFollow,
  useUnfollow,
} from "../../hooks/useFollowers";
import { useAuth } from "../../providers/AuthProvider";

const User: React.FC = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { data: listaPostsByUser } = useFetchPostByUser(id || "");
  const { data: listFollowingAuth } = useFetchFollowing(user?.id || "");
  const { data: listFollowing } = useFetchFollowing(id || "");
  const { data: listFollowers } = useFetchFollowers(id || "");
  const { mutate: followUser } = useFollow(id || "");
  const { mutate: unfollowUser } = useUnfollow(id || "");

  const [isFollowing, setIsFollowing] = useState(
    !!listFollowingAuth?.data.find((user) => user.usuario_id === id)
  );

  const isMyProfile = user?.id === id;

  const handleFollow = () => {
    if (isFollowing) {
      unfollowUser({
        usuario_id: user?.id || " ",
        usuario_a_seguir_id: id || "",
      });
      setIsFollowing(false);
    } else {
      followUser({
        usuario_id: user?.id || " ",
        usuario_a_seguir_id: id || "",
      });
      setIsFollowing(true);
    }
  };

  return (
    <Stack>
      <Stack
        sx={{
          borderBottom: "1px solid lightgray",
          borderRadius: 0, // Remove as bordas arredondadas
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
        }}
      >
        <CardContent>
          <Stack direction="row" alignItems="center">
            <Avatar
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
              src={listaPostsByUser?.data[0].imagem}
            >
              A
            </Avatar>
            <Stack marginLeft="20px" alignItems="flex-start">
              <Stack>
                <Typography variant="subtitle2" fontWeight="600">
                  @{listaPostsByUser?.data[0].nick}
                </Typography>
              </Stack>
              <Stack
                width="100%"
                gap="10px"
                flexDirection="row"
                alignItems="center"
              >
                <Typography>
                  <b>{listFollowers?.total}</b> Seguidores{" "}
                </Typography>
                <Typography>
                  <b>{listFollowing?.total}</b> Seguindo{" "}
                </Typography>
                {!isMyProfile && (
                  <Button variant="contained" onClick={handleFollow}>
                    {isFollowing ? "Deixar de seguir" : "Seguir"}
                  </Button>
                )}
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Stack>
      <Stack
        paddingRight="10px"
        maxHeight="calc(100vh - 200px)" // Define a altura máxima
        overflow="auto" // Habilita o scroll quando necessário
        sx={{
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#DDD",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#BBB",
          },
        }}
      >
        {listaPostsByUser?.data.map((post) => (
          <PostCard post={post} key={post.publicacao_id} /> // Adicione uma chave única para cada post
        ))}
      </Stack>
    </Stack>
  );
};

export { User };
