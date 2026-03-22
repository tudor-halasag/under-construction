import { ShaderGradient, ShaderGradientCanvas } from 'shadergradient'
import './App.css'

export default function App() {
  return (
    <>
      {/* ── Shader background ── */}
      <ShaderGradientCanvas
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <ShaderGradient
          animate="on"
          axesHelper="off"
          brightness={1}
          cAzimuthAngle={180}
          cDistance={2.8}
          cPolarAngle={80}
          cameraZoom={9.1}
          color1="#000000"
          color2="#8d7dca"
          color3="#212121"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          fov={45}
          frameRate={10}
          gizmoHelper="hide"
          grain="off"
          lightType="3d"
          pixelDensity={1}
          positionX={0}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
          shader="defaults"
          type="waterPlane"
          uAmplitude={0}
          uDensity={1.5}
          uFrequency={0}
          uSpeed={0.3}
          uStrength={1.5}
          uTime={8}
          wireframe={false}
        />
      </ShaderGradientCanvas>

      {/* ── UI layer ── */}
      <div className="layout">
        <header className="header">
          <img src="/tahlogo.svg" alt="Logo" className="logo" />
        </header>

        <main className="main">
          <h1 className="coming-soon">Coming Soon!</h1>
          <p className="subtitle">We're sorry for the inconvenience!</p>
        </main>
      </div>
    </>
  )
}
