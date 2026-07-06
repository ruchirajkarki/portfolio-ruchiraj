import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Easing } from "remotion";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animated gradient background
  const gradientAngle = interpolate(frame, [0, 420], [0, 360]);

  // Thank you text animation
  const thankSpring = spring({ frame, fps, config: { stiffness: 80, damping: 12 } });
  const thankOpacity = interpolate(thankSpring, [0, 1], [0, 1]);
  const thankScale = interpolate(thankSpring, [0, 1], [0.8, 1]);

  // Name animation with delay
  const nameSpring = spring({ frame: frame - 20, fps, config: { stiffness: 80, damping: 12 } });
  const nameOpacity = interpolate(nameSpring, [0, 1], [0, 1]);
  const nameY = interpolate(nameSpring, [0, 1], [30, 0]);

  // Tagline animation with delay
  const taglineSpring = spring({ frame: frame - 40, fps, config: { stiffness: 80, damping: 12 } });
  const taglineOpacity = interpolate(taglineSpring, [0, 1], [0, 1]);
  const taglineY = interpolate(taglineSpring, [0, 1], [20, 0]);

  // Social links animation
  const socialSpring = spring({ frame: frame - 60, fps, config: { stiffness: 80, damping: 12 } });
  const socialOpacity = interpolate(socialSpring, [0, 1], [0, 1]);

  // Fade out at the end
  const fadeOut = interpolate(frame, [350, 420], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Floating particles
  const particles = Array.from({ length: 30 }, (_, i) => {
    const angle = (i / 30) * Math.PI * 2;
    const radius = interpolate(frame, [0, 420], [30, 500]);
    const particleOpacity = interpolate(frame, [i * 3, i * 3 + 60, 380, 420], [0, 0.5, 0.5, 0]);
    const x = Math.cos(angle + frame * 0.01) * radius;
    const y = Math.sin(angle + frame * 0.01) * radius;
    return { x, y, opacity: particleOpacity, size: 3 + (i % 4) * 2 };
  });

  return (
    <AbsoluteFill style={{ opacity: fadeOut }}>
      {/* Animated gradient background */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(${gradientAngle}deg, #0f172a 0%, #1e293b 25%, #0f172a 50%, #1e3a5f 75%, #0f172a 100%)`,
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `calc(50% + ${p.x}px)`,
            top: `calc(50% + ${p.y}px)`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#818cf8" : "#a78bfa",
            opacity: p.opacity,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Content */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* Thank you text */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            fontFamily: "system-ui, -apple-system, sans-serif",
            background: "linear-gradient(135deg, #22d3ee 0%, #818cf8 50%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transform: `scale(${thankScale})`,
            opacity: thankOpacity,
            letterSpacing: "-2px",
          }}
        >
          Thank You
        </div>

        {/* Decorative line */}
        <div
          style={{
            width: interpolate(frame, [40, 100], [0, 400], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            }),
            height: 3,
            background: "linear-gradient(90deg, transparent, #22d3ee, #818cf8, transparent)",
            marginTop: 20,
            marginBottom: 30,
            borderRadius: 2,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 42,
            fontWeight: 600,
            color: "#e2e8f0",
            fontFamily: "system-ui, -apple-system, sans-serif",
            transform: `translateY(${nameY}px)`,
            opacity: nameOpacity,
            letterSpacing: "2px",
          }}
        >
          Ruchi Raj Karki
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "#94a3b8",
            fontFamily: "system-ui, -apple-system, sans-serif",
            transform: `translateY(${taglineY}px)`,
            opacity: taglineOpacity,
            marginTop: 20,
          }}
        >
          Full Stack Developer
        </div>

        {/* Social links */}
        <div
          style={{
            display: "flex",
            gap: 30,
            marginTop: 50,
            opacity: socialOpacity,
          }}
        >
          {["GitHub", "LinkedIn", "Twitter", "Email"].map((platform, index) => {
            const linkDelay = 80 + index * 10;
            const linkOpacity = interpolate(frame, [linkDelay, linkDelay + 20], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <div
                key={index}
                style={{
                  fontSize: 16,
                  color: "#22d3ee",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  padding: "10px 20px",
                  border: "1px solid rgba(34, 211, 238, 0.3)",
                  borderRadius: 25,
                  opacity: linkOpacity,
                }}
              >
                {platform}
              </div>
            );
          })}
        </div>

        {/* Website URL */}
        <div
          style={{
            fontSize: 18,
            color: "#64748b",
            fontFamily: "monospace",
            marginTop: 40,
            opacity: interpolate(frame, [120, 160], [0, 0.6], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          ruchiraj.dev
        </div>
      </AbsoluteFill>

      {/* Corner accents */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 60,
          width: 80,
          height: 80,
          borderLeft: "3px solid #22d3ee",
          borderTop: "3px solid #22d3ee",
          opacity: interpolate(frame, [80, 120], [0, 0.6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 60,
          right: 60,
          width: 80,
          height: 80,
          borderRight: "3px solid #818cf8",
          borderBottom: "3px solid #818cf8",
          opacity: interpolate(frame, [100, 140], [0, 0.6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}
      />
    </AbsoluteFill>
  );
};
