const FaqCamion = () => {
  const faqData = [
    {
      question: "¿Qué coberturas ofrecen?",
      answer:
        "En Estados Unidos y Canadá es obligatorio contar con un Seguro de Responsabilidad Civil para Autos con placas mexicanas. El Seguro de Auto Turista es un requisito legal para los vehículos con placas turistas que transitan por calles y carreteras en Estados Unidos y Canadá.",
    },
    {
      question: "¿Qué es la cobertura de Responsabilidad Civil?",
      answer:
        "Cubre los daños que el asegurado cause a un tercero ya sea bienes materiales o personas.",
    },
    {
      question: "¿Qué es la cobertura Cargo?",
      answer:
        "El seguro de auto turista o extranjero es el seguro que cubre la responsabilidad civil de cualquier auto mexicano o de cualquier nacionalidad diferente a la de Estados Unidos y/o Canadá. Este documento es obligatorio para poder circular en ambos países.",
    },
    {
      question:
        "¿Qué es la cobertura Trailer Interchange ?",
      answer:
        "En caso de verse involucrado en un siniestro y resultar responsable de los daños ocasionados a un tercero, la póliza de seguro de responsabilidad civil de National Unity cubrirá los daños hasta por un monto máximo de la suma asegurada adquirida.",
    },
    {
      question: "¿Cómo asegurar un auto en Estados Unidos?",
      answer:
        "Adquiere una póliza de seguros de responsabilidad civil de National Unity a través de un agente de seguros o haciendo clic aquí.",
    },
    {
      question: "¿Cómo asegurar un auto en Estados Unidos?",
      answer:
        "El costo del seguro es variable de acuerdo a la vigencia, cobertura, y a las características individuales del conductor o conductores.",
    },
    {
      question: "¿Qué es la cobertura General Liability?",
      answer:
        "Es un documento que garantiza la cobertura contratada y por la cual una compañía aseguradora se compromete con su asegurado.",
    },
    {
      question: "¿Ofrecen cobertura para camiones con carga Haz-mat?",
      answer:
        "Es un documento que garantiza la cobertura contratada y por la cual una compañía aseguradora se compromete con su asegurado.Sí, tenemos cobertura para Haz-mat y non Haz-mat.",
    },
    {
      question: "¿Qué es Trucker Plus?",
      answer:
        "Es un documento que garantiza la cobertura contratada y por la cual una compañía aseguradora se compromete con su asegurado.",
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
              <p className="fw-500">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqCamion;
