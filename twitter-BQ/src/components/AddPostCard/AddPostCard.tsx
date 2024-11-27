import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Button, FormControl, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAuth } from "../../providers/AuthProvider";
import { useAddPost } from "../../hooks/usePosts";
import { useAddComment } from "../../hooks/useComments";
import { useParams } from "react-router-dom";

type IAddPostCardProps = {
  isComment?: boolean;
};

interface IFormPost {
  publicacao: string;
}

const AddPostCard: React.FC<IAddPostCardProps> = ({ isComment = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormPost>();

  const { id } = useParams();

  const { user } = useAuth();
  const { mutate } = useAddPost();
  const { mutate: mutateComment } = useAddComment(id || '');

  const onSubmit = (data: IFormPost) => {
    if (isComment) {
      const formattedPayload = {
        comentario: data.publicacao,
        usuario_id: user?.id,
        publicacao_id: id,
      };
      mutateComment(formattedPayload);
    } else {
      const formattedPayload = {
        ...data,
        usuario_id: user?.id,
      };
      mutate(formattedPayload);
    }
  };

  return (
    <Card
      sx={{
        borderBottom: "1px solid lightgray",
        borderRadius: 0, // Remove as bordas arredondadas
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)"
      }}
    >
      <CardContent>
        <Stack
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          direction="row"
        >
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={user?.imagem}
          >
            {user?.nome[0]}
          </Avatar>
          <Stack
            padding="0 20px"
            width="100%"
            alignItems="flex-end"
            gap="10px"
            flexDirection="row"
          >
            <FormControl fullWidth error={!!errors.publicacao}>
              <TextField
                id="standard-multiline-static"
                multiline
                rows={4}
                
                placeholder={
                  isComment
                    ? "Postar sua resposta"
                    : "O que você está pensando?"
                }
                variant="standard"
                fullWidth
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottom: "none",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottom: "none",
                  },
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                    borderBottom: "none",
                  },
                }}
                {...register("publicacao")}
              />
            </FormControl>
            <Button type="submit" variant="contained">
              {isComment ? "Comentar" : "Postar"}
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export { AddPostCard };
