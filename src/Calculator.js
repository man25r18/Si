import React, { useState, useEffect } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
  const [secretResult, setSecretResult] = useState(null);
  const [showSecretInput, setShowSecretInput] = useState(false);
  const [secretInputValue, setSecretInputValue] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDoubleClick = () => {
    setShowSecretInput(true);
  };

  const setSecretResultValue = () => {
    if (secretInputValue.trim()) {
      setSecretResult(secretInputValue.trim());
      setShowSecretInput(false);
      setSecretInputValue('');
    }
  };

  const calculate = (firstOperand, secondOperand, operation) => {
    // Se è impostato un risultato segreto, ritorna sempre quello
    if (secretResult !== null) {
      return parseFloat(secretResult);
    }

    switch (operation) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '×':
        return firstOperand * secondOperand;
      case '÷':
        return secondOperand !== 0 ? firstOperand / secondOperand : 0;
      case '=':
        return secondOperand;
      default:
        return secondOperand;
    }
  };

  const handleNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperator);
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const handlePercent = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const handlePlusMinus = () => {
    const value = parseFloat(display);
    setDisplay(String(value * -1));
  };

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const CalcIcon = () => (
    <svg width="36" height="44" viewBox="0 0 24 30" fill="currentColor">
      {/* Rettangolo bianco principale */}
      <rect x="5" y="4" width="14" height="22" rx="2" fill="white"/>
      {/* Display superiore (1/6 dell'altezza) - molto più corposo */}
      <rect x="6.5" y="5.5" width="11" height="4" rx="1" fill="black"/>
      {/* 9 cerchi per i tasti (3x3) - più corposi */}
      <circle cx="8" cy="13" r="1.5" fill="black"/>
      <circle cx="12" cy="13" r="1.5" fill="black"/>
      <circle cx="16" cy="13" r="1.5" fill="black"/>
      <circle cx="8" cy="17" r="1.5" fill="black"/>
      <circle cx="12" cy="17" r="1.5" fill="black"/>
      <circle cx="16" cy="17" r="1.5" fill="black"/>
      <circle cx="8" cy="21" r="1.5" fill="black"/>
      <circle cx="12" cy="21" r="1.5" fill="black"/>
      <circle cx="16" cy="21" r="1.5" fill="black"/>
    </svg>
  );

  const Button = ({ onClick, className, children, span = 1 }) => (
    <button
      onClick={onClick}
      className={`${className} rounded-full font-bold text-2xl transition-all duration-150 active:scale-95 ${
        span === 2 ? 'col-span-2' : ''
      }`}
    >
      {children}
    </button>
  );

  const portraitButtons = [
    [
      { text: 'AC', action: handleClear, type: 'function' },
      { text: '+/-', action: handlePlusMinus, type: 'function' },
      { text: '%', action: handlePercent, type: 'function' },
      { text: '÷', action: () => handleOperator('÷'), type: 'operator' }
    ],
    [
      { text: '7', action: () => handleNumber(7), type: 'number' },
      { text: '8', action: () => handleNumber(8), type: 'number' },
      { text: '9', action: () => handleNumber(9), type: 'number' },
      { text: '×', action: () => handleOperator('×'), type: 'operator' }
    ],
    [
      { text: '4', action: () => handleNumber(4), type: 'number' },
      { text: '5', action: () => handleNumber(5), type: 'number' },
      { text: '6', action: () => handleNumber(6), type: 'number' },
      { text: '-', action: () => handleOperator('-'), type: 'operator' }
    ],
    [
      { text: '1', action: () => handleNumber(1), type: 'number' },
      { text: '2', action: () => handleNumber(2), type: 'number' },
      { text: '3', action: () => handleNumber(3), type: 'number' },
      { text: '+', action: () => handleOperator('+'), type: 'operator' }
    ],
    [
      { text: <CalcIcon />, action: () => {}, type: 'calc-icon' },
      { text: '0', action: () => handleNumber(0), type: 'number' },
      { text: ',', action: handleDecimal, type: 'number' },
      { text: '=', action: handleEquals, type: 'operator' }
    ]
  ];

  const landscapeButtons = [
    [
      { text: '7', action: () => handleNumber(7), type: 'number' },
      { text: '8', action: () => handleNumber(8), type: 'number' },
      { text: '9', action: () => handleNumber(9), type: 'number' },
      { text: 'AC', action: handleClear, type: 'function' },
      { text: '÷', action: () => handleOperator('÷'), type: 'operator' }
    ],
    [
      { text: '4', action: () => handleNumber(4), type: 'number' },
      { text: '5', action: () => handleNumber(5), type: 'number' },
      { text: '6', action: () => handleNumber(6), type: 'number' },
      { text: '+/-', action: handlePlusMinus, type: 'function' },
      { text: '×', action: () => handleOperator('×'), type: 'operator' }
    ],
    [
      { text: '1', action: () => handleNumber(1), type: 'number' },
      { text: '2', action: () => handleNumber(2), type: 'number' },
      { text: '3', action: () => handleNumber(3), type: 'number' },
      { text: '%', action: handlePercent, type: 'function' },
      { text: '-', action: () => handleOperator('-'), type: 'operator' }
    ],
    [
      { text: <CalcIcon />, action: () => {}, type: 'calc-icon' },
      { text: '0', action: () => handleNumber(0), type: 'number' },
      { text: ',', action: handleDecimal, type: 'number' },
      { text: '=', action: handleEquals, type: 'operator' },
      { text: '+', action: () => handleOperator('+'), type: 'operator' }
    ]
  ];

  const getButtonStyle = (type) => {
    switch (type) {
      case 'operator':
        return 'bg-amber-500 hover:bg-amber-400 text-white h-16 text-5xl font-light shadow-lg';
      case 'function':
        return 'bg-gray-500 hover:bg-gray-400 text-white h-16';
      case 'number':
        return 'bg-gray-700 hover:bg-gray-600 text-white h-16';
      case 'calc-icon':
        return 'bg-gray-700 hover:bg-gray-600 text-white h-16 flex items-center justify-center';
      default:
        return 'bg-gray-700 hover:bg-gray-600 text-white h-16';
    }
  };

  if (showSecretInput) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="bg-gray-800 p-6 rounded-lg max-w-sm w-full">
          <h3 className="text-white text-lg mb-4">Imposta risultato segreto:</h3>
          <input
            type="text"
            value={secretInputValue}
            onChange={(e) => setSecretInputValue(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
            placeholder="Inserisci il risultato..."
            autoFocus
          />
          <div className="flex gap-2">
            <button
              onClick={setSecretResultValue}
              className="flex-1 bg-orange-500 text-white p-2 rounded hover:bg-orange-400"
            >
              Imposta
            </button>
            <button
              onClick={() => setShowSecretInput(false)}
              className="flex-1 bg-gray-600 text-white p-2 rounded hover:bg-gray-500"
            >
              Annulla
            </button>
          </div>
          {secretResult && (
            <p className="text-green-400 text-sm mt-2">
              Risultato attuale: {secretResult}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Display */}
      <div 
        className="flex-1 flex items-end justify-end p-6"
        onDoubleClick={handleDoubleClick}
      >
        <div className="text-white text-right">
          <div className={`${isLandscape ? 'text-4xl' : 'text-6xl'} font-light`}>
            {display}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="p-4">
        {isLandscape ? (
          <div className="grid grid-cols-5 gap-3">
            {landscapeButtons.map((row, rowIndex) =>
              row.map((button, colIndex) => (
                <Button
                  key={`${rowIndex}-${colIndex}`}
                  onClick={button.action}
                  className={getButtonStyle(button.type)}
                  span={button.span}
                >
                  {button.text}
                </Button>
              ))
            )}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-3">
            {portraitButtons.map((row, rowIndex) =>
              row.map((button, colIndex) => (
                <Button
                  key={`${rowIndex}-${colIndex}`}
                  onClick={button.action}
                  className={getButtonStyle(button.type)}
                  span={button.span}
                >
                  {button.text}
                </Button>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
