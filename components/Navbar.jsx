import { AppBar, Box, Toolbar, Button, Typography } from "@material-ui/core";
import Link from "next/link";
Link;
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">SPACEX MISSIONS 🧑‍🚀</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
