import { gql } from "@apollo/client";
import { Box, Paper, Typography } from "@material-ui/core";
import Link from "next/link";
import client from "../apollo-client";
import RocketDetail from "../components/RocketDetail";

const RocketDetailsPage = ({ rocket }) => {
  return (
    <Box padding={5}>
      <RocketDetail data={rocket} />
    </Box>
  );
};

export async function getStaticProps(context) {
  const rocketId = context.params.rocketId;
  const { data } = await client.query({
    query: gql`
      query Rocket($id: ID!) {
        rocket(id: $id) {
          active
          country
          description
          height {
            meters
          }
          mass {
            kg
          }
          name
        }
      }
    `,
    variables: { id: rocketId },
  });
  return {
    props: {
      rocket: data.rocket,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      {
        launchesPast {
          id
          details
          launch_date_local
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
  const paths = data.launchesPast.map((launch) => ({
    params: { rocketId: launch.rocket.rocket.id },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
export default RocketDetailsPage;
