import styled from "@emotion/styled";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          display: "none",
        },
      },
    },
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        color: "red",
      },
    },
  },
});
