import React, { useRef } from 'react';

function FocusInput() {
  // Create a ref
  const inputRef = useRef(null);

  // Function to focus on the input field
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Focus on Input Example</h1>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus on Input</button>
    </div>
  );
}

export default FocusInput;
