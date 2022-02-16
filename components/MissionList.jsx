import { Typography, Box, Grid } from "@material-ui/core";
import Link from "next/link";
import MissionCard from "./MissionCard";

const MissionList = ({ launches }) => {
  return (
    <Grid container spacing={6} px={10} component="ul">
      {launches.map((launch) => (
        <Grid key={launch.id} item xs={12} sm={6} md={4} component="li">
          <Link href={`/${launch.rocket.rocket.id}`} passHref>
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
  );
};

export default MissionList;
