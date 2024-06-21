import { LanguageContext } from "@/App";
import { useContext } from "react";

const FaqAsistencia = () => {
  const { lang } = useContext(LanguageContext)

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

  const accordionItemsEng = [
    {
      id: 1,
      title: "Battery charge",
      content:
        "Charging of car batteries.",
    },
    {
      id: 2,
      title: "Punctures",
      content:
        "Change only if you have a spare tire.",
    },
    {
      id: 3,
      title: "Liquid replenishment",
      content:
        "No specific brand or octane rating is provided. The cost of the liquid must be covered by the insured.",
    },
    {
      id: 4,
      title: "Locksmith service",
      content:
        "Opening of the car due to loss of keys or being inside the vehicle, no duplicate keys are made.",
    },
    {
      id: 5,
      title: "Crane",
      content:
        "From the place of the event to the nearest place where the problem can be solved or the vehicle can be sheltered. The crossing of the vehicle into Mexican territory and towing due to an accident is excluded.",
    },
    {
      id: 6,
      title: "Jamming",
      content:
        "If the vehicle gets stuck, it can be released as long as it is in a normal traffic zone.",
    },
  ];

  return (
    <div className="accordion accordion-style-two md-mt-60" id="accordionOne">
      {
        lang === 'es' ?
        accordionItems.map((item) => (
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
        )) :
        accordionItemsEng.map((item) => (
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
        )) 
      }
    </div>
  );
};

export default FaqAsistencia;
