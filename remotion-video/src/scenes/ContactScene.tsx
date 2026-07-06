import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Easing } from "remotion";

const contactMethods = [
  { icon: "📧", label: "Email", value: "ruchiraj@example.com" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/ruchiraj" },
  { icon: "🐙", label: "GitHub", value: "github.com/ruchiraj" },
  { icon: "🌐", label: "Portfolio", value: "ruchiraj.dev" },
];

export const ContactScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Section title animation
  const titleSpring = spring({ frame, fps, config: { stiffness: 80, damping: 12 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleY = interpolate(titleSpring, [0, 1], [50, 0]);

  // CTA text animation
  const ctaSpring = spring({ frame: frame - 20, fps, config: { stiffness: 80, damping: 12 } });
  const ctaOpacity = interpolate(ctaSpring, [0, 1], [0, 1]);
  const ctaY = interpolate(ctaSpring, [0, 1], [30, 0]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      {/* Section title */}
      <div
        style={{
          fontSize: 72,
          fontWeight: 700,
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "linear-gradient(135deg, #22d3ee 0%, #818cf8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          marginBottom: 30,
        }}
      >
        Let's Connect
      </div>

      {/* CTA text */}
      <div
        style={{
          fontSize: 28,
          color: "#94a3b8",
          fontFamily: "system-ui, -apple-system, sans-serif",
          textAlign: "center",
          maxWidth: 700,
          lineHeight: 1.6,
          opacity: ctaOpacity,
          transform: `translateY(${ctaY}px)`,
          marginBottom: 60,
        }}
      >
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </div>

      {/* Contact methods */}
      <div
        style={{
          display: "flex",
          gap: 40,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {contactMethods.map((method, index) => {
          const delay = 40 + index * 20;
          const methodSpring = spring({
            frame: frame - delay,
            fps,
            config: { stiffness: 100, damping: 12 },
          });
          const methodOpacity = interpolate(methodSpring, [0, 1], [0, 1]);
          const methodY = interpolate(methodSpring, [0, 1], [40, 0]);

          // Pulse animation for the icon
          const pulseScale = interpolate(
            frame,
            [delay + 30, delay + 45, delay + 60],
            [1, 1.1, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          return (
            <div
              key={index}
              style={{
                opacity: methodOpacity,
                transform: `translateY(${methodY}px)`,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: "rgba(34, 211, 238, 0.1)",
                  border: "2px solid rgba(34, 211, 238, 0.3)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 40,
                  marginBottom: 16,
                  transform: `scale(${pulseScale})`,
                  boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)",
                }}
              >
                {method.icon}
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#e2e8f0",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  marginBottom: 4,
                }}
              >
                {method.label}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#94a3b8",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
              >
                {method.value}
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative line */}
      <div
        style={{
          marginTop: 60,
          width: interpolate(frame, [100, 160], [0, 300], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          }),
          height: 2,
          background: "linear-gradient(90deg, transparent, #22d3ee, transparent)",
        }}
      />
    </AbsoluteFill>
  );
};
