import React from "react";
import './style.scss';

const WelcomeTitle = React.memo(() => {
  return (
    <h1 className='welcome__text'>
      Bienvenido a GregBank
    </h1>
  )
});

export default WelcomeTitle;