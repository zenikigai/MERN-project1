import { useEffect, useState } from "react";

export default function useAnimatedLogo() {
  const [text, setText] = useState("");
  const [iteration, setIteration] = useState(0);
  const logo = "Zenikigai"

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prev) => prev + logo[iteration % logo.length]);
      setIteration((prev) => prev + 1);
      if (text.length === logo.length) {
        setText("");
        setIteration(0);
      }
    }, 250);
    return () => {
      clearInterval(intervalId);
    };
  }, [logo, text]);
  return text;
}
