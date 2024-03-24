import PropTypes from 'prop-types';
import MoneyTree from './MoneyTree';
import VisaLogo from './VisaLogo';

const CreditCard = ({ balance }) => (
  <div className='relative flex bg-[#37474F] p-5 rounded-xl w-full max-w-96 min-w-72'>
    <div className='flex flex-col gap-y-10'>
      <div className='flex flex-col gap-y-2'>
        <p className='text-sm text-[#b3b3b3]'>Available balance</p>
        <p className='text-2xl font-bold text-white'>{balance}</p>
      </div>
      <p className='text-sm font-semibold text-white'>See details</p>
    </div>
    <div className='absolute bottom-0 right-0'>
      <MoneyTree />
    </div>
    <div className='absolute right-6 top-6'>
      <VisaLogo />
    </div>
  </div>
);

CreditCard.propTypes = {
  balance: PropTypes.string.isRequired,
};

export default CreditCard;
