import React from "react";
import Typewriter from "typewriter-effect";

const TypingAnimation: React.FC = () => {
  return (
    <div className="font-bold text-4xl mt-6 md:text-7xl md:mt-0 text-center text-gray-900 dark:text-white">
      <Typewriter
        options={{
          strings: [
            "Hey I'm Jawwad!",
            "Thanks for coming to my site!",
            "Scroll below to see some of my work",
            "If you find anything interesting lets connect!",
          ],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};
export default TypingAnimation;
