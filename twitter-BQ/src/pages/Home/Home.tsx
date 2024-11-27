import { Box, Stack } from "@mui/material";
import React from "react";
import { useFetchPostByUser, useFetchPosts } from "../../hooks/usePosts";
import { AddPostCard } from "../../components/AddPostCard/AddPostCard";
import { PostCard } from "../../components";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useAuth } from "../../providers/AuthProvider";

const Home: React.FC = () => {
  const { user } = useAuth();
  const { data: listaPosts } = useFetchPosts();
  const { data: listaPostsByUser } = useFetchPostByUser(user?.id || "");

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stack>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            <Tab label="Todas os tweets" value="1" sx={{ width: "50%" }} />
            <Tab label="Meus tweets" value="2" sx={{ width: "50%" }} />
          </TabList>
        </Box>
        <AddPostCard />
        <Box
          maxHeight="calc(100vh - 300px)" // Define a altura máxima
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
          <TabPanel value="1" sx={{ padding: 0 }}>
            {listaPosts && (
              <Stack paddingRight="10px">
                {listaPosts.data.map((post) => (
                  <PostCard post={post} key={post.publicacao_id} /> // Adicione uma chave única para cada post
                ))}
              </Stack>
            )}
          </TabPanel>
          <TabPanel value="2" sx={{ padding: 0 }}>
            {listaPostsByUser && (
              <Stack paddingRight="10px">
                {listaPostsByUser.data.map((post) => (
                  <PostCard post={post} key={post.publicacao_id} /> // Adicione uma chave única para cada post
                ))}
              </Stack>
            )}
          </TabPanel>
        </Box>
      </TabContext>
    </Stack>
  );
};

export { Home };
