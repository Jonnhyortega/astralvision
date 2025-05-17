import { PubliWrapper } from "./PublicidadStyles";
export const Publicidad = () => {
  return (
    <PubliWrapper>
      <h3>Impulsa tu negocio</h3>
      <span>
        Lleva tu marca al siguiente nivel con estrategias publicitarias y una
        página web diseñada para destacar. Creamos sitios webs modernos,
        optimizados y funcionales que reflejan la identidad de tu negocio,
        mientras desarrollamos campañas publicitarias efectivas en redes
        sociales para atraer a tu público objetivo.{" "}
        <strong>
          ¡Desde la creación hasta la conversión, te ayudamos a transformar
          clics en clientes!
        </strong>
      </span>
      <button
        onClick={() => {
          window.open("https://wa.link/zbxw90", "_blank");
        }}
      >
        Cotizar sitio web
      </button>
    </PubliWrapper>
  );
};
export default Publicidad;
