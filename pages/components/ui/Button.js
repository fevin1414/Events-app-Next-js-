import React from "react";
import Link from "next/Link";
import classes from "./button.module.css";

const Button = (props) => {
  return (
    <Link className={classes.btn} href={props.link}>
      {props.children}
    </Link>
  );
};

export default Button;
