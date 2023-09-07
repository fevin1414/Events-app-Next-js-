import React from "react";
import Link from "next/link"; // Corrected import statement
import classes from "./button.module.css";

const ButtonExplore = (props) => {
  if(props.link){
  return (
    <Link href={props.link} passHref>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
  }
  return <button className={classes.btn} onClick={props.onClick}>{props.children}</button>
};

export default ButtonExplore;
