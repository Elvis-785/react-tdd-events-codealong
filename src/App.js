

import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);

  function togglePepperoni(e) {
    setPepperoniIsChecked(e.target.checked);
  }

  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      <input
        type="checkbox"
        id="pepperoni"
        checked={pepperoniIsChecked}
        aria-checked={pepperoniIsChecked}
        onChange={togglePepperoni}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>

      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepperoniIsChecked && <li>Pepperoni</li>}
      </ul>
    </div>
  );
}

export default App;








// import React, { useState } from 'react';

// function App() {
//   const [hasPepperoni, setHasPepperoni] = useState(false);

//   const handleCheckboxChange = () => {
//     setHasPepperoni(!hasPepperoni);
//   };

//   return (
//     <div>
//       <h1>Select Pizza Toppings</h1>
//       <input
//         type="checkbox"
//         id="pepperoni"
//         checked={hasPepperoni}
//         onChange={handleCheckboxChange}
//         aria-checked={hasPepperoni}
//       />
//       <label htmlFor="pepperoni">Add pepperoni</label>
//       <ul>
//         <li>Cheese</li>
//         {hasPepperoni && <li>Pepperoni</li>}
//       </ul>
//     </div>
//   );
// }

// export default App;

