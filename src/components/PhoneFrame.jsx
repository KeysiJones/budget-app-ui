import PropTypes from 'prop-types';
import BottomMenu from './BottomMenu';
import PlusIcon from './PlusIcon';

const PhoneFrame = ({ children }) => (
  <div className='relative flex flex-col items-center self-center w-full h-full p-6 gap-y-4 sm:w-96 min-w-min sm:rounded-2xl bg-[#F4F6F6] sm:h-4/5'>
    <div>
      <p className='mt-4 text-xl font-semibold'>Dashboard</p>
    </div>
    {children}
    <div className='fixed bottom-0 w-full sm:absolute'>
      <button className='floating-button mx-auto mb-[-30px] flex justify-center items-center bg-[#FFC727] right-[41.5%] bottom-16 border-4 border-white rounded-full w-16 h-16'>
        <PlusIcon />
      </button>
      <BottomMenu />
    </div>
  </div>
);

PhoneFrame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PhoneFrame;
