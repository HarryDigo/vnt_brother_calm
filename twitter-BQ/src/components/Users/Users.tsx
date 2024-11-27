import React from "react";
import { Avatar, CardContent, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type UsersProps = {
  imagem: string;
  nick: string;
  id: string;
};

const Users: React.FC<UsersProps> = ({ imagem, nick, id }) => {
  const navigate = useNavigate();

  const handleNavigatePageUser = () => {
    navigate(`/user/${id}`);
  };

  return (
    <Stack
      onClick={handleNavigatePageUser}
      borderBottom="1px solid lightgray"
      width="100%"
      sx={{
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#f9f9f9",
        },
      }}
    >
      <CardContent>
        <Stack direction="row" alignItems="center">
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src={imagem}>
            A
          </Avatar>
          <Stack marginLeft="20px" alignItems="flex-start">
            <Stack>
              <Typography variant="subtitle2" fontWeight="600">
                @{nick}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Stack>
  );
};

export { Users };
