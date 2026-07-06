import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Easing } from "remotion";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative task management with Firebase backend",
    tech: ["React", "Firebase", "Tailwind CSS"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard with real-time data visualization",
    tech: ["React", "D3.js", "Express", "MySQL"],
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Weather Application",
    description: "Location-based weather app with 7-day forecast and alerts",
    tech: ["React", "OpenWeather API", "Geolocation"],
    gradient: "from-orange-500 to-red-500",
  },
];

export const ProjectsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Section title animation
  const titleSpring = spring({ frame, fps, config: { stiffness: 80, damping: 12 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleY = interpolate(titleSpring, [0, 1], [50, 0]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
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
        Featured Projects
      </div>

      {/* Projects grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 40,
        }}
      >
        {projects.map((project, index) => {
          const delay = 20 + index * 25;
          const projectSpring = spring({
            frame: frame - delay,
            fps,
            config: { stiffness: 80, damping: 12 },
          });
          const projectOpacity = interpolate(projectSpring, [0, 1], [0, 1]);
          const projectY = interpolate(projectSpring, [0, 1], [60, 0]);

          // Hover-like glow animation
          const glowIntensity = interpolate(
            frame,
            [delay + 30, delay + 60, delay + 90, delay + 120],
            [0, 0.3, 0.3, 0.1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          return (
            <div
              key={index}
              style={{
                opacity: projectOpacity,
                transform: `translateY(${projectY}px)`,
              }}
            >
              <div
                style={{
                  background: "rgba(30, 41, 59, 0.6)",
                  borderRadius: 20,
                  padding: 32,
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: `0 0 ${40 * glowIntensity}px ${20 * glowIntensity}px rgba(34, 211, 238, ${glowIntensity * 0.3})`,
                  height: 280,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Project number */}
                <div
                  style={{
                    fontSize: 14,
                    color: "#64748b",
                    fontFamily: "monospace",
                    marginBottom: 12,
                  }}
                >
                  0{index + 1}
                </div>

                {/* Project title */}
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#f1f5f9",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    marginBottom: 12,
                  }}
                >
                  {project.title}
                </div>

                {/* Project description */}
                <div
                  style={{
                    fontSize: 16,
                    color: "#94a3b8",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    lineHeight: 1.5,
                    marginBottom: 20,
                    flex: 1,
                  }}
                >
                  {project.description}
                </div>

                {/* Tech stack */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  {project.tech.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      style={{
                        fontSize: 12,
                        color: "#22d3ee",
                        backgroundColor: "rgba(34, 211, 238, 0.1)",
                        padding: "6px 12px",
                        borderRadius: 20,
                        border: "1px solid rgba(34, 211, 238, 0.2)",
                        fontFamily: "system-ui, -apple-system, sans-serif",
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
