import { useCallback, useMemo } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const options = useMemo(
    () => ({
      autoPlay: true,
      background: { color: { value: "#000" } },
      fullScreen: { enable: true, zIndex: -1 },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "trail" },
        },
        modes: {
          trail: {
            delay: 0.005,
            pauseOnStop: true,
            quantity: 5,
            particles: {
              color: {
                value: "#ff0000",
                animation: { enable: true, speed: 400, sync: true },
              },
              move: { outModes: { default: "destroy" }, speed: 2 },
              size: {
                value: { min: 1, max: 5 },
                animation: {
                  enable: true,
                  speed: 5,
                  sync: true,
                  startValue: "min",
                  destroy: "max",
                },
              },
            },
          },
        },
      },
      particles: {
        color: { value: "#00ffff" },
        links: { color: "random", distance: 100, enable: true, opacity: 1, width: 1 },
        move: { enable: true, speed: 2 },
        number: { density: { enable: true }, value: 100 },
        opacity: {
          value: { min: 0.3, max: 0.8 },
          animation: { enable: true, speed: 0.5 },
        },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 }, animation: { enable: true, speed: 3 } },
      },
    }),
    []
  );

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default ParticleBackground;
