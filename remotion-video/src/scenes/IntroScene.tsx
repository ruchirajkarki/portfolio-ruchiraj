import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Easing } from "remotion";

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animated gradient background
  const gradientAngle = interpolate(frame, [0, 300], [0, 360]);

  // Name animation
  const nameSpring = spring({ frame, fps, config: { stiffness: 80, damping: 12 } });
  const nameY = interpolate(nameSpring, [0, 1], [100, 0]);
  const nameOpacity = interpolate(nameSpring, [0, 1], [0, 1]);

  // Title animation with delay
  const titleSpring = spring({ frame: frame - 20, fps, config: { stiffness: 80, damping: 12 } });
  const titleY = interpolate(titleSpring, [0, 1], [80, 0]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);

  // Subtitle animation with delay
  const subtitleSpring = spring({ frame: frame - 40, fps, config: { stiffness: 80, damping: 12 } });
  const subtitleY = interpolate(subtitleSpring, [0, 1], [60, 0]);
  const subtitleOpacity = interpolate(subtitleSpring, [0, 1], [0, 1]);

  // Decorative line animation
  const lineWidth = interpolate(frame, [60, 120], [0, 400], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Particle effects
  const particles = Array.from({ length: 20 }, (_, i) => {
    const angle = (i / 20) * Math.PI * 2;
    const radius = interpolate(frame, [0, 300], [50, 400]);
    const particleOpacity = interpolate(frame, [i * 5, i * 5 + 60, 250, 300], [0, 0.6, 0.6, 0]);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y, opacity: particleOpacity, size: 4 + (i % 3) * 2 };
  });

  return (
    <AbsoluteFill>
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
            background: i % 2 === 0 ? "#22d3ee" : "#818cf8",
            opacity: p.opacity,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Content container */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* Name */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 800,
            fontFamily: "system-ui, -apple-system, sans-serif",
            background: "linear-gradient(135deg, #22d3ee 0%, #818cf8 50%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transform: `translateY(${nameY}px)`,
            opacity: nameOpacity,
            letterSpacing: "-2px",
          }}
        >
          Ruchi Raj
        </div>

        {/* Decorative line */}
        <div
          style={{
            width: lineWidth,
            height: 3,
            background: "linear-gradient(90deg, transparent, #22d3ee, #818cf8, transparent)",
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 2,
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 600,
            color: "#e2e8f0",
            fontFamily: "system-ui, -apple-system, sans-serif",
            transform: `translateY(${titleY}px)`,
            opacity: titleOpacity,
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Full Stack Developer
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#94a3b8",
            fontFamily: "system-ui, -apple-system, sans-serif",
            transform: `translateY(${subtitleY}px)`,
            opacity: subtitleOpacity,
            marginTop: 30,
            maxWidth: 600,
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Passionate about crafting efficient and scalable web applications
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
