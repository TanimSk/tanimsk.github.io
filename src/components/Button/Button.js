import React from 'react';
import styles from './styles.module.css';

function Button({ onClick, text }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}

export default Button;