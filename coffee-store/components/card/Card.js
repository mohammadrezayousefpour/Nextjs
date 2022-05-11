import Link from "next/link";
import Image from "next/image";
import classes from "./Card.module.css";
import cls from "classnames";
const Card = ({ name, imgUrl, href }) => {
  return (
    <Link href={href}>
      <a className={classes.cardLink}>
        <div className={cls("glass", classes.container)}>
          <div className={classes.cardHeaderWrapper}>
            <h2>{name}</h2>
          </div>
          <div className={classes.cardImageWrapper}>
            <Image
              src={imgUrl}
              width={260}
              height={160}
              className={classes.cardImage}
            ></Image>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
