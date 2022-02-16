import { Box, Grid, Paper, Typography, Button } from "@material-ui/core";
import Link from "next/link";

const RocketDetail = ({ data }) => {
  return (
    <Paper elevation={3}>
      <Box padding={4}>
        <Typography variant="h3" component="h1" gutterBottom mb={10}>
          <strong> {data.name} 🚀</strong>
        </Typography>

        <Typography
          variant="body1"
          component="h1"
          gutterBottom
          mb={10}
          color="primary"
        >
          {data.description}
        </Typography>

        <Grid container>
          <Grid item xs={12} md={4}>
            <Box pt={2}>
              <Typography variant="h6">Height:</Typography>
              <Typography variant="h6" color="primary">
                {data.height.meters} meters
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box pt={2}>
              <Typography variant="h6">Weight:</Typography>
              <Typography variant="h6" color="primary">
                {data.mass.kg} kilograms
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box pt={2}>
              <Typography variant="h6">Country:</Typography>
              <Typography variant="h6" color="primary">
                {data.country}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ textAlign: "center" }} py={4}>
        <Button size="small" variant="contained" color="primary">
          <Link href="/" passHref>
            Back to Homepage
          </Link>
        </Button>
      </Box>
    </Paper>
  );
};

export default RocketDetail;
