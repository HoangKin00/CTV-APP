import clsx from "clsx";
import styles from "./Search.module.scss";

function Search(props) {
  const classes = clsx(styles.input, {
    [styles.default]: props.default,
    [styles.primary]: props.primary,
    [styles.success]: props.success,
    [styles.info]: props.info,
    [styles.warning]: props.warning,
    [styles.danger]: props.danger,
    [styles.disabled]: props.disabled,
    [styles.error]: props.className
  });
  const feedback = clsx(styles.feedback);

  return (
    <>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={classes}
      />
      {props.className && <div className={feedback}>{props.errorMessage}</div>}
    </>
  );
}
export default Search;
