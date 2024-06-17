const FaqCamion = () => {
  const faqData = [
    {
      question: "¿Qué coberturas ofrecen?",
      answer:
        `
          Responsabilidad Civil, 
          Cargo, 
          Trailer Interchange, 
          General Liability
        `,
    },
    {
      question: "¿Qué es la cobertura de Responsabilidad Civil?",
      answer:
        "Cubre los daños que el asegurado cause a un tercero ya sea bienes materiales o personas.",
    },
    {
      question: "¿Qué es la cobertura Cargo?",
      answer:
        `
        Esta cobertura es necesaria para proteger al transportista en caso de pérdida o daños a la carga (mercancía), la póliza incluye un límite máximo por unidad. Los límites que se ofrecen son de $25,000 hasta los $100,000 dls. En caso de requerir una cobertura mayor, deberá solicitar su aprobación al departamento de suscripción. El precio de esta cobertura depende principalmente del tipo de carga (mercancía) que transportan.

        Esta cobertura es muy usual para entrar a:

        Ferrocarril, 
        Puertos Marítimos.
        `,
    },
    {
      question:
        "¿Qué es la cobertura Trailer Interchange?",
      answer:
        `
        Es una cobertura de Responsabilidad Civil para pérdidas o daños en cajas que no son propiedad del asegurado y solo están bajo su responsabilidad temporal mientras son transportadas. La cobertura es necesaria para cumplir con los requisitos del UIIA al entrar al ferrocarril o para cumplir con los requerimientos de la compañía a quien nuestro cliente le transporta cajas o equipos. Ejemplos:

        Santa Fe Railroad, 
        Union Paciﬁc, 
        Burlington Northern, 
        Kansas Southern, 
        Puerto marítimo.
        `,
    },
    {
      question: "¿Qué es la cobertura General Liability?",
      answer:
        `
        Cobertura de responsabilidad civil para los daños que el asegurado (vehículo comercial, chofer, cualquier representante del asegurado, etc.) ocasione en propiedad, local o terreno del negocio de su cliente, causados por negligencia, acción u omisión.

        La cobertura es necesaria para cumplir con los requisitos del UIIA al entrar al ferrocarril tales como:
        
        Santa Fe Railroad, 
        Union Paciﬁc, 
        Burlington Northern, 
        Kansas Southern.
        `,
    },
    {
      question: "¿Ofrecen cobertura para camiones con carga Haz-mat?",
      answer:
        "Sí, tenemos cobertura para Haz-mat y non Haz-mat.",
    },
    {
      question: "¿Qué es Trucker Plus?",
      answer:
        `
        Asistencia médica al conductor del vehículo asegurado. 

        Incluye:
        
        Asistencia médica por accidente o enfermedad: USD$25,000, 
        Asistencia médica COVID hasta los 65 años: Incluido, 
        Repatriación de restos: USD$10,000, 
        Medicamentos por hospitalización: Incluido, 
        Lugar de Cobertura: USA.
        `,
    },
    {
      question: "¿Cómo cotizo un seguro con National Unity?",
      answer:
        "Presione “Cotiza en Línea” y llene el formulario.",
    },
  ];

  return (
    <div className="accordion accordion-style-two" id="accordionOne" data-aos="fade-up">

      {faqData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse pt-15"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p className="fw-500">
                {faq.answer}
                <br />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqCamion;
