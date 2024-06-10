const accordionItems = [
  {
    id: 1,
    title: "Carga de Pila",
    content:
      "Carga de batería para carros.",
  },
  {
    id: 2,
    title: "Ponchaduras",
    content:
      "Cambio solo si tiene llanta de refacción.",
  },
  {
    id: 3,
    title: "Reposición de líquidos",
    content:
      "No se provee marca u octanaje específicos. El costo del líquido debe ser cubierto por el asegurado.",
  },
  {
    id: 4,
    title: "Servicio de cerrajería",
    content:
      "Apertura del carro por pérdida de llaves o por estar dentro del vehículo, no se hacen duplicados de llaves.",
  },
  {
    id: 5,
    title: "Grúa",
    content:
      "Del lugar del evento al lugar más próximo donde el problema pueda solucionarse o el vehículo pueda resguardarse. Queda excluido el cruce del vehículo a territorio mexicano y el arrastre a causa de accidente.",
  },
  {
    id: 6,
    title: "Atascamiento",
    content:
      "Si el vehículo queda atascado, este puede ser liberado siempre y cuando esté en zona de tránsito normal.",
  },
];

const FaqAsistencia = () => {
  return (
    <div className="accordion accordion-style-two md-mt-60" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 1 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 1 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAsistencia;
