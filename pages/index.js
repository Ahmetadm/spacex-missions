import { gql } from "@apollo/client";
import client from "../apollo-client";
import React from "react";
import MissionList from "../components/MissionList";

export default function Home({ launches }) {
  console.log(launches);
  return <MissionList launches={launches} />;
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
