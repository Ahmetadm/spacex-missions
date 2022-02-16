import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import Image from "next/image";

const MissionCard = (props) => {
  return (
    <Card sx={{ maxWidth: 300, height: 500 }}>
      {props.img ? (
        <CardMedia component="img" height="300" image={props.img} alt="text" />
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
          <strong>{props.missionName}</strong>
        </Typography>
        {props.description ? (
          <Typography variant="body2" component="p">
            {String(props.description).slice(0, 200).concat("...")}
          </Typography>
        ) : (
          <Typography variant="body2">NO DETAILS WERE PROVIDED</Typography>
        )}

        <CardActions>
          <Button fullWidth size="large" variant="contained" color="primary">
            Rocket: {props.rocketName}
          </Button>
        </CardActions>
        <Typography variant="caption" color="primary">
          Launch Date: {new Date(props.date).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MissionCard;
