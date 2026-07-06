import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig } from "remotion";
import { IntroScene } from "./scenes/IntroScene";
import { SkillsScene } from "./scenes/SkillsScene";
import { ProjectsScene } from "./scenes/ProjectsScene";
import { AboutScene } from "./scenes/AboutScene";
import { ContactScene } from "./scenes/ContactScene";
import { OutroScene } from "./scenes/OutroScene";

export const PortfolioVideo: React.FC = () => {
  const { durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  // Scene durations (total = 70 seconds = 2100 frames at 30fps)
  const introDuration = 300; // 10s
  const skillsDuration = 360; // 12s
  const projectsDuration = 420; // 14s
  const aboutDuration = 300; // 10s
  const contactDuration = 300; // 10s
  const outroDuration = 420; // 14s

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a" }}>
      <Sequence from={0} durationInFrames={introDuration}>
        <IntroScene />
      </Sequence>
      <Sequence from={introDuration} durationInFrames={skillsDuration}>
        <SkillsScene />
      </Sequence>
      <Sequence from={introDuration + skillsDuration} durationInFrames={projectsDuration}>
        <ProjectsScene />
      </Sequence>
      <Sequence from={introDuration + skillsDuration + projectsDuration} durationInFrames={aboutDuration}>
        <AboutScene />
      </Sequence>
      <Sequence from={introDuration + skillsDuration + projectsDuration + aboutDuration} durationInFrames={contactDuration}>
        <ContactScene />
      </Sequence>
      <Sequence from={introDuration + skillsDuration + projectsDuration + aboutDuration + contactDuration} durationInFrames={outroDuration}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
