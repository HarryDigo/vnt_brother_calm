import { extendTheme } from "@mui/material/styles";
import Home from "@mui/icons-material/Home";
import Person from "@mui/icons-material/Person";
import { AppProvider, Navigation, Session } from "@toolpad/core/AppProvider";
import AppRoutes from "./routes";
import { useMemo } from "react";
import { useAuth } from "./providers/AuthProvider";
import { Box } from "@mui/material";

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const App = () => {
  const { user } = useAuth();

  const session: Session | null = useMemo(
    () =>
      user
        ? {
            user: {
              name: user.nome || "",
              email: user.email || "",
              image: user.imagem || "",
            },
          }
        : null,
    [user]
  );

  const authentication = useMemo(() => {
    return {
      signIn: () => {
        window.location.assign("/");
      },
      signOut: () => {
        window.location.assign("/");
      },
    };
  }, []);

  const NAVIGATION: Navigation = [
    {
      segment: "home",
      title: "Página Inicial",
      icon: <Home />,
    },
    {
      segment: "perfil",
      title: "Perfil",
      icon: <Person />,
    },
  ];

  return (
    <Box>
      <AppProvider
        session={session}
        authentication={authentication}
        navigation={NAVIGATION}
        theme={demoTheme}
        branding={{ title: "BQ - TWITTER" }}
      >
        <AppRoutes />
      </AppProvider>
    </Box>
  );
};

export default App;
