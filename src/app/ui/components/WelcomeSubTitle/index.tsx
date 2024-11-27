import React from "react";
import './style.scss';

const WelcomeSubTitle = React.memo(() => {
  return (
    <p className='sub__text'>
      ¡Tu banco en línea, fácil y seguro!
    </p>
  )
});

export default WelcomeSubTitle;