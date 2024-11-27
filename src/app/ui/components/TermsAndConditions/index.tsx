import React from 'react';
import './style.scss';

export const TermsAndConditions = React.memo(() => {
    console.log('fui creado terms')
    return (
        <div>
            <a href="#" className='home__terms-conditions' data-testid="terms-conditions">
                Términos y Condiciones
            </a>
        </div>
    )
});