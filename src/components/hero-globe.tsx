import { useEffect, useRef } from "react";
import {
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  Texture,
  WebGLRenderer,
} from "three";

const POINT_COUNT = 2200;
const RADIUS = 1.55;

function fibonacciSphere(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    positions[i * 3] = Math.cos(theta) * r * radius;
    positions[i * 3 + 1] = y * radius;
    positions[i * 3 + 2] = Math.sin(theta) * r * radius;
  }

  return positions;
}

function makeDotTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new Texture();

  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.35, "rgba(255,255,255,0.55)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new Texture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function readGlobeColor() {
  const color = new Color("#6f96f5");
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--globe-dot").trim();
  const match = raw.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/i);
  if (match) {
    color.setRGB(Number(match[1]) / 255, Number(match[2]) / 255, Number(match[3]) / 255);
  }
  return color;
}

export function HeroGlobe() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new Scene();
    const camera = new PerspectiveCamera(42, 1, 0.1, 20);
    camera.position.set(0, 0.55, 3.15);
    camera.lookAt(0, -0.15, 0);

    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new Float32BufferAttribute(fibonacciSphere(POINT_COUNT, RADIUS), 3));

    const material = new PointsMaterial({
      color: readGlobeColor(),
      map: makeDotTexture(),
      size: 0.028,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const points = new Points(geometry, material);
    points.rotation.x = 0.18;
    scene.add(points);

    const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    let frame = 0;
    let disposed = false;

    const resize = () => {
      if (disposed) return;
      const { clientWidth: width, clientHeight: height } = host;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      renderer.render(scene, camera);
    };

    const syncTheme = () => {
      material.color.copy(readGlobeColor());
      if (!frame) renderer.render(scene, camera);
    };

    const tick = () => {
      if (disposed) return;
      points.rotation.y += 0.0016;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(tick);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    const themeObserver = new MutationObserver(syncTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    if (!reduced) frame = window.requestAnimationFrame(tick);
    else renderer.render(scene, camera);

    return () => {
      disposed = true;
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
      themeObserver.disconnect();
      geometry.dispose();
      material.map?.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="absolute inset-0"
      aria-hidden="true"
    />
  );
}
