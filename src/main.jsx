import ReactDOM from 'react-dom/client'
import './index.css'

import Display from './Display/Display';
import ButtonsList from './ButtonsList/ButtonsList';

const calculatorButtons = [
  { text: "7", id: 1 },
  { text: "8", id: 2 },
  { text: "9", id: 3 },
  { text: "+", id: 4 },
  { text: "4", id: 5 },
  { text: "5", id: 6 },
  { text: "6", id: 7 },
  { text: "-", id: 8 },
  { text: "1", id: 9 },
  { text: "2", id: 10 },
  { text: "3", id: 11 },
  { text: "*", id: 12 },
  { text: "0", id: 13 },
  { text: ".", id: 14 },
  { text: "/", id: 15 },
  { text: "=", id: 16 }
];

const jsxElem = (
  <div className='container'>
    <Display displayText='0'></Display>
    <ButtonsList btns={calculatorButtons}></ButtonsList>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(jsxElem)
