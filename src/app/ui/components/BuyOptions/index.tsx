import './style.scss';
const BuyOptions = ({ handleBuyTypeChange, handleBuyAmountChange, handleBuySubmit, state }: { handleBuyTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, handleBuyAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleBuySubmit: (e: React.FormEvent) => void, state: any }) => {
    return (
        <div className="BuyOptions__wrapper">
            <h3 className="BuyOptions__title">Formulario de Compras</h3>
            <form onSubmit={handleBuySubmit} className="BuyOptions__form">
                <div className="BuyOptions__field">
                    <label htmlFor="purchaseType" className="BuyOptions__label">Tipo de Compra:</label>
                    <select
                        id="purchaseType"
                        value={state.buyType}
                        onChange={handleBuyTypeChange}
                        className="BuyOptions__select"
                    >
                        <option value="PHYSICAL_ESTABLISHMENT"> En Establecimiento Físico</option>
                        <option value="WEB_PAGE">En la Página Web</option>
                    </select>
                </div>
                <div className="BuyOptions__field">
                    <label htmlFor="amount" className="BuyOptions__label">Cantidad a comprar:</label>
                    <input
                        id="amount"
                        type="number"
                        value={state.buyAmount}
                        onChange={handleBuyAmountChange}
                        min="0"
                        className="BuyOptions__input"
                    />
                </div>
                <button type="submit" className="BuyOptions__submitButton">Realizar Compra</button>
            </form>
        </div>
    );
};

export default BuyOptions;
