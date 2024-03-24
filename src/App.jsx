import './App.css'
import CreditCard from './components/CreditCard';
import PhoneFrame from './components/PhoneFrame';

const App = () => (
  <div className='flex flex-col justify-center w-screen h-screen m-auto bg-slate-300 min-w-min'>
    <PhoneFrame>
      <CreditCard balance='$3,578'/>
    </PhoneFrame>
  </div>
)

export default App
