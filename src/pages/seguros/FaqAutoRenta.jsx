const FaqAutoRenta = () => {
  const faqData = [
    {
      question: "¿Cómo púedo ahorrar al contratar este seguro?",
      answer:
        "Depende del Estado donde se renta se puede ahorrar hasta el 40%.",
    },
    {
      question: "¿Qué es un seguro contra daños a tercero?",
      answer:
        "Un seguro contra daños a terceros (Responsabilidad Civil) es un seguro que cubre los daños ocasionados a un tercero, pero no a los daños del asegurado.",
    },
    {
      question: "¿Necesito los datos del auto rentado?",
      answer:
        "No se necesitan los datos del auto rentado ya que con los datos del auto propio mexicano se hace la extensión del seguro de este al auto rentado.",
    },
    {
      question:
        "¿Me cubre daños a mi propio Auto o al Auto Rentado?",
      answer:
        `
          Este seguro no te cubre al Auto Mexicano y tampoco al Auto rentado.

           Solamente cubre los daños a terceros ocasionados por el auto rentado en Estados Unidos.
        `,
    },
    {
      question: "¿Qué opciones tengo para cubrir los daños al auto rentado?",
      answer:
        "El auto rentado se puede asegurar con la compañía de renta, o verificar si su tarjeta de crédito cuenta con ese beneficio, en cuyo caso pueden declinar/cancelar la cobertura amplia de la agencia de renta.",
    },
    {
      question: "¿Qué cobertura me están ofreciendo?",
      answer:
        `
        Ofrecemos una cobertura de Responsabilidad Civil o daños a terceros con Límite Único Combinado (LUC), por evento en daños a bienes y personas. 
        Esta cobertura puede utilizar hasta $100,000 USD LUC por evento. 
        Esta cobertura es mayor al límite mínimo requerido por todos los estados de USA.
        `,
    },
    {
      question: "¿Cuál opción de seguro debo cancelar al rentar el auto?",
      answer:
        `
        Se debe cancelar ya sea en línea o en el mostrador la opción de seguro contra daños a terceros, normalmente llamado Supplemental Liability Protection (SLP) o Liability Insurance Supplement (LIS). 
        Al cancelarlo y contratar con nosotros ya tendrá un ahorro del 20% o 40% en esta protección.
        `,
    },
    {
      question: "¿Qué es SLP y LIS?",
      answer:
        `
        SLP es el abreviado de Supplemental Liability Protection y LIS de Liability Insurance Supplement.  
        Son dos maneras de nombrar el seguro contra daños a terceros al rentar un auto en USA.
        `,
    },
    {
      question: "¿Cuántos conductores pueden manejar para que tu seguro sea válido?",
      answer:
        `
        Pueden manejar los conductores que se registren durante el proceso de compra con un máximo de 3 conductores.
        `,
    },
    {
      question: "¿A partir de qué edad del conductor es válido el seguro?",
      answer:
        `
        La edad mínima del conductor debe ser de 25 años.
        `,
    },
    {
      question: "¿Tengo que imprimir la póliza o ID Card?",
      answer:
        `
        No se requiere imprimir los documentos para que sea válido el seguro. 
        Al comprar podrá descargar los documentos (Póliza y ID Card) y también se le enviará a través del email que registre al pagar.
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

export default FaqAutoRenta;
