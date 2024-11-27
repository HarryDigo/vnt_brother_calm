import { Stack } from "@mui/material";
import React from "react";
import { useFetchPostById } from "../../hooks/usePosts";
import { useParams } from "react-router-dom";
import { PostCard } from "../../components";
import { AddPostCard } from "../../components/AddPostCard/AddPostCard";

const PostDetail: React.FC = () => {
  const { id } = useParams();
  const { data: listaPosts } = useFetchPostById(id || "");

  return (
    <Stack>
      <PostCard post={listaPosts} />
      <AddPostCard isComment />
      <Stack paddingRight="10px">
        {listaPosts?.comentarios.map((post) => (
          <PostCard post={post} key={post.comentario_id} isComment/> // Adicione uma chave única para cada post
        ))}
      </Stack>
    </Stack>
  );
};

export { PostDetail };
