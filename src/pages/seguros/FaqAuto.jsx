import { LanguageContext } from "@/App";
import { useContext } from "react";

const FaqAuto = () => {
  const { lang } = useContext(LanguageContext)

  const faqData = [
    {
      question: "¿Es obligatorio contratar un seguro de auto en Estados Unidos?",
      answer:
        "En Estados Unidos y Canadá es obligatorio contar con un Seguro de Responsabilidad Civil para Autos con placas mexicanas. El Seguro de Auto Turista es un requisito legal para los vehículos con placas turistas que transitan por calles y carreteras en Estados Unidos y Canadá.",
    },
    {
      question: "¿Cuáles son los tipos de seguros para autos que circulan en Estados Unidos?",
      answer:
        "En National Unity contamos con diferentes alternativas de coberturas de responsabilidad civil.",
    },
    {
      question: "¿Qué es el Seguro de Auto Extranjero?",
      answer:
        "El seguro de auto turista o extranjero es el seguro que cubre la responsabilidad civil de cualquier auto mexicano o de cualquier nacionalidad diferente a la de Estados Unidos y/o Canadá. Este documento es obligatorio para poder circular en ambos países.",
    },
    {
      question:
        "¿Cómo funciona el seguro de Responsabilidad Civil para autos en Estados Unidos?",
      answer:
        "En caso de verse involucrado en un siniestro y resultar responsable de los daños ocasionados a un tercero, la póliza de seguro de responsabilidad civil de National Unity cubrirá los daños hasta por un monto máximo de la suma asegurada adquirida.",
    },
    /*{
      question: "¿Cómo asegurar un auto en Estados Unidos?",
      answer:
        "Adquiere una póliza de seguros de responsabilidad civil de National Unity a través de un agente de seguros o haciendo clic aquí.",
    },*/
    {
      question: "¿Cuánto cuesta un seguro de auto en Estados Unidos?",
      answer:
        "El costo del seguro es variable de acuerdo a la vigencia, cobertura, y a las características individuales del conductor o conductores.",
    },
    {
      question: "¿Qué es una póliza de seguros?",
      answer:
        "Es un documento que garantiza la cobertura contratada y por la cual una compañía aseguradora se compromete con su asegurado.",
    },
  ];

  const faqDataEng = [
    {
      question: "Is it mandatory to purchase auto insurance in the United States?",
      answer:
        "In the United States and Canada it is mandatory to have Liability Insurance for vehicles with Mexican license plates. Tourist Auto Insurance is a legal requirement for vehicles with tourist plates that travel on streets and highways in the United States and Canada.",
    },
    {
      question: "What are the types of auto insurance in the United States?",
      answer:
        "At National Unity we have different liability coverage alternatives.",
    },
    {
      question: "What is Foreign Auto Insurance?",
      answer:
        "The tourist or foreign car insurance is the insurance that covers the civil liability of any Mexican car or of any nationality other than that of the United States and/or Canada. This document is mandatory to be able to circulate in both countries.",
    },
    {
      question:
        "How does auto liability insurance work in the United States?",
      answer:
        "In the event of being involved in a loss and being liable for damages caused to a third party, National Unity's liability insurance policy will cover damages up to a maximum amount of the sum insured purchased.",
    },
    /*{
      question: "¿Cómo asegurar un auto en Estados Unidos?",
      answer:
        "Adquiere una póliza de seguros de responsabilidad civil de National Unity a través de un agente de seguros o haciendo clic aquí.",
    },*/
    {
      question: "How much does auto insurance cost in the United States?",
      answer:
        "The cost of insurance varies according to the term, coverage, and the individual characteristics of the driver(s).",
    },
    {
      question: "What is an insurance policy?",
      answer:
        "It is a document that guarantees the contracted coverage and by which an insurance company commits itself to its insured.",
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

export default FaqAuto;
