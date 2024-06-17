const FaqMoto = () => {
  const faqData = [
    {
      question: "¿Qué es un seguro contra daños a terceros?",
      answer:
        "La cobertura de Responsabilidad Civil es un seguro que cubre los daños ocasionados a un tercero, pero no a los daños del asegurado.",
    },
    {
      question: "¿Qué cobertura ofrecen para motocicletas?",
      answer:
        "Ofrecemos coberturas de Responsabilidad Civil que cubre el monto mínimo requerido de cada estado en Estados Unidos.",
    },
    {
      question: "¿Cuál es la edad mínima para estar cubierto en una motocicleta?",
      answer:
        "Se requiere una licencia válida y vigente de conducir. Hay extra prima para conductores menores de 21 años y mayores de 75 años.",
    },
    {
      question:
        "¿Cuber el pasajero de la motocicleta?",
      answer:
        "No se cubre los gastos médicos del pasajero en la motocicleta.",
    },
    /*{
      question: "¿Cómo asegurar un auto en Estados Unidos?",
      answer:
        "Adquiere una póliza de seguros de responsabilidad civil de National Unity a través de un agente de seguros o haciendo clic aquí.",
    },*/
    {
      question: "¿Hasta cuántos días de vigencia ofrecen cobertura?",
      answer:
        "Ofrecemos desde 1 día hasta 1 año de cobertura, tomando en cuenta que no se puede transitar en Estados Unidos por más de 28 días consecutivos.",
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

export default FaqMoto;
