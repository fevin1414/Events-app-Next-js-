import React from "react";
import Link from "next/link"; // Corrected import statement
import classes from "./button.module.css";

const ButtonExplore = (props) => {
  return (
    <Link href={props.link} passHref>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
};

export default ButtonExplore;
