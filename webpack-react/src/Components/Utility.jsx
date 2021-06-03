import { useState } from "react";
const fruits = {
 apple:1,
 mango:10,
 orange:14
};
const vegetables = {
    broccoli:1,
    carrot:10,
    cucumber:10
};
const Utility = () => {
  const [utility, setUtility] = useState({});
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setUtility(fruits)}>Sample 1</button>
      <button onClick={() => setUtility(vegetables)}>Sample 2</button>

      <ul>
        {Object.keys(utility).map((keys) => (
          <li key={keys}>
            {keys}: {utility[keys]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Utility;
