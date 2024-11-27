import React from "react";
import {
  Divider,
  Stack,
} from "@mui/material";
import { Followers, FormEditPerfil } from "./components";



const Perfil: React.FC = () => {


  return (
    <Stack display="flex" alignItems="center" flexDirection='row'>
      <Followers></Followers>
      <Divider orientation="vertical" variant="middle" flexItem />
      <FormEditPerfil />
    </Stack>
  );
};

export { Perfil };
