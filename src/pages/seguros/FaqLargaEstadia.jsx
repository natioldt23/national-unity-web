const FaqLargaEstadia = () => {
  const faqData = [
    {
      question: "¿Es obligatorio contratar un seguro de auto en Estados Unidos?",
      answer:
        "En Estados Unidos y Canadá es obligatorio contar con un Seguro de Responsabilidad Civil para Autos con placas mexicanas. El Seguro de Auto Turista es un requisito legal para los vehículos con placas turistas que transitan por calles y carreteras en Estados Unidos y Canadá.",
    },
    {
      question: "¿Qué es un seguro de Larga Estadía?",
      answer:
        "Es un seguro contra daños a terceros para un auto con placas mexicanas que conduzca en Estados Unidos por más de 28 días consecutivos.",
    },
    {
      question: "¿Qué es un Seguro para daños a terceros?",
      answer:
        "La cobertura de Responsabilidad Civil es un seguro que cubre los daños ocasionados a un tercero, pero no a los daños del asegurado.",
    },
    {
      question:
        "¿Para quién es la cobertura de Larga Estadía?",
      answer:
        "Esta cobertura es para cualquier persona (estudiante, trabajador o turista) con auto mexicano que busque transitar en Estados Unidos por más de 28 días consecutivos.",
    },
    /*{
      question: "¿Cómo asegurar un auto en Estados Unidos?",
      answer:
        "Adquiere una póliza de seguros de responsabilidad civil de National Unity a través de un agente de seguros o haciendo clic aquí.",
    },*/
    {
      question: "¿Qué otros beneficios incluye?",
      answer:
        `
        El seguro incluye beneficios de:

        Gastos médicos a los ocupantes del vehículo asegurado, 
        Asistencia en el camino en caso de tener un incidente, 
        Asistencia legal en caso de necesitarla a causa de un accidente.
        `,
    },
    {
      question: "¿Qué límites ofrecen para esta cobertura?",
      answer:
       `
       100,000 LUC: 
        Daños a personas y bienes ($100,000 USD por evento),
       30/60/25 SPLIT:  
       Daños a personas ($30,000 USD por persona / $60,000 USD por evento).
       Daños a bienes ($25,000 USD por persona)
       `,
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

export default FaqLargaEstadia;
