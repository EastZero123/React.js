import classes from "./Card.module.css";

function Card(props) {
  return <div classNmae={classes.card}>{props.children}</div>;
}

export default Card;
