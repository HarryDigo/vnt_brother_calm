import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Stack } from "@mui/material";
import { formatRelative } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteLikePost,
  useLikeComment,
  useLikePost,
  useDeleteLikeComment,
} from "../../hooks/useLikes";

type PostCardProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post: any;
  isComment?: boolean;
};

const PostCard: React.FC<PostCardProps> = ({ post, isComment = false }) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { mutate: addLikePost } = useLikePost();
  const { mutate: deleteLikePost } = useDeleteLikePost();
  const { mutate: addLikeComment } = useLikeComment(id || "");
  const { mutate: deleteLikeComment } = useDeleteLikeComment(id || "");

  const handleNavigatePostId = () => {
    if (!isComment) {
      navigate(`/post/${post?.publicacao_id}`);
    }
  };

  const handleNavigatePageUser = () => {
    navigate(`/user/${post?.usuario_id}`);
  };

  const handleLike = () => {
    if (!isLiked) {
      if (isComment) {
        addLikeComment({ comentario_id: post?.comentario_id });
      } else {
        addLikePost({ publicacao_id: post?.publicacao_id });
      }
    } else {
      if (isComment) {
        deleteLikeComment({ comentario_id: post?.comentario_id });
      } else {
        deleteLikePost({ publicacao_id: post?.publicacao_id });
      }
    }
    setIsLiked(!isLiked);
  };

  return (
    <Stack
      borderBottom="1px solid lightgray"
      sx={{
        cursor: isComment ? "default" : "pointer",
        "&:hover": isComment
          ? {}
          : {
              backgroundColor: "#f9f9f9",
            },
      }}
    >
      <CardContent>
        <Stack direction="row">
        <Avatar
          sx={{ bgcolor: red[500] }}
          aria-label="recipe"
          src={post?.imagem}
        >
          {post?.imagem ? post.imagem[0] : post?.nick?.[0]?.toUpperCase() || "?"}
        </Avatar>
          <Stack marginLeft="10px">
            <Stack alignItems="center" flexDirection="row" gap="10px">
              <Typography
                variant="subtitle2"
                fontWeight="600"
                onClick={handleNavigatePageUser}
              >
                @{post?.nick}
              </Typography>
              <Typography variant="caption" fontWeight="600">
                |
              </Typography>
              <Typography variant="caption" marginTop="2px">
                {post?.criado_em
                ? formatRelative(new Date(post.criado_em), new Date(), { locale: ptBR })
                : "Data indisponível"}
              </Typography>
            </Stack>

            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              onClick={handleNavigatePostId}
            >
              {isComment ? post?.comentario || "Comentário não disponível" : post?.publicacao || "Publicação não disponível"}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLike}>
          <FavoriteIcon sx={{ color: isLiked ? "red" : "gray" }} />
          <Typography variant="subtitle1" margin="2px 0px 0px 5px">
            {post?.qtd_likes}
          </Typography>
        </IconButton>
        <IconButton aria-label="share" onClick={handleNavigatePostId}>
          <ChatBubbleIcon />
          <Typography variant="subtitle1" margin="2px 0px 0px 5px">
            {post?.qtd_comentarios}
          </Typography>
        </IconButton>
      </CardActions>
    </Stack>
  );
};

export { PostCard };
