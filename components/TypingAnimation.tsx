import React, {useEffect, useRef} from 'react'
import Typewriter from 'typewriter-effect';

const TypingAnimation: React.FC = () => {
  return (
    <div className="font-bold text-4xl mt-6 md:text-7xl md:mt-0 text-center text-gray-900 dark:text-white ">
      <Typewriter
        options={{
          strings: [
            "Hi, I'm Jawwad",
            "A Software Engineer",
            "A Data Scientist",
            "Driving Data Solutions",
            "Discover My Work Below",
          ],
          autoStart: true,
          loop: true,
          delay: 75, // Adjust typing speed
          deleteSpeed: 50, // Adjust delete speed
        }}
      />
    </div>
  );
};
export default TypingAnimation;