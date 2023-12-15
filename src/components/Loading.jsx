import { ring } from "ldrs";
import '../style/Loading.css'

export const Loading = () => {
  ring.register();
  return (
    // Centrar
    <div className="Cargando">
      <l-ring
        size="70"
        stroke="5"
        bg-opacity="0"
        speed="2"
        color="#EE5953"
      ></l-ring>
    </div>
  );
};
