# SpaceX Missions

## Live Version [SpaceX- Missions](https://ahmetadm-spacex-missions.vercel.app/).

=================================================================================

## Project Goal

To create a Next.js application that integrates Apollo Client and connects to https://api.spacex.land/graphql/. It displays all the past SpaceX missions with image, name, and relevant data the API provides in a grid layout. When you click on a box it goes to a different page where it will show details of the rocket used.

## Dependencies

- @apollo/client- 3.5.9
- @material-ui/core- 4.12.3
- graphql- 16.3.0
- next- 12.0.10
- react- 17.0.2
- react-dom- 17.0.2

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
