import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";


const TypingAnimation = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents early render

  return (
    <div className="text-3xl font-bold  mt-10">
      <ReactTyped
        strings={[
          "Welcome to my <span class='text-cyan-500'>portfolio!</span>",
          "I'm <span class='text-cyan-500'>B.M. Ahi Tanjil Ahosan</span>",
          "I'm a <span class='text-cyan-500'>web developer.</span>",
          "I <span class='text-cyan-500'>love</span> building cool things.",
        ]}
        typeSpeed={60}
        backSpeed={40}
        loop
      />
    </div>
  );
};

export default TypingAnimation;
