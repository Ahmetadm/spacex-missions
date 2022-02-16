import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MissionCard = ({
  missionName,
  description,
  rocketName,
  date,
  img,
  rocketId,
}) => {
  const [readMore, setReadMore] = useState(false);
  const readMoreHandler = (e) => {
    e.preventDefault();
    setReadMore((prevState) => !prevState);
  };
  return (
    <Link href={`/${rocketId}`}>
      <a>
        <Card sx={{ maxWidth: 300, height: 500 }}>
          {img ? (
            <CardMedia component="img" height="300" image={img} alt="text" />
          ) : (
            <CardMedia
              component="img"
              height="300"
              image="https://gundamhangar.com/_next/static/images/noimage-bc4d69a9832e21603f113491b5bf83a7.png"
              alt="text"
            />
          )}

          <CardContent>
            <Typography gutterBottom variant="button" component="h2">
              <strong>{missionName}</strong>
            </Typography>
            {description ? (
              !readMore ? (
                <Typography variant="body2" component="p">
                  {String(description).slice(0, 100).concat("...")}
                  <button className="readMore" onClick={readMoreHandler}>
                    read more
                  </button>
                </Typography>
              ) : (
                <Typography variant="body2" component="p">
                  {description}{" "}
                  <button className="readMore" onClick={readMoreHandler}>
                    read less
                  </button>
                </Typography>
              )
            ) : (
              <Typography variant="body2">NO DETAILS WERE PROVIDED</Typography>
            )}

            <CardActions>
              <Button
                fullWidth
                size="large"
                variant="contained"
                color="primary"
              >
                Rocket: {rocketName}
              </Button>
            </CardActions>
            <Typography variant="caption" color="primary">
              Launch Date: {new Date(date).toLocaleDateString()}
            </Typography>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
};

export default MissionCard;
