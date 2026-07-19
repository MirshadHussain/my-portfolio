import { Html, useProgress } from '@react-three/drei';

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-brand-cyan font-semibold">{progress.toFixed(0)}%</div>
    </Html>
  );
}
