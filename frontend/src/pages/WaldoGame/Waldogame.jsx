import { useState } from "react";
import waldoGame from "./WaldoGame.module.css";

const WaldoGame = () => {
  const [circlePosition, setCirclePosition] = useState({ x: null, y: null });
  console.log(circlePosition);
  const [dropdownPosition, setDropdownPosition] = useState({
    x: null,
    y: null,
  });
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleClick = (event) => {
    const x = event.clientX - 25; // Offset to center the circle on the click
    const y = event.clientY - 25; // Offset to center the circle on the click

    // Update the circle position in the state
    setCirclePosition({ x, y });

    // Update dropdown position and toggle visibility
    setDropdownPosition({ x: event.clientX, y: event.clientY });
    setDropdownVisible((prevState) => !prevState); // Toggle visibility
  };

  return (
    <main className={waldoGame.main} onClick={handleClick}>
      {circlePosition.x !== null && circlePosition.y !== null && (
        <div
          className={waldoGame.circle}
          style={{
            left: `${circlePosition.x}px`,
            top: `${circlePosition.y}px`,
          }}
        ></div>
      )}

      {dropdownVisible && (
        <div
          className={waldoGame.dropdown}
          style={{
            left: `${dropdownPosition.x}px`,
            top: `${dropdownPosition.y}px`,
          }}
        >
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
    </main>
  );
};

export default WaldoGame;
