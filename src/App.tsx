import { useEffect, useState, type CSSProperties } from "react";

const SOURCE = "https://raw.githubusercontent.com/lifepilot-jared/super-zoos-adventure-v3/v36-character-animation-foundation/public/assets/characters/peter";
const runFrames = Array.from({ length: 12 }, (_, i) => `${SOURCE}/prototype/run/run-${String(i + 1).padStart(2, "0")}.png`);
const jumpFrames = Array.from({ length: 6 }, (_, i) => `${SOURCE}/jump-test/jump-test-${String(i + 1).padStart(2, "0")}.jpg`);
const jumpMs = [180, 210, 280, 360, 280, 220];
const jumpY = [0, -34, -92, -132, -76, 0];

type Mode = "run" | "jump";

export function App() {
  const [mode, setMode] = useState<Mode>("run");
  const [runIndex, setRunIndex] = useState(0);
  const [jumpIndex, setJumpIndex] = useState(0);
  const [queued, setQueued] = useState(false);

  useEffect(() => {
    if (mode !== "run") return;
    if (queued && runIndex === 0) {
      const id = window.setTimeout(() => {
        setQueued(false);
        setJumpIndex(0);
        setMode("jump");
      }, 115);
      return () => window.clearTimeout(id);
    }
    const id = window.setTimeout(() => setRunIndex((v) => (v + 1) % 12), 115);
    return () => window.clearTimeout(id);
  }, [mode, runIndex, queued]);

  useEffect(() => {
    if (mode !== "jump") return;
    const id = window.setTimeout(() => {
      if (jumpIndex === 5) {
        setRunIndex(1);
        setJumpIndex(0);
        setMode("run");
      } else setJumpIndex((v) => v + 1);
    }, jumpMs[jumpIndex]);
    return () => window.clearTimeout(id);
  }, [mode, jumpIndex]);

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if ((e.code === "Space" || e.code === "ArrowUp") && mode === "run") setQueued(true);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [mode]);

  let startY = 0;
  const frame = mode === "run" ? runFrames[runIndex] : jumpFrames[jumpIndex];
  const style = { "--jump-y": `${mode === "jump" ? jumpY[jumpIndex] : 0}px` } as CSSProperties;

  return (
    <main className="lab" onPointerDown={(e) => (startY = e.clientY)} onPointerUp={(e) => { if (startY - e.clientY > 28 && mode === "run") setQueued(true); }}>
      <header><strong>SUPER ZOOS MOVEMENT LAB</strong><span>{mode === "run" ? `RUN ${runIndex + 1}/12` : `JUMP ${jumpIndex + 1}/6`}{queued ? " · QUEUED" : ""}</span></header>
      <section className="scene">
        <div className="sky" />
        <div className="school">SUPER ZOOS SCHOOL</div>
        <div className="grass left" /><div className="grass right" />
        <div className="road"><i/><i/><i/></div>
        <img className={`peter ${mode}`} src={frame} style={style} alt="Spider-Boy Peter" draggable={false} />
        <div className="hurdle" />
      </section>
      <button className="jump" onClick={() => mode === "run" && setQueued(true)}>JUMP</button>
    </main>
  );
}
