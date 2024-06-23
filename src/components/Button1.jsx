import styles from "./Button1.module.css";

const Button1 = ( {onButtonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      {buttonNames.map((item) => (
        <button key={item} className={styles.button} onClick={ () => onButtonClick(item)} >
          {item}
        </button>
      ))}
    </>
  );
};

export default Button1;
