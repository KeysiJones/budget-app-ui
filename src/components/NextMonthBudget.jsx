import PropTypes from 'prop-types';

const NextMonthBudget = ({ balance }) => (
  <div className='relative items-center justify-between flex bg-[#81B2CA] p-5 rounded-xl w-full max-w-96 min-w-72'>
    <div className='flex flex-col gap-y-1'>
      <p className='text-sm font-semibold text-white'>Budget for October</p>
      <p className='text-sm text-[#e6e6e6]'>Cash Available</p>
    </div>
    <p className='text-xl font-bold text-white'>{balance}</p>
  </div>
);

NextMonthBudget.propTypes = {
  balance: PropTypes.string.isRequired,
};

export default NextMonthBudget;
