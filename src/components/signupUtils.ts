import { chakra, Box, Flex, Button } from "@chakra-ui/react";

const CenterFlex = chakra(Flex, {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "100px",
  },
});

const MiddleBox = chakra(Box, {
  baseStyle: {
    width: { base: "90vw", md: "50vw", xl: "40vw" },
    background: "rgba(230, 230, 239)",
    color: "rgba(69, 69, 73, 1)",
    zIndex: "3",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "4.5rem",
    boxShadow: "1px 1px 33px rgba(0,0,0,0.3)",
    padding: "30px",
  },
});
const CleanButton = chakra(Button, {
  baseStyle: {
    background: "blue",
    color: "#fff",
  },
});
export { CenterFlex, MiddleBox, CleanButton };
