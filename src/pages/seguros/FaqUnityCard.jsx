const FaqPremium = () => {
  const faqData = [
    {
      question: "¿Cómo funciona el seguro de Unity Card?",
      answer:
        `
        Compra tu seguro Unity Card en uno de nuestros establecimientos autorizados y actívala por 
        internet o teléfono.
        `,
    },
    {
      question: "¿Cómo puedo hacer válida mi cobertura?",
      answer:
        "La cobertura de tu póliza es válida dentro del periodo contratado, después de haber sido pagada, 30 minutos después de ser activada.",
    },
    {
      question: "¿Dónde puedo activar mi póliza?",
      answer:
        `
        Puedes activar tu póliza escaneando el QR impreso en la tarjeta, en nuestra página web www.unitycard.com o bien llamando al: 800 062 0400 (México) o al 1800 401 0929 (USA).
        `,
    },
    {
      question:
        "¿Cuáles son los datos que necesito para activar mi póliza?",
      answer:
        `
        Ten a la mano tu código de acceso que encuentras en tu tarjeta, los datos de tu vehículo, el
        nombre completo del conductor , tú teléfono de contacto y un correo electrónico. 
        
        Código de Acceso (impreso en tu tarjeta), 
        Nombre completo del conductor del vehículo, 
        Teléfono de Contacto (10 dígitos), 
        Placas del Vehículo, 
        Año del Vehículo, 
        Serie del Vehículo, 
        Marca del Vehículo, 
        Modelo del Vehículo,  
        Correo electrónico, 
        `,
    },
    {
      question: "¿Cuáles son los pasos para activar mi tarjeta?",
      answer:
        `
          Descubre el código de acceso, que está impreso en tu tarjeta Unity Card.
          Abre en internet la página de activación o llama al 8000620400.
          Captura los datos requeridos.
          Listo, puedes descargar tu póliza al momento o bien se te enviará al correo
          registrado dentro de los próximos 30 minutos. Si la activación es por teléfono, te
          invitamos a descargar tu póliza en el módulo de consulta en www.unitycard.com
        `,
    },
    {
      question: "¿Qué tengo que saber antes de comprar la Unity Card?",
      answer:
        `        
        Esta póliza es de Turista y no se podrá permanecer más de 28 días consecutivos en Estados Unidos. 
        La cobertura no es válida para vehículos comerciales. 
        Solo cubre personas con residencia permanente en la República Mexicana. 
        El conductor deberá tener entre 21 y 75 años de edad y tener licencia mexicana de conducir vigente. 
        Sólo cubre autos y pick-ups de uso particular con placas mexicanas o fronterizas. 
        No aplica para vehículos de más de 9 pasajeros ni para remolques. 
        `,
    },
    {
      question: "¿Qué obtengo al comprar una tarjeta de Unity Card?",
      answer:
        `
        Una cobertura de Responsabilidad Civil (RC) o daños a terceros, dividida para lesiones corporales, accidentes y daños materiales.
        `,
    },
    {
      question: "¿Qué incluye la asistencia en el camino en mi póliza de Unity Card?",
      answer:
        `
        Servicio de Grúa, hasta $100 USD. 
        Cambio de neumático por ponchadura. 
        Carga rápida de batería. 
        Reposición de líquidos: gasolina, agua, aceite. 
        Servicio de cerrajería. 
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
