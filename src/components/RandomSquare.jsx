import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const RandomSquare = ({ img }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const randomizePosition = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const randomTop = Math.floor(Math.random() * (viewportHeight - 5));
      const randomLeft = Math.floor(Math.random() * (viewportWidth - 5));

      setPosition({ top: randomTop, left: randomLeft });
      console.log(`Top: ${randomTop}, Left: ${randomLeft}`);
    };

    randomizePosition();
  }, []);

  return (
    <>
      {isHovered && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-0"></div>
      )}
      <div
        onMouseEnter={() => setIsHovered((prev) => !prev)}
        style={{
          top: isHovered ? "50%" : `${position.top}px`,
          left: isHovered ? "50%" : `${position.left}px`,
        }}
        className={`absolute w-10 h-10 transition-all ease-in-out z-10 ${
          isHovered ? `top-1/2 left-1/2 scale-[10]` : ``
        }`}
      >
        <img
          src={img}
          alt="sonu"
          className={`w-full h-full object-cover rounded-full ${
            isHovered ? "" : "hidden"
          }`}
        />
      </div>
    </>
  );
};

RandomSquare.propTypes = {
  img: PropTypes.string.isRequired,
};

export default RandomSquare;
