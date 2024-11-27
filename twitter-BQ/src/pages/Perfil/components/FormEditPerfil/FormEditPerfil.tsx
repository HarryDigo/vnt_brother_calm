import React from "react";
import { AccountCircle } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { useAuth } from "../../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "../../../../hooks/useUsers";

interface IFormInputs {
  email: string;
  nome: string;
  nick: string;
}

const FormEditPerfil: React.FC = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      email: user?.email,
      nome: user?.nome,
      nick: user?.nick,
    },
  });

  const { mutate } = useUpdateUser();

  const onSubmit = (data: IFormInputs) => {
    if (user?.id) {
      mutate([data, user.id]);
    } else {
      console.error("User ID is undefined");
    }
  };
  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} width="100%" padding='20px'>
      <h2>Editar perfil</h2>
      <FormControl fullWidth margin="normal" error={!!errors.nick}>
        <TextField
          id="input-name"
          label="Nick"
          type="text"
          size="small"
          required
          fullWidth
          variant="outlined"
          {...register("nick", { required: true })}
        />
        <FormHelperText>{errors.nome?.message}</FormHelperText>
      </FormControl>
      <FormControl fullWidth margin="normal" error={!!errors.nome}>
        <TextField
          id="input-name"
          label="Nome"
          type="text"
          size="small"
          required
          fullWidth
          variant="outlined"
          {...register("nome", { required: true })}
        />
        <FormHelperText>{errors.nome?.message}</FormHelperText>
      </FormControl>
      <FormControl fullWidth margin="normal" error={!!errors.email}>
        <TextField
          id="input-with-icon-textfield"
          label="Email"
          type="email"
          size="small"
          required
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle fontSize="inherit" />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          {...register("email", { required: true })}
        />
        <FormHelperText>{errors.email?.message}</FormHelperText>
      </FormControl>

      <Button
        type="submit"
        variant="outlined"
        color="info"
        size="small"
        disableElevation
        fullWidth
        sx={{ my: 2 }}
      >
        Editar
      </Button>
    </Stack>
  );
};

export { FormEditPerfil };
