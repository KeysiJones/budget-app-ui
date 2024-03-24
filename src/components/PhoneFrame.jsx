import PropTypes from 'prop-types';

const PhoneFrame = ({ children }) => (
  <div className='flex flex-col items-center self-center w-full h-full px-4 py-6 gap-y-6 sm:w-96 min-w-min bg-slate-100 sm:rounded-2xl sm:h-4/5'>
    <div>
      <p className='text-xl font-bold'>Dashboard</p>
    </div>
    {children}
  </div>
);

PhoneFrame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PhoneFrame;
