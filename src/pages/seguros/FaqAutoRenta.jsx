import { LanguageContext } from "@/App";
import { useContext } from "react";

const FaqAutoRenta = () => {
  const { lang } = useContext(LanguageContext)

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

  const faqDataEng = [
    {
      question: "How can I save by taking this insurance?",
      answer:
        "Depending on the state where you rent, you can save up to 40%.",
    },
    {
      question: "What is a third party liability insurance?",
      answer:
        "A third party liability insurance is an insurance that covers damages caused to a third party, but not the insured's own damages.",
    },
    {
      question: "Do I need the rental car information?",
      answer:
        "The data of the rented car is not needed since with the data of the Mexican owned car the insurance of the rented car is extended to the rented car.",
    },
    {
      question:
        "Will I be covered for damages to my own car or the rental car?",
      answer:
        `
          This insurance does not cover the Mexican car or the rented car.

          It only covers damages to third parties caused by the rented car in the United States.
        `,
    },
    {
      question: "What options do I have to cover damages to the rental car?",
      answer:
        "The rental car can be insured with the rental company, or check if their credit card has that benefit, in which case they can decline/cancel the rental agency's comprehensive coverage.",
    },
    {
      question: "What coverage am I being offered?",
      answer:
        `
        We offer Third Party Liability coverage with Combined Single Limit (CUL), per event for damage to property and persons. 
        This coverage can use up to $100,000 USD LUC per occurrence. 
        This coverage is greater than the minimum limit required by all US states.
        `,
    },
    {
      question: "Which insurance option should I cancel when renting the car?",
      answer:
        `
        The third party insurance option, usually called Supplemental Liability Protection (SLP) or Liability Insurance Supplement (LIS), must be cancelled either online or at the counter. 
        By canceling it and contracting with us you will already have a saving of 20% or 40% in this protection.
        `,
    },
    {
      question: "What is SLP and LIS?",
      answer:
        `
        SLP stands for Supplemental Liability Protection and LIS for Liability Insurance Supplement.  
        These are two ways of naming the insurance against third party damages when renting a car in the USA.
        `,
    },
    {
      question: "How many drivers can drive for your insurance to be valid?",
      answer:
        `
        Drivers who register during the purchase process can drive with a maximum of 3 drivers.
        `,
    },
    {
      question: "What is the minimum age for the insurance to be valid?",
      answer:
        `
        The minimum age of the driver must be 25 years old.
        `,
    },
    {
      question: "Do I need to print the policy or ID Card?",
      answer:
        `
        It is not required to print the documents for the insurance to be valid. 
        When purchasing you will be able to download the documents (Policy and ID Card) and they will also be sent to the email address you register at checkout.
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
                <p className="fw-500">{faq.answer}</p>
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
                <p className="fw-500">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default FaqAutoRenta;
