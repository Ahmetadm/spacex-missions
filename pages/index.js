import { gql } from "@apollo/client";
import { Box, Typography } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import client from "../apollo-client";
import MissionList from "../components/MissionList";

export default function Home({ launches }) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content={"SpaceX Missions"} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
      </Head>
      <Box sx={{ textAlign: "center" }} mt={6} px={4}>
        <Box mb={9}>
          <Typography variant="h3" component="h1" gutterBottom mb={10}>
            Welcome to SpaceX Missions !
          </Typography>
        </Box>
        <Box px={2}>
          <MissionList launches={launches} />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        launchesPast {
          id
          details
          launch_date_local
          launch_success
          links {
            mission_patch
          }
          mission_name
          rocket {
            rocket {
              name
              id
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      launches: data.launchesPast,
    },
    revalidate: 3600,
  };
}
