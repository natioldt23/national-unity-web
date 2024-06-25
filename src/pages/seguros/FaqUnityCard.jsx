import { LanguageContext } from "@/App";
import { useContext } from "react";

const FaqPremium = () => {
  const { lang } = useContext(LanguageContext)

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

  const faqDataEng = [
    {
      question: "How does the Unity Card insurance work?",
      answer:
        `
        Buy your Unity Card insurance in one of our authorized stores and activate it online or by phone. 
        online or by phone.
        `,
    },
    {
      question: "How can I validate my coverage?",
      answer:
        "The coverage of your policy is valid within the contracted period, after having been paid, 30 minutes after being activated.",
    },
    {
      question: "Where can I activate my policy?",
      answer:
        `
        You can activate your policy by scanning the QR printed on the card, on our website www.unitycard.com or by calling: 800 062 0400 (Mexico) or 1800 401 0929 (USA).
        `,
    },
    {
      question:
        "What information do I need to activate my policy?",
      answer:
        `
        Have at hand your access code that you find on your card, your vehicle data, the driver's full name, your contact phone number and an email address.
        driver's full name, your contact phone number and an email address. 
        
        Access Code (printed on your card), 
        Full name of the driver of the vehicle, 
        Contact Phone (10 digits), 
        Vehicle license plates, 
        Vehicle Year, 
        Vehicle Serial Number, 
        Vehicle Make, 
        Vehicle Model,  
        E-mail address, 
        `,
    },
    {
      question: "What are the steps to activate my card?",
      answer:
        `
        Find out the access code, which is printed on your Unity Card.
        Open the activation page online or call 8000620400.
        Enter the required data.
        Ready, you can download your policy immediately or it will be sent to your registered email within 30 minutes.
        registered within 30 minutes. If the activation is by phone, we invite you to
        We invite you to download your policy in the consultation module at www.unitycard.com
        `,
    },
    {
      question: "What do I need to know before buying the Unity Card?",
      answer:
        `        
        This policy is a Tourist policy and no more than 28 consecutive days may be spent in the United States. 
        Coverage is not valid for commercial vehicles. 
        It only covers persons with permanent residence in the Mexican Republic. 
        The driver must be between 21 and 75 years of age and have a valid Mexican driver's license. 
        Only covers cars and pick-ups for private use with Mexican or border plates. 
        Does not apply to vehicles with more than 9 passengers or trailers. 
        `,
    },
    {
      question: "What do I get when I purchase a Unity Card?",
      answer:
        `
        A Third Party Liability (CR) coverage, divided for bodily injury, accident and property damage.
        `,
    },
    {
      question: "What does roadside assistance include in my Unity Card policy?",
      answer:
        `
        Towing service, up to $100 USD. 
        Tire change due to flat tire. 
        Fast battery charge. 
        Fluid replacement: gasoline, water, oil. 
        Locksmith service. 
        `,
    },
  ];

  return (
    <div className="accordion accordion-style-two" id="accordionOne" data-aos="fade-up">

      {
        lang === 'es' ?
        faqData.map((faq, index) => (
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
        )) :
        faqDataEng.map((faq, index) => (
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
        ))
      }
    </div>
  );
};

export default FaqPremium;
