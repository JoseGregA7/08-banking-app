import React from "react";
import './style.scss';

const GoBackComponent = React.memo(({ handleGoBack }: { handleGoBack: () => void }) => {
    return (
        <div className='back-button-container'>
            <button
                className='back-button'
                onClick={handleGoBack}
                aria-label="Volver a la página anterior"
                data-testid="back-button"
            >
                ↩
            </button>
        </div>

    )
});

export default GoBackComponent;