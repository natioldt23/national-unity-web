const FaqPremium = () => {
  const faqData = [
    {
      question: "¿Qué es la Cobertura Premium?",
      answer:
        `
        Es un producto para incrementar la cobertura de responsabilidad civil en Estados Unidos en aquellos 
        conductores que deseen ampliar la cobertura de su póliza primaria turista  
        (es decir con una permanencia menor a 28 días consecutivos) de RC para USA.
        `,
    },
    {
      question: "¿Cómo funciona la Cobertura Premium?",
      answer:
        "Es una cobertura de exceso, es decir, aplica después de que el monto de la cobertura de su póliza primaria de RC para USA ha sido completamente usada.",
    },
    {
      question: "¿Se requiere tener una póliza vigente de Responsabilidad Civil?",
      answer:
        `
        Sí, se requiere tener una póliza vigente de responsabilidad civil para Estados Unidos, ya que la Cobertura Premium es una cobertura en exceso al monto cubierto por la póliza primaria.
        `,
    },
    {
      question:
        "¿Cuánta cobertura tiene este producto?",
      answer:
        `
          Ofrecemos Coberturas de exceso de 300,000, 200,000, y 100,000 USD.
        `,
    },
    {
      question: "¿Para quién es la Cobertura Premium?",
      answer:
        `
        Es para aquel que busque estar más protegido ampliando el monto de su cobertura de Responsabilidad Civil para Estados Unidos.
        `,
    },
    {
      question: "¿Qué es la Asistencia Plus?",
      answer:
        `        
        Es una protección que complementa tu necesidad de viajar seguro por Estados Unidos y Canadá: 
        Gastos médicos por accidente o enfermedad, 
        Renta de auto por robo, avería o accidente, 
        Hotel por convalecencia por un máximo de $90 USD hasta 3 días consecutivos, 
        Repatriación por fallecimiento
        `,
    },
    {
      question: "¿Cómo funciona el seguro de Responsabilidad Civil para autos en Estados Unidos?",
      answer:
        `
        En caso de verse involucrado en un siniestro y resultar responsable de los daños ocasionados a un 
        tercero, la póliza de seguro de responsabilidad civil de National Unity cubrirá los daños hasta 
        por un monto máximo de la suma asegurada adquirida. 
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

export default FaqPremium;
