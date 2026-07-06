import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Easing } from "remotion";

const stats = [
  { number: "3+", label: "Years Experience" },
  { number: "20+", label: "Projects Completed" },
  { number: "10+", label: "Technologies" },
  { number: "100%", label: "Dedication" },
];

export const AboutScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Section title animation
  const titleSpring = spring({ frame, fps, config: { stiffness: 80, damping: 12 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleY = interpolate(titleSpring, [0, 1], [50, 0]);

  // Avatar animation
  const avatarSpring = spring({ frame: frame - 15, fps, config: { stiffness: 80, damping: 12 } });
  const avatarScale = interpolate(avatarSpring, [0, 1], [0.5, 1]);
  const avatarOpacity = interpolate(avatarSpring, [0, 1], [0, 1]);

  // Bio text animation
  const bioSpring = spring({ frame: frame - 30, fps, config: { stiffness: 80, damping: 12 } });
  const bioOpacity = interpolate(bioSpring, [0, 1], [0, 1]);
  const bioY = interpolate(bioSpring, [0, 1], [40, 0]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        display: "flex",
        flexDirection: "row",
        padding: 80,
      }}
    >
      {/* Left side - Avatar and stats */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: 60,
        }}
      >
        {/* Avatar placeholder with animated border */}
        <div
          style={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #22d3ee 0%, #818cf8 100%)",
            padding: 4,
            transform: `scale(${avatarScale})`,
            opacity: avatarOpacity,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 80,
              color: "#22d3ee",
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontWeight: 700,
            }}
          >
            RR
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 30,
            width: "100%",
            maxWidth: 400,
          }}
        >
          {stats.map((stat, index) => {
            const statDelay = 40 + index * 15;
            const statSpring = spring({
              frame: frame - statDelay,
              fps,
              config: { stiffness: 100, damping: 12 },
            });
            const statOpacity = interpolate(statSpring, [0, 1], [0, 1]);
            const statScale = interpolate(statSpring, [0, 1], [0.8, 1]);

            return (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  opacity: statOpacity,
                  transform: `scale(${statScale})`,
                }}
              >
                <div
                  style={{
                    fontSize: 42,
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #22d3ee 0%, #818cf8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "#94a3b8",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right side - About text */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 60,
          borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Section title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            fontFamily: "system-ui, -apple-system, sans-serif",
            background: "linear-gradient(135deg, #22d3ee 0%, #818cf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            marginBottom: 40,
          }}
        >
          About Me
        </div>

        {/* Bio text */}
        <div
          style={{
            opacity: bioOpacity,
            transform: `translateY(${bioY}px)`,
          }}
        >
          <p
            style={{
              fontSize: 22,
              color: "#cbd5e1",
              fontFamily: "system-ui, -apple-system, sans-serif",
              lineHeight: 1.8,
              marginBottom: 24,
            }}
          >
            I'm a passionate Full Stack Developer with expertise in building
            modern web applications. I specialize in React, Node.js, and
            cloud technologies.
          </p>
          <p
            style={{
              fontSize: 22,
              color: "#cbd5e1",
              fontFamily: "system-ui, -apple-system, sans-serif",
              lineHeight: 1.8,
              marginBottom: 24,
            }}
          >
            My goal is to create efficient, scalable, and user-friendly
            solutions that make a real impact. I love turning complex problems
            into simple, beautiful, and intuitive designs.
          </p>
          <p
            style={{
              fontSize: 22,
              color: "#cbd5e1",
              fontFamily: "system-ui, -apple-system, sans-serif",
              lineHeight: 1.8,
            }}
          >
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with
            the developer community.
          </p>
        </div>

        {/* Decorative element */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 8,
          }}
        >
          {[0, 1, 2].map((i) => {
            const dotDelay = 80 + i * 10;
            const dotOpacity = interpolate(frame, [dotDelay, dotDelay + 20], [0, 0.6], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <div
                key={i}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22d3ee",
                  opacity: dotOpacity,
                }}
              />
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
