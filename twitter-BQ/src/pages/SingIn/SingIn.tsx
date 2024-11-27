import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useSingIn } from "../../hooks/useUsers";
import { useNotifications } from "@toolpad/core";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

interface IFormInputs {
  email: string;
  password: string;
}

const SingIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();
  const { data: users } = useSingIn();
  const { setUser } = useAuth();
  const [showPassword, setShowPassword] = React.useState(false);
  const notifications = useNotifications();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const onSubmit = (data: IFormInputs) => {
    const user = users?.find((user) => user.email === data.email);
    if (!user) {
      notifications.show("Usuário não encontrado", {
        severity: "error",
        autoHideDuration: 3000,
      });
    } else {
      setUser(user);
      navigate("/home");
    }
  };

  return (
    <Stack display="flex" alignItems="center">
      <Stack component="form" onSubmit={handleSubmit(onSubmit)} width="33%">
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
          error={!!errors.password}
        >
          <InputLabel size="small" htmlFor="outlined-adornment-password">
            Password
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
            {...register("password", { required: true })}
          />
          <FormHelperText>{errors.password?.message}</FormHelperText>
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
          Entre
        </Button>
        <Link href="/sing-up" variant="body2">
          Cadastre-se
        </Link>
      </Stack>
    </Stack>
  );
};

export { SingIn };
