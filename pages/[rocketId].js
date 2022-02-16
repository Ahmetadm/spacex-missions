import { gql } from "@apollo/client";
import { Box } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import client from "../apollo-client";
import RocketDetail from "../components/RocketDetail";

const RocketDetailsPage = ({ rocket }) => {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content={`SpaceX ${rocket.name} Details`} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
      </Head>
      <Box padding={5}>
        <RocketDetail data={rocket} />
      </Box>
    </React.Fragment>
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
          rocket {
            rocket {
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
