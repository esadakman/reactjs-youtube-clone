import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    pt={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link
      to="/"
      style={{ display: "flex", alignItems: "center", marginLeft: "1rem" }}
    >
      <img src="/logo.png" alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
