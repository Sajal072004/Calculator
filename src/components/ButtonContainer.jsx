import styles from './ButtonContainer.module.css';
import Button1 from './Button1';

const ButtonContainer = ( {onButtonClick}) =>{
  return <>
    <div className={styles.buttonContainer}>
        <Button1 onButtonClick={onButtonClick}></Button1>
      </div>
  </>
}

export default ButtonContainer;