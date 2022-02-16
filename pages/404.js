import { Typography } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className="left">
        {" "}
        <Image
          src="/astronaut.gif"
          alt="not found"
          width="500"
          height="500"
          objectFit="cover"
        />
      </div>
      <div className="right">
        <h1>Hmmm...</h1>
        <Typography variant="h2">That page can not be found</Typography>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a className={styles.link}>Home page</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
