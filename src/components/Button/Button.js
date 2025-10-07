import React from 'react';
import styles from './styles.module.css';

function Button({ onClick, text, style }) {
  return (
    <button onClick={onClick} className={styles.btn} style={style}>
      {text}
    </button>
  );
}

export default Button;