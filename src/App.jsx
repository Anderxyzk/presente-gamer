import { useState, useEffect } from "react";

const PIXEL_FONT = "'Press Start 2P', monospace";
const ENCHANT_FONT = "'VT323', monospace";

const C = {
  bg:        "#1a0a0e",
  bgCard:    "#2a0f18",
  bgDeep:    "#200c14",
  red:       "#e8324a",
  redLight:  "#ff6b80",
  pinkDark:  "#c2185b",
  pinkMid:   "#f06292",
  pinkLight: "#ffc1cc",
  white:     "#fff5f7",
  border:    "#7a1030",
  text:      "#ffe0e8",
  textDim:   "#c07080",
};

// ─── PIXEL ART SVG ICONS ────────────────────────────────────────────

// Coração pixel
const PixelHeart = ({ size = 16, color = "#e8324a" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16"
    style={{ imageRendering: "pixelated", display: "block", flexShrink: 0 }}>
    <rect x="2" y="4" width="2" height="2" fill={color}/>
    <rect x="4" y="2" width="2" height="2" fill={color}/>
    <rect x="6" y="2" width="2" height="2" fill={color}/>
    <rect x="8" y="2" width="2" height="2" fill={color}/>
    <rect x="10" y="2" width="2" height="2" fill={color}/>
    <rect x="12" y="4" width="2" height="2" fill={color}/>
    <rect x="2" y="6" width="2" height="2" fill={color}/>
    <rect x="4" y="4" width="2" height="2" fill={color}/>
    <rect x="6" y="4" width="2" height="2" fill={color}/>
    <rect x="8" y="4" width="2" height="2" fill={color}/>
    <rect x="10" y="4" width="2" height="2" fill={color}/>
    <rect x="12" y="6" width="2" height="2" fill={color}/>
    <rect x="4" y="6" width="2" height="2" fill={color}/>
    <rect x="6" y="6" width="2" height="2" fill={color}/>
    <rect x="8" y="6" width="2" height="2" fill={color}/>
    <rect x="10" y="6" width="2" height="2" fill={color}/>
    <rect x="4" y="8" width="2" height="2" fill={color}/>
    <rect x="6" y="8" width="2" height="2" fill={color}/>
    <rect x="8" y="8" width="2" height="2" fill={color}/>
    <rect x="10" y="8" width="2" height="2" fill={color}/>
    <rect x="6" y="10" width="2" height="2" fill={color}/>
    <rect x="8" y="10" width="2" height="2" fill={color}/>
    <rect x="8" y="12" width="2" height="2" fill={color}/>
  </svg>
);

// Flor / Estrela pixel (partícula)
const PixelFlower = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16"
    style={{ imageRendering: "pixelated", display: "block" }}>
    {/* pétalas */}
    <rect x="6" y="0" width="4" height="2" fill="#f06292"/>
    <rect x="6" y="14" width="4" height="2" fill="#f06292"/>
    <rect x="0" y="6" width="2" height="4" fill="#f06292"/>
    <rect x="14" y="6" width="2" height="4" fill="#f06292"/>
    <rect x="2" y="2" width="2" height="2" fill="#ffc1cc"/>
    <rect x="12" y="2" width="2" height="2" fill="#ffc1cc"/>
    <rect x="2" y="12" width="2" height="2" fill="#ffc1cc"/>
    <rect x="12" y="12" width="2" height="2" fill="#ffc1cc"/>
    {/* centro */}
    <rect x="6" y="4" width="4" height="8" fill="#fff5f7"/>
    <rect x="4" y="6" width="8" height="4" fill="#fff5f7"/>
    <rect x="6" y="6" width="4" height="4" fill="#f8bbd0"/>
  </svg>
);

// Estrela pixel (brilho)
const PixelStar = ({ size = 16, color = "#ffc1cc" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16"
    style={{ imageRendering: "pixelated", display: "block" }}>
    <rect x="6" y="0" width="4" height="2" fill={color}/>
    <rect x="6" y="14" width="4" height="2" fill={color}/>
    <rect x="0" y="6" width="2" height="4" fill={color}/>
    <rect x="14" y="6" width="2" height="4" fill={color}/>
    <rect x="2" y="2" width="2" height="2" fill={color}/>
    <rect x="12" y="2" width="2" height="2" fill={color}/>
    <rect x="2" y="12" width="2" height="2" fill={color}/>
    <rect x="12" y="12" width="2" height="2" fill={color}/>
    <rect x="4" y="4" width="8" height="8" fill={color}/>
  </svg>
);

// Rosa pixel
const PixelRose = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16"
    style={{ imageRendering: "pixelated", display: "block" }}>
    {/* caule */}
    <rect x="7" y="11" width="2" height="5" fill="#4a7c3f"/>
    <rect x="5" y="13" width="2" height="2" fill="#4a7c3f"/>
    {/* folha */}
    <rect x="4" y="12" width="3" height="2" fill="#5a9e50"/>
    {/* pétalas externas */}
    <rect x="4" y="4" width="2" height="2" fill="#c2185b"/>
    <rect x="10" y="4" width="2" height="2" fill="#c2185b"/>
    <rect x="3" y="6" width="2" height="4" fill="#e8324a"/>
    <rect x="11" y="6" width="2" height="4" fill="#e8324a"/>
    <rect x="4" y="10" width="3" height="2" fill="#e8324a"/>
    <rect x="9" y="10" width="3" height="2" fill="#e8324a"/>
    {/* pétalas internas */}
    <rect x="5" y="3" width="6" height="3" fill="#f06292"/>
    <rect x="4" y="5" width="8" height="5" fill="#f06292"/>
    {/* centro */}
    <rect x="6" y="4" width="4" height="4" fill="#ffc1cc"/>
    <rect x="7" y="3" width="2" height="2" fill="#fff5f7"/>
  </svg>
);

// Carta / envelope pixel
const PixelEnvelope = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16"
    style={{ imageRendering: "pixelated", display: "block" }}>
    {/* corpo */}
    <rect x="1" y="4" width="14" height="10" fill="#c2185b"/>
    {/* borda */}
    <rect x="1" y="4" width="14" height="1" fill="#7a1030"/>
    <rect x="1" y="13" width="14" height="1" fill="#7a1030"/>
    <rect x="1" y="4" width="1" height="10" fill="#7a1030"/>
    <rect x="14" y="4" width="1" height="10" fill="#7a1030"/>
    {/* aba fechada / V */}
    <rect x="1" y="4" width="2" height="2" fill="#e8324a"/>
    <rect x="3" y="6" width="2" height="2" fill="#e8324a"/>
    <rect x="5" y="8" width="2" height="2" fill="#e8324a"/>
    <rect x="7" y="10" width="2" height="2" fill="#f06292"/>
    <rect x="9" y="8" width="2" height="2" fill="#e8324a"/>
    <rect x="11" y="6" width="2" height="2" fill="#e8324a"/>
    <rect x="13" y="4" width="2" height="2" fill="#e8324a"/>
    {/* coraçãozinho */}
    <rect x="6" y="5" width="1" height="1" fill="#fff5f7"/>
    <rect x="8" y="5" width="1" height="1" fill="#fff5f7"/>
    <rect x="5" y="6" width="1" height="1" fill="#fff5f7"/>
    <rect x="7" y="6" width="1" height="1" fill="#ffc1cc"/>
    <rect x="9" y="6" width="1" height="1" fill="#fff5f7"/>
    <rect x="6" y="7" width="2" height="1" fill="#fff5f7"/>
  </svg>
);

// Câmera de vídeo pixel
const PixelCamera = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16"
    style={{ imageRendering: "pixelated", display: "block" }}>
    {/* corpo */}
    <rect x="1" y="4" width="10" height="8" fill="#c2185b"/>
    <rect x="1" y="4" width="10" height="1" fill="#7a1030"/>
    <rect x="1" y="11" width="10" height="1" fill="#7a1030"/>
    <rect x="1" y="4" width="1" height="8" fill="#7a1030"/>
    <rect x="10" y="4" width="1" height="8" fill="#7a1030"/>
    {/* lente */}
    <rect x="3" y="6" width="4" height="4" fill="#1a0a0e"/>
    <rect x="4" y="7" width="2" height="2" fill="#f06292"/>
    {/* triângulo play */}
    <rect x="12" y="5" width="2" height="2" fill="#e8324a"/>
    <rect x="12" y="7" width="2" height="2" fill="#e8324a"/>
    <rect x="12" y="9" width="2" height="2" fill="#e8324a"/>
    <rect x="14" y="6" width="1" height="4" fill="#ffc1cc"/>
  </svg>
);

// Abraço pixel (dois braços)
const PixelHug = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16"
    style={{ imageRendering: "pixelated", display: "block" }}>
    {/* cabeça esq */}
    <rect x="1" y="1" width="4" height="4" fill="#ffc1cc"/>
    <rect x="2" y="2" width="2" height="1" fill="#c2185b"/>
    {/* cabeça dir */}
    <rect x="11" y="1" width="4" height="4" fill="#ffc1cc"/>
    <rect x="12" y="2" width="2" height="1" fill="#c2185b"/>
    {/* corpo e braços convergindo */}
    <rect x="1" y="5" width="2" height="6" fill="#e8324a"/>
    <rect x="3" y="7" width="2" height="2" fill="#e8324a"/>
    <rect x="5" y="9" width="2" height="2" fill="#e8324a"/>
    <rect x="13" y="5" width="2" height="6" fill="#e8324a"/>
    <rect x="11" y="7" width="2" height="2" fill="#e8324a"/>
    <rect x="9" y="9" width="2" height="2" fill="#e8324a"/>
    {/* coração central */}
    <rect x="6" y="6" width="2" height="2" fill="#fff5f7"/>
    <rect x="8" y="6" width="2" height="2" fill="#fff5f7"/>
    <rect x="5" y="8" width="6" height="2" fill="#fff5f7"/>
    <rect x="6" y="10" width="4" height="2" fill="#fff5f7"/>
    <rect x="7" y="12" width="2" height="1" fill="#fff5f7"/>
  </svg>
);

// Beijo pixel (lábios)
const PixelKiss = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16"
    style={{ imageRendering: "pixelated", display: "block" }}>
    {/* lábio superior */}
    <rect x="4" y="5" width="2" height="2" fill="#e8324a"/>
    <rect x="6" y="4" width="2" height="3" fill="#e8324a"/>
    <rect x="8" y="5" width="2" height="2" fill="#e8324a"/>
    <rect x="10" y="6" width="2" height="1" fill="#c2185b"/>
    <rect x="4" y="6" width="2" height="1" fill="#c2185b"/>
    {/* lábio inferior */}
    <rect x="4" y="7" width="8" height="3" fill="#f06292"/>
    <rect x="5" y="10" width="6" height="1" fill="#c2185b"/>
    {/* brilho */}
    <rect x="6" y="8" width="2" height="1" fill="#ffc1cc"/>
    {/* corações laterais */}
    <rect x="1" y="3" width="1" height="1" fill="#ffc1cc"/>
    <rect x="2" y="2" width="2" height="1" fill="#ffc1cc"/>
    <rect x="1" y="4" width="3" height="1" fill="#ffc1cc"/>
    <rect x="2" y="5" width="1" height="1" fill="#ffc1cc"/>
    <rect x="13" y="2" width="1" height="1" fill="#f06292"/>
    <rect x="12" y="3" width="3" height="1" fill="#f06292"/>
    <rect x="12" y="4" width="3" height="1" fill="#f06292"/>
    <rect x="13" y="5" width="1" height="1" fill="#f06292"/>
  </svg>
);

// Estrela cadente / sparkle pixel
const PixelSparkle = ({ size = 16, color = "#ffc1cc" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16"
    style={{ imageRendering: "pixelated", display: "block" }}>
    <rect x="7" y="0" width="2" height="16" fill={color}/>
    <rect x="0" y="7" width="16" height="2" fill={color}/>
    <rect x="3" y="3" width="2" height="2" fill={color}/>
    <rect x="11" y="3" width="2" height="2" fill={color}/>
    <rect x="3" y="11" width="2" height="2" fill={color}/>
    <rect x="11" y="11" width="2" height="2" fill={color}/>
  </svg>
);

// Bolha / brilho redondo pixel
const PixelBubble = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16"
    style={{ imageRendering: "pixelated", display: "block" }}>
    <rect x="4" y="2" width="8" height="2" fill="#ffc1cc"/>
    <rect x="2" y="4" width="12" height="8" fill="#ffc1cc"/>
    <rect x="4" y="12" width="8" height="2" fill="#ffc1cc"/>
    <rect x="4" y="3" width="3" height="2" fill="#fff5f7"/>
    <rect x="3" y="5" width="2" height="2" fill="#fff5f7"/>
  </svg>
);

// Minecraft-style pixel block
const PixelBlock = ({ color, size = 44 }) => (
  <div style={{
    width: size, height: size, flexShrink: 0,
    background: `repeating-linear-gradient(
      0deg, transparent, transparent 5px, rgba(0,0,0,0.09) 5px, rgba(0,0,0,0.09) 6px
    ), repeating-linear-gradient(
      90deg, transparent, transparent 5px, rgba(0,0,0,0.09) 5px, rgba(0,0,0,0.09) 6px
    ), ${color}`,
    border: "3px solid rgba(0,0,0,0.45)",
    boxShadow: "inset -5px -5px 0px rgba(0,0,0,0.3), inset 5px 5px 0px rgba(255,255,255,0.16)",
    imageRendering: "pixelated",
  }} />
);

// ─── PARTÍCULA (SVG pixel) ───────────────────────────────────────────
const PARTICLE_ICONS = [
  (s) => <PixelHeart size={s} color="#e8324a" />,
  (s) => <PixelHeart size={s} color="#f06292" />,
  (s) => <PixelHeart size={s} color="#ffc1cc" />,
  (s) => <PixelFlower size={s} />,
  (s) => <PixelStar size={s} color="#ffc1cc" />,
  (s) => <PixelStar size={s} color="#f06292" />,
  (s) => <PixelSparkle size={s} color="#ffc1cc" />,
  (s) => <PixelBubble size={s} />,
];

const Particle = ({ x, delay, duration, iconIdx }) => (
  <div style={{
    position: "fixed", left: `${x}%`, bottom: "-28px",
    animation: `floatUp ${duration}s ${delay}s infinite linear`,
    opacity: 0.55, pointerEvents: "none", zIndex: 0,
  }}>
    {PARTICLE_ICONS[iconIdx](14)}
  </div>
);

// ─── TYPEWRITER ──────────────────────────────────────────────────────
function useTypewriter(text, speed = 30, start = true) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!start) { setDisplayed(""); setDone(false); return; }
    setDisplayed(""); setDone(false);
    let i = 0;
    const iv = setInterval(() => {
      if (i < text.length) { setDisplayed(text.slice(0, ++i)); }
      else { setDone(true); clearInterval(iv); }
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed, start]);
  return { displayed, done };
}

const Cursor = () => (
  <span style={{ animation: "blink 1s step-end infinite", color: C.red }}>█</span>
);

// ─── HEART BAR ───────────────────────────────────────────────────────
const HeartBar = ({ value = 100, label = "Amor" }) => (
  <div style={{ width: "100%", margin: "7px 0" }}>
    <div style={{
      display: "flex", justifyContent: "space-between",
      fontFamily: PIXEL_FONT, fontSize: "6px", color: C.pinkLight, marginBottom: "4px",
    }}>
      <span>{label}</span>
      <span style={{ color: C.pinkMid }}>{value}/100</span>
    </div>
    <div style={{
      width: "100%", height: "11px", background: "#3a1020",
      border: "2px solid #5a1828", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        width: `${value}%`, height: "100%",
        background: `linear-gradient(90deg, ${C.pinkDark}, ${C.red}, ${C.pinkMid})`,
        transition: "width 1.8s ease",
        boxShadow: `0 0 10px ${C.red}80`,
      }} />
    </div>
  </div>
);

// ─── APP ─────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("intro");
  const [letterOpen, setLetterOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const [particles] = useState(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 7,
      duration: 6 + Math.random() * 9,
      iconIdx: Math.floor(Math.random() * PARTICLE_ICONS.length),
    }))
  );

  const introText = "Carregando algo especial...";
  const { displayed: introDisplayed, done: introDone } = useTypewriter(introText, 65, screen === "intro");

  const letterText = `Meu amor...

Eu sei que às vezes a vida pesa. Que tem dias que o cansaço chega antes da força, que tem momentos em que parece que tudo desaba ao redor.

Mas eu preciso que você saiba: você não está sozinha nisso. Eu estou aqui. Do seu lado, no silêncio e no barulho, no fácil e no difícil.

Você tem uma leveza que ilumina tudo ao redor, mesmo quando você mesma não consegue enxergar isso. E eu tenho o privilégio de ver essa luz todos os dias.

Não fique triste. Você merece todas as coisas boas desse mundo — e eu quero passar o resto do meu tempo te lembrando disso, um dia de cada vez.

Eu te amo mais do que consigo colocar em palavras.

— Seu amor`;

  const { displayed: letterDisplayed, done: letterDone } = useTypewriter(letterText, 20, letterOpen);

  useEffect(() => {
    if (introDone && screen === "intro") setTimeout(() => setScreen("main"), 700);
  }, [introDone, screen]);

  return (
    <div style={{
      minHeight: "100vh", width: "100%", maxWidth: "480px",
      margin: "0 auto", background: C.bg,
      fontFamily: PIXEL_FONT, position: "relative", overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323:wght@400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${C.bg}; }

        @keyframes floatUp {
          0%   { transform: translateY(0) rotate(0deg); opacity: 0.55; }
          100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
        }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15%       { transform: scale(1.3); }
          30%       { transform: scale(1); }
          45%       { transform: scale(1.18); }
          60%       { transform: scale(1); }
        }
        @keyframes blockFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes glowRed {
          0%, 100% { box-shadow: 0 0 8px ${C.red}, 0 0 18px ${C.red}40; }
          50%       { box-shadow: 0 0 20px ${C.red}, 0 0 42px ${C.red}55; }
        }
        @keyframes glowPink {
          0%, 100% { box-shadow: 0 0 8px ${C.pinkDark}, 0 0 18px ${C.pinkDark}40; }
          50%       { box-shadow: 0 0 20px ${C.pinkMid}, 0 0 42px ${C.pinkMid}55; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes introPulse {
          0%, 100% { text-shadow: 0 0 8px ${C.red}; }
          50%       { text-shadow: 0 0 22px ${C.red}, 0 0 44px ${C.red}40; }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .pixel-btn {
          font-family: 'Press Start 2P', monospace;
          cursor: pointer; border: none; outline: none;
          transition: transform 0.1s, filter 0.1s;
        }
        .pixel-btn:active { transform: scale(0.95) !important; filter: brightness(0.75); }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #200c14; }
        ::-webkit-scrollbar-thumb { background: ${C.pinkDark}; }
      `}</style>

      {/* Grid fundo */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: `linear-gradient(${C.red}07 1px, transparent 1px), linear-gradient(90deg, ${C.red}07 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }} />
      {/* Scanlines */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none",
        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",
      }} />

      {/* Partículas pixel */}
      {particles.map(p => (
        <Particle key={p.id} x={p.x} delay={p.delay} duration={p.duration} iconIdx={p.iconIdx} />
      ))}

      {/* ════════ INTRO ════════ */}
      {screen === "intro" && (
        <div style={{
          position: "fixed", inset: 0, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", zIndex: 10,
          background: C.bg, gap: "36px",
        }}>
          <div style={{ display: "flex", gap: "10px", animation: "blockFloat 2.2s ease-in-out infinite" }}>
            <PixelBlock color="#c2185b" size={42} />
            <PixelBlock color="#e8324a" size={42} />
            <PixelBlock color="#f06292" size={42} />
            <PixelBlock color="#ffc1cc" size={42} />
          </div>
          <div style={{
            fontFamily: PIXEL_FONT, fontSize: "9px", color: C.red,
            textAlign: "center", lineHeight: "2.3", padding: "0 28px",
            animation: "introPulse 2s ease-in-out infinite",
          }}>
            {introDisplayed}<Cursor />
          </div>
          {/* Corações girando */}
          <div style={{ display: "flex", gap: "12px" }}>
            {[C.red, C.pinkMid, C.pinkLight].map((c, i) => (
              <div key={i} style={{ animation: `heartbeat ${1.2 + i * 0.3}s ease-in-out infinite` }}>
                <PixelHeart size={18} color={c} />
              </div>
            ))}
          </div>
          <div style={{
            fontFamily: ENCHANT_FONT, fontSize: "20px",
            color: `${C.pinkMid}45`, letterSpacing: "4px",
          }}>
            ▓▒░ aguarde ░▒▓
          </div>
        </div>
      )}

      {/* ════════ MAIN ════════ */}
      {screen === "main" && (
        <div style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          alignItems: "center", padding: "24px 18px 48px",
          position: "relative", zIndex: 2,
          animation: "fadeIn 0.5s ease forwards",
        }}>

          {/* Header */}
          <div style={{
            width: "100%", padding: "14px 18px",
            background: `linear-gradient(135deg, #2a0f18, #3a1020)`,
            border: `3px solid ${C.red}`,
            boxShadow: `0 0 20px ${C.red}28, inset 0 0 30px ${C.red}06`,
            marginBottom: "22px", position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 0, left: "-100%", width: "50%", height: "100%",
              background: `linear-gradient(90deg, transparent, ${C.pinkLight}10, transparent)`,
              animation: "shimmer 3.5s linear infinite",
            }} />
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <div style={{ animation: "heartbeat 1.6s ease-in-out infinite" }}>
                <PixelHeart size={18} color={C.red} />
              </div>
              <span style={{ fontFamily: PIXEL_FONT, fontSize: "6px", color: C.pinkLight }}>
                para você
              </span>
              <div style={{ animation: "heartbeat 1.6s 0.35s ease-in-out infinite" }}>
                <PixelHeart size={18} color={C.pinkMid} />
              </div>
            </div>
            <div style={{
              fontFamily: ENCHANT_FONT, fontSize: "27px", color: C.white,
              lineHeight: "1.3", textShadow: `0 0 14px ${C.red}55`,
            }}>
              Não fique triste, meu amor
            </div>
          </div>

          {/* Mensagem */}
          <div style={{
            width: "100%", padding: "18px",
            background: `linear-gradient(135deg, ${C.bgCard}, ${C.bgDeep})`,
            border: `3px solid ${C.pinkDark}`,
            boxShadow: `0 0 18px ${C.pinkDark}22`,
            marginBottom: "16px",
            animation: "slideUp 0.5s 0.15s ease both",
            position: "relative",
          }}>
            {/* Cantos */}
            <div style={{ position:"absolute", top:0, left:0, width:8, height:8, background: C.pinkDark }} />
            <div style={{ position:"absolute", top:0, right:0, width:8, height:8, background: C.pinkDark }} />
            <div style={{ position:"absolute", bottom:0, left:0, width:8, height:8, background: C.pinkDark }} />
            <div style={{ position:"absolute", bottom:0, right:0, width:8, height:8, background: C.pinkDark }} />

            <p style={{ fontFamily: ENCHANT_FONT, fontSize: "21px", color: C.text, lineHeight: "1.7" }}>
              Às vezes a vida aperta, eu sei. Mas você é mais forte do que imagina — e eu estarei sempre aqui, do seu lado, em qualquer momento.
            </p>

            <div style={{
              marginTop: "14px", padding: "10px 14px",
              background: "#1a0810", border: `2px solid ${C.border}`,
              fontFamily: ENCHANT_FONT, fontSize: "19px", color: C.pinkMid,
              display: "flex", alignItems: "center", gap: "8px",
            }}>
              <PixelStar size={14} color={C.pinkLight} />
              "Você é a coisa mais bonita que aconteceu na minha vida."
              <PixelStar size={14} color={C.pinkLight} />
            </div>
          </div>

          {/* Barras de coração */}
          <div style={{
            width: "100%", padding: "16px",
            background: C.bgCard, border: `3px solid ${C.border}`,
            marginBottom: "16px",
            animation: "slideUp 0.5s 0.25s ease both",
          }}>
            <div style={{
              fontFamily: PIXEL_FONT, fontSize: "6px", color: C.pinkLight,
              marginBottom: "12px", textAlign: "center",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
            }}>
              <PixelHeart size={10} color={C.red} />
              sentimentos por você
              <PixelHeart size={10} color={C.red} />
            </div>
            <HeartBar value={100} label="Amor" />
            <HeartBar value={97}  label="Carinho" />
            <HeartBar value={100} label="Saudade" />
            <HeartBar value={95}  label="Cuidado" />
          </div>

          {/* Inventário */}
          <div style={{
            width: "100%", display: "flex", gap: "8px",
            marginBottom: "16px",
            animation: "slideUp 0.5s 0.35s ease both",
          }}>
            {[
              { Icon: PixelHug,  label: "Abraços" },
              { Icon: PixelKiss, label: "Beijos" },
              { Icon: PixelRose, label: "Rosas" },
              { Icon: PixelHeart, label: "Amor", props: { color: C.red } },
            ].map(({ Icon, label, props = {} }) => (
              <div key={label} style={{
                flex: 1, aspectRatio: "1",
                background: C.bgDeep, border: `3px solid ${C.border}`,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: "5px",
                position: "relative",
              }}>
                <Icon size={22} {...props} />
                <span style={{ fontFamily: PIXEL_FONT, fontSize: "5px", color: C.pinkLight, textAlign: "center" }}>
                  {label}
                </span>
                <span style={{
                  position: "absolute", bottom: "2px", right: "5px",
                  fontFamily: ENCHANT_FONT, fontSize: "15px", color: C.pinkMid,
                }}>∞</span>
              </div>
            ))}
          </div>

          {/* Botão Carta */}
          <button
            className="pixel-btn"
            onClick={() => setLetterOpen(true)}
            style={{
              width: "100%", padding: "16px",
              background: `linear-gradient(135deg, #3a1020, #2a0a18)`,
              border: `4px solid ${C.red}`,
              color: C.pinkLight, fontSize: "8px",
              animation: `glowRed 2.2s ease-in-out infinite, slideUp 0.5s 0.45s ease both`,
              display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
              marginBottom: "14px",
            }}
          >
            <PixelEnvelope size={22} />
            Ler a carta
            <PixelEnvelope size={22} />
          </button>

          {/* Botão Vídeo */}
          <button
            className="pixel-btn"
            onClick={() => setShowVideo(true)}
            style={{
              width: "100%", padding: "16px",
              background: `linear-gradient(135deg, #2a1028, #1a0820)`,
              border: `4px solid ${C.pinkDark}`,
              color: C.pinkLight, fontSize: "8px",
              animation: `glowPink 2.2s ease-in-out infinite, slideUp 0.5s 0.55s ease both`,
              display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
            }}
          >
            <PixelCamera size={22} />
            Assistir ao vídeo
            <PixelCamera size={22} />
          </button>

          {/* Rodapé */}
          <div style={{
            marginTop: "36px", display: "flex", alignItems: "center", gap: "8px",
            justifyContent: "center",
            animation: "slideUp 0.5s 0.65s ease both",
          }}>
            <PixelHeart size={12} color={`${C.pinkMid}50`} />
            <span style={{ fontFamily: ENCHANT_FONT, fontSize: "17px", color: `${C.pinkMid}45` }}>
              feito com todo o meu amor
            </span>
            <PixelHeart size={12} color={`${C.pinkMid}50`} />
          </div>
        </div>
      )}

      {/* ════════ CARTA ════════ */}
      {letterOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 20,
          background: "rgba(10,2,6,0.94)", display: "flex",
          flexDirection: "column", overflow: "hidden",
          animation: "fadeIn 0.3s ease",
        }}>
          <div style={{
            padding: "14px 18px", background: C.bgCard,
            borderBottom: `3px solid ${C.pinkDark}`,
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <PixelEnvelope size={18} />
              <span style={{ fontFamily: PIXEL_FONT, fontSize: "7px", color: C.pinkLight }}>
                Carta especial
              </span>
            </div>
            <button
              className="pixel-btn"
              onClick={() => setLetterOpen(false)}
              style={{
                background: "#2a0a0a", border: `2px solid ${C.red}`,
                color: C.red, fontFamily: PIXEL_FONT, fontSize: "7px",
                padding: "7px 11px",
              }}
            >
              ✕ fechar
            </button>
          </div>

          <div style={{
            flex: 1, overflowY: "auto", padding: "22px 18px",
            background: `
              radial-gradient(ellipse at top left, ${C.pinkDark}16, transparent 55%),
              radial-gradient(ellipse at bottom right, ${C.red}0e, transparent 55%),
              ${C.bg}
            `,
          }}>
            <div style={{
              background: `linear-gradient(135deg, ${C.bgCard}, ${C.bgDeep})`,
              border: `3px solid ${C.border}`,
              padding: "20px",
              boxShadow: `0 0 28px ${C.red}12, inset 0 0 20px ${C.red}04`,
            }}>
              {/* Decoração topo */}
              <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "18px" }}>
                {[C.red, C.pinkMid, C.pinkDark, C.pinkMid, C.red].map((c, i) => (
                  <div key={i} style={{ animation: `heartbeat ${1.2 + i * 0.15}s ease-in-out infinite` }}>
                    <PixelHeart size={14} color={c} />
                  </div>
                ))}
              </div>

              <div style={{
                fontFamily: ENCHANT_FONT, fontSize: "21px",
                color: C.text, lineHeight: "1.9", whiteSpace: "pre-line",
              }}>
                {letterDisplayed}
                {!letterDone && <Cursor />}
              </div>

              {letterDone && (
                <div style={{
                  marginTop: "24px", display: "flex", justifyContent: "center",
                  gap: "12px", animation: "fadeIn 0.6s ease",
                }}>
                  {[C.red, C.pinkMid, C.pinkLight, C.pinkMid, C.red].map((c, i) => (
                    <div key={i} style={{ animation: `heartbeat ${1 + i * 0.18}s ease-in-out infinite` }}>
                      <PixelHeart size={20} color={c} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ════════ VÍDEO ════════ */}
      {showVideo && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 20,
          background: "rgba(10,2,6,0.96)", display: "flex",
          flexDirection: "column", alignItems: "center", justifyContent: "center",
          animation: "fadeIn 0.3s ease", padding: "20px",
        }}>
          <div style={{
            width: "100%", maxWidth: "420px",
            border: `4px solid ${C.pinkDark}`,
            boxShadow: `0 0 32px ${C.pinkDark}50`,
            background: "#100510", overflow: "hidden",
          }}>
            <div style={{
              padding: "12px 16px", background: C.bgCard,
              borderBottom: `3px solid ${C.pinkDark}`,
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <PixelCamera size={18} />
                <span style={{ fontFamily: PIXEL_FONT, fontSize: "6px", color: C.pinkLight }}>
                  para você, meu amor
                </span>
              </div>
              <button
                className="pixel-btn"
                onClick={() => setShowVideo(false)}
                style={{
                  background: "#2a0a0a", border: `2px solid ${C.red}`,
                  color: C.red, fontFamily: PIXEL_FONT, fontSize: "7px",
                  padding: "6px 10px",
                }}
              >✕</button>
            </div>

            <div style={{
              width: "100%", aspectRatio: "16/9", background: "#0a0208",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", overflow: "hidden",
            }}>
              <video
                controls autoPlay playsInline
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src="./video.mp4"
                onError={e => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback */}
              <div style={{
                display: "none", position: "absolute", inset: 0,
                flexDirection: "column", alignItems: "center", justifyContent: "center",
                gap: "14px", background: "#0a0208",
              }}>
                <PixelCamera size={48} />
                <div style={{
                  fontFamily: PIXEL_FONT, fontSize: "7px", color: C.pinkMid,
                  textAlign: "center", padding: "0 20px", lineHeight: "2.2",
                }}>
                  Coloque o arquivo<br />"video.mp4"<br />na pasta public/
                </div>
              </div>
            </div>

            <div style={{
              padding: "12px 16px",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
            }}>
              <PixelHeart size={14} color={C.pinkMid} />
              <span style={{ fontFamily: ENCHANT_FONT, fontSize: "18px", color: C.pinkMid }}>
                um presente especial, só pra você
              </span>
              <PixelHeart size={14} color={C.pinkMid} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}