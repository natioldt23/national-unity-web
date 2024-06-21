import { LanguageContext } from "@/App";
import { useContext } from "react";

const FaqPremium = () => {
  const { lang } = useContext(LanguageContext)

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

  const faqDataEng = [
    {
      question: "What is Premium Coverage?",
      answer:
        `
        It is a product to increase the liability coverage in the United States for those drivers who wish to extend the coverage of their primary tourist policy (i.e. with a stay of less than 28 consecutive days) of CR for the USA.
        `,
    },
    {
      question: "How does Premium Coverage work?",
      answer:
        "It is excess coverage, i.e., it applies after the amount of coverage under your primary USA CR policy has been fully used.",
    },
    {
      question: "Is it required to have a current liability policy?",
      answer:
        `
        Yes, a valid U.S. liability policy is required, as Premium Coverage is coverage in excess of the amount covered by the primary policy.
        `,
    },
    {
      question:
        "How much coverage does this product provide?",
      answer:
        `
        We offer excess coverages of 300,000, 200,000, and 100,000 USD.
        `,
    },
    {
      question: "Who is the Premium Coverage for?",
      answer:
        `
        It is for those who want to be more protected by extending the amount of their U.S. Liability coverage.
        `,
    },
    {
      question: "What is Plus Assistance?",
      answer:
        `        
        It is a protection that complements your need for safe travel in the United States and Canada: 
        Medical expenses due to accident or illness, 
        Car rental in case of theft, breakdown or accident, 
        Hotel for convalescence for a maximum of $90 USD up to 3 consecutive days, 
        Repatriation in case of death
        `,
    },
    {
      question: "How does auto liability insurance work in the United States?",
      answer:
        `
        In the event of being involved in an accident and being responsible for the damages caused to a third party, National Unity's liability insurance policy will 
        third party, National Unity's liability insurance policy will cover damages up to a maximum amount of the insured sum purchased. 
        up to a maximum amount of the sum insured purchased. 
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
