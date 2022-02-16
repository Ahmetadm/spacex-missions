import { Typography, Box, Grid } from "@material-ui/core";
import Link from "next/link";
import MissionCard from "./MissionCard";

const MissionList = ({ launches }) => {
  console.log(launches);
  return (
    <Box sx={{ textAlign: "center" }} mt={6} px={4}>
      <Box mb={9}>
        <Typography variant="h3" component="h1" gutterBottom mb={10}>
          Welcome to SpaceX Missions !
        </Typography>
      </Box>
      <Box px={5}>
        <Grid container spacing={6} px={10} component="ul">
          {launches.map((launch) => (
            <Grid key={launch.id} item xs={12} sm={6} md={4} component="li">
              <Link
                key={launch.id}
                href={`/${launch.rocket.rocket.id}`}
                passHref
              >
                <a>
                  <MissionCard
                    missionName={launch.mission_name}
                    img={launch.links.mission_patch}
                    description={launch.details}
                    rocketName={launch.rocket.rocket.name}
                    date={launch.launch_date_local}
                    success={launch.launch_success}
                  />
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MissionList;
