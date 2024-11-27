import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import { useAddUser } from "../../hooks/useUsers";
import { format } from "date-fns";

interface IFormInputs {
  nome: string;
  email: string;
  senha: string;
  nascimento: Date;
  nick: string;
}

const SingUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const { mutate } = useAddUser();

  const onSubmit = (data: IFormInputs) => {

    const formattedPayload = {
      ...data,
      nascimento: format(new Date(data.nascimento), 'yyyy-MM-dd')
  };
    mutate(formattedPayload);
  };

  return (
    <Stack display="flex" alignItems="center">
      <Stack component="form" onSubmit={handleSubmit(onSubmit)} width="33%">
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
        <FormControl fullWidth margin="normal" error={!!errors.nascimento}>
          <Controller
            name="nascimento"
            control={control}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                label="Data"
                value={value || null} // Para garantir que o valor não seja indefinido
                onChange={onChange}
              />
            )}
          />
          <FormHelperText>{errors.nascimento?.message}</FormHelperText>
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
        <FormControl
          sx={{ my: 2 }}
          fullWidth
          variant="outlined"
          error={!!errors.senha}
        >
          <InputLabel size="small" htmlFor="outlined-adornment-password">
            Senha
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            size="small"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="small"
                >
                  {showPassword ? (
                    <VisibilityOff fontSize="inherit" />
                  ) : (
                    <Visibility fontSize="inherit" />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            {...register("senha", { required: true })}
          />
          <FormHelperText>{errors.senha?.message}</FormHelperText>
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
          Sign Up
        </Button>
      </Stack>
    </Stack>
  );
};

export { SingUp };
