import { useTypewriter, Cursor } from "react-simple-typewriter";
const TypingEffect = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Web Developer",
      "Mern Stack Developer",
      "Frontend Developer",
      "Backend Developer",
    ],
    loop: true,
    typeSpeed: 40,
    delaySpeed: 1000,
  });
  return (
    <h1 className="text-3xl md:text-4xl font-bold text-white mt-10 h-32">
      Vinay is a <span className="text-blue-500 text-4xl">{text}</span>
      <Cursor cursorStyle="🚀" />
    </h1>
  );
};
export default TypingEffect;
