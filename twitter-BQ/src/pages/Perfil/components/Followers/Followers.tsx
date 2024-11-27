import React from "react";
import { Box, Stack } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useAuth } from "../../../../providers/AuthProvider";
import {
  useFetchFollowers,
  useFetchFollowing,
} from "../../../../hooks/useFollowers";
import { Users } from "../../../../components";

const Followers: React.FC = () => {
  const [value, setValue] = React.useState("1");
  const { user } = useAuth();
  const { data: listFollowing } = useFetchFollowing(user?.id || "");
  const { data: listFollowers } = useFetchFollowers(user?.id || "");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stack
      display="flex"
      alignItems="center"
      sx={{ height: "100%", width: "100%" }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }} width="100%">
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
            sx={{ width: "100%" }}
          >
            <Tab
              label={`Seguindo | ${listFollowing?.total}`}
              value="1"
              sx={{ width: "50%" }}
            />
            <Tab
              label={`Seguidores | ${listFollowers?.total}`}
              value="2"
              sx={{ width: "50%" }}
            />
          </TabList>
        </Box>

        <TabPanel value="1" sx={{ padding: 0, width: "100%" }}>
          {listFollowing?.data.length === 0 ? (
            <p>Você não está seguindo ninguém</p>
          ) : (
            listFollowing?.data.map((user) => (
              <Users
                nick={user.nick}
                imagem={user.imagem}
                id={user.usuario_id}
              />
            ))
          )}
        </TabPanel>
        <TabPanel value="2" sx={{ padding: 0, width: "100%" }}>
          {listFollowers?.data.length === 0 ? (
            <p>Nenhum seguidor</p>
          ) : (
            listFollowers?.data.map(
              (user) => (
                (
                  <Users
                    nick={user.nick}
                    imagem={user.imagem}
                    id={user.seguidor_id}
                  />
                )
              )
            )
          )}
        </TabPanel>
      </TabContext>
    </Stack>
  );
};

export { Followers };
