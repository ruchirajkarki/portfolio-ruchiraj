import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Easing } from "remotion";

const skills = [
  { name: "React", level: 80, color: "#61DAFB" },
  { name: "MongoDB", level: 90, color: "#47A248" },
  { name: "Node.js", level: 80, color: "#339933" },
  { name: "Express", level: 80, color: "#000000" },
  { name: "JavaScript", level: 80, color: "#F7DF1E" },
  { name: "Git", level: 75, color: "#F05032" },
  { name: "HTML5", level: 100, color: "#E34F26" },
  { name: "Firebase", level: 70, color: "#FFCA28" },
  { name: "MySQL", level: 60, color: "#4479A1" },
  { name: "Tailwind", level: 90, color: "#06B6D4" },
  { name: "CSS3", level: 95, color: "#1572B6" },
  { name: "Bootstrap", level: 90, color: "#7952B3" },
];

export const SkillsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Section title animation
  const titleSpring = spring({ frame, fps, config: { stiffness: 80, damping: 12 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleY = interpolate(titleSpring, [0, 1], [50, 0]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
        padding: 80,
      }}
    >
      {/* Section title */}
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "linear-gradient(135deg, #22d3ee 0%, #818cf8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          marginBottom: 60,
        }}
      >
        My Skills
      </div>

      {/* Skills grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 30,
          justifyContent: "flex-start",
        }}
      >
        {skills.map((skill, index) => {
          const delay = 15 + index * 8;
          const skillSpring = spring({
            frame: frame - delay,
            fps,
            config: { stiffness: 100, damping: 12 },
          });
          const skillOpacity = interpolate(skillSpring, [0, 1], [0, 1]);
          const skillScale = interpolate(skillSpring, [0, 1], [0.8, 1]);

          // Progress bar animation
          const progressDelay = 30 + index * 8;
          const progressWidth = interpolate(
            frame,
            [progressDelay, progressDelay + 40],
            [0, skill.level],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }
          );

          return (
            <div
              key={index}
              style={{
                width: 250,
                opacity: skillOpacity,
                transform: `scale(${skillScale})`,
              }}
            >
              {/* Skill card */}
              <div
                style={{
                  background: "rgba(30, 41, 59, 0.8)",
                  borderRadius: 16,
                  padding: 24,
                  border: `1px solid ${skill.color}33`,
                  boxShadow: `0 4px 20px ${skill.color}11`,
                }}
              >
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#e2e8f0",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    marginBottom: 12,
                  }}
                >
                  {skill.name}
                </div>

                {/* Progress bar background */}
                <div
                  style={{
                    width: "100%",
                    height: 8,
                    backgroundColor: "#1e293b",
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  {/* Progress bar fill */}
                  <div
                    style={{
                      width: `${progressWidth}%`,
                      height: "100%",
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                      borderRadius: 4,
                      boxShadow: `0 0 10px ${skill.color}66`,
                    }}
                  />
                </div>

                {/* Skill level */}
                <div
                  style={{
                    fontSize: 14,
                    color: "#94a3b8",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    marginTop: 8,
                    textAlign: "right",
                  }}
                >
                  {Math.round(progressWidth)}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
