import resumePDF from "@/assets/pdf/resume_ruchi_raj_karki-2.pdf";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface FancyButtonProps {
  text: string;
  icon?: React.ReactNode;
}

const FancyButton = ({ text, icon }: FancyButtonProps) => {
  const hoverTL = gsap.timeline();
  hoverTL.pause();
  useGSAP(() => {
    hoverTL.to(".pink", {
      width: "calc(100% + 1.5rem)",
      ease: "elastic.Out(0.25)",
      duration: 0.5,
    });
    hoverTL.to(".pink", {
      width: "2em",
      left: "calc(100% - 2rem)",
      ease: "elastic.Out(0.25)",
      duration: 0.5,
    });
  });
  return (
    <a
      href={resumePDF}
      download="Ruchi_Raj_CV.pdf"
      className="link text-white text-2xl font-bold relative text-center p-5"
      onMouseOver={() => hoverTL.play()}
      onMouseLeave={() => hoverTL.reverse()}
    >
      <div className="pink w-8 h-8 p-6 rounded-full bg-midnight_green-600 absolute top-1/2 transform -translate-y-1/2 -left-2"></div>
      <span className="relative">{text}</span>
      {icon}
    </a>
  );
};

export default FancyButton;
