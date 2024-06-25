import { LanguageContext } from "@/App";
import { useContext } from "react";

const FaqLargaEstadia = () => {
  const { lang } = useContext(LanguageContext)

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

  const faqDataEng = [
    {
      question: "Is it mandatory to purchase auto insurance in the United States?",
      answer:
        "In the United States and Canada it is mandatory to have Liability Insurance for vehicles with Mexican license plates. Tourist Auto Insurance is a legal requirement for vehicles with tourist plates that travel on streets and highways in the United States and Canada.",
    },
    {
      question: "What is Long Term Care insurance?",
      answer:
        "It is an insurance against third party damages for a car with Mexican plates driving in the United States for more than 28 consecutive days.",
    },
    {
      question: "What is a Third Party Liability Insurance?",
      answer:
        "The Civil Liability coverage is an insurance that covers the damages caused to a third party, but not the insured's own damages.",
    },
    {
      question:
        "For whom is the Long Term coverage provided?",
      answer:
        "This coverage is for any person (student, worker or tourist) with a Mexican car that seeks to transit in the United States for more than 28 consecutive days.",
    },
    /*{
      question: "¿Cómo asegurar un auto en Estados Unidos?",
      answer:
        "Adquiere una póliza de seguros de responsabilidad civil de National Unity a través de un agente de seguros o haciendo clic aquí.",
    },*/
    {
      question: "What other benefits does it include?",
      answer:
        `
        The insurance includes benefits for:

        Medical expenses to the occupants of the insured vehicle, 
        Roadside assistance in case of an incident, 
        Legal assistance in case of need due to an accident.
        `,
    },
    {
      question: "What limits are offered for this coverage?",
      answer:
       `
       100,000 LUC: 
        Damage to persons and property ($100,000 USD per event),
       30/60/25 SPLIT:  
       Damage to persons ($30,000 USD per person / $60,000 USD per event).
       Damage to property ($25,000 USD per person).
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

export default FaqLargaEstadia;
