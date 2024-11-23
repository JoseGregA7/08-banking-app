import BuyOptions from "../BuyOptions";
import DepositOptions from "../DepositOptions";
import WithdrawalOptions from "../WithdrawalOptions";


const SubOptions = ({ option }: { option: string }) => {
  switch (option) {
    case 'depositos':
      return <DepositOptions />;
    case 'retiros':
      return <WithdrawalOptions />;
    case 'compras':
      return <BuyOptions />;
    default:
      return null;
  }
};

export default SubOptions;