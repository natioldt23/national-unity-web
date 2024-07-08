import { LanguageContext } from "@/App";
import { useContext } from "react";

const FaqCamion = () => {
  const { lang } = useContext(LanguageContext)

  const faqData = [
    {
      question: "¿Qué coberturas ofrecen?",
      answer:
        `
          Responsabilidad Civil, 
          Cargo, 
          Trailer Interchange, 
          General Liability
        `,
    },
    {
      question: "¿Qué es la cobertura de Responsabilidad Civil?",
      answer:
        "Cubre los daños que el asegurado cause a un tercero ya sea bienes materiales o personas.",
    },
    {
      question: "¿Qué es la cobertura Cargo?",
      answer:
        `
        Esta cobertura es necesaria para proteger al transportista en caso de pérdida o daños a la carga (mercancía), la póliza incluye un límite máximo por unidad. Los límites que se ofrecen son de $25,000 USD hasta los $100,000 USD. En caso de requerir una cobertura mayor, deberá solicitar su aprobación al departamento de suscripción. El precio de esta cobertura depende principalmente del tipo de carga (mercancía) que transportan.

        Esta cobertura es muy usual para entrar a:

        Ferrocarril, 
        Puertos Marítimos.
        `,
    },
    {
      question:
        "¿Qué es la cobertura Trailer Interchange?",
      answer:
        `
        Es una cobertura de Responsabilidad Civil para pérdidas o daños en cajas que no son propiedad del asegurado y solo están bajo su responsabilidad temporal mientras son transportadas. La cobertura es necesaria para cumplir con los requisitos del UIIA al entrar al ferrocarril o para cumplir con los requerimientos de la compañía a quien nuestro cliente le transporta cajas o equipos. Ejemplos:

        Santa Fe Railroad, 
        Union Paciﬁc, 
        Burlington Northern, 
        Kansas Southern, 
        Puerto marítimo.
        `,
    },
    {
      question: "¿Qué es la cobertura General Liability?",
      answer:
        `
        Cobertura de responsabilidad civil para los daños que el asegurado (vehículo comercial, chofer, cualquier representante del asegurado, etc.) ocasione en propiedad, local o terreno del negocio de su cliente, causados por negligencia, acción u omisión.

        La cobertura es necesaria para cumplir con los requisitos del UIIA al entrar al ferrocarril tales como:
        
        Santa Fe Railroad, 
        Union Paciﬁc, 
        Burlington Northern, 
        Kansas Southern.
        `,
    },
    {
      question: "¿Ofrecen cobertura para camiones con carga Haz-mat?",
      answer:
        "Sí, tenemos cobertura para Haz-mat y non Haz-mat.",
    },
    {
      question: "¿Qué es Trucker Plus?",
      answer:
        `
        Asistencia médica al conductor del vehículo asegurado. 

        Incluye:
        
        Asistencia médica por accidente o enfermedad: $25,000 USD, 
        Asistencia médica COVID hasta los 65 años: Incluido, 
        Repatriación de restos: $10,000 USD, 
        Medicamentos por hospitalización: Incluido. 
        (Lugar de Cobertura: USA)
        `,
    },
    {
      question: "¿Cómo cotizo un seguro con National Unity?",
      answer:
        "Presione “Cotiza en Línea” y llene el formulario.",
    },
  ];

  const faqDataEng = [
    {
      question: "What coverages do you offer?",
      answer:
        `
          Liability, 
          Cargo, 
          Trailer Interchange, 
          General Liability
        `,
    },
    {
      question: "What is the Liability coverage?",
      answer:
        "Covers damages caused by the insured to third parties, whether property or persons.",
    },
    {
      question: "What is the Cargo coverage?",
      answer:
        `
        This coverage is necessary to protect the carrier in case of loss or damage to the cargo (merchandise), the policy includes a maximum limit per unit. The limits offered are $25,000 USD up to $100,000 USD. In case of requiring a higher coverage, you must request approval from the underwriting department. The price of this coverage depends mainly on the type of cargo (merchandise) being transported.

        This coverage is very usual to enter to:

        Railroad, 
        Sea Ports.
        `,
    },
    {
      question:
        "What is the Trailer Interchange coverage?",
      answer:
        `
        This is a Liability coverage for loss or damage to boxes that are not owned by the insured and are only under the temporary liability of the insured while being transported. Coverage is necessary to meet the requirements of the UIIA when entering the railroad or to meet the requirements of the company to whom our customer transports boxes or equipment. Examples:

        Santa Fe Railroad, 
        Union Paciﬁc, 
        Burlington Northern, 
        Kansas Southern, 
        Seaport.
        `,
    },
    {
      question: "What is the General Liability coverage?",
      answer:
        `
        Liability coverage for damage caused by the insured (commercial vehicle, driver, any representative of the insured, etc.) to property, premises or grounds of your client's business caused by negligence, act or omission.

        Coverage is necessary to meet UIIA requirements when entering the railroad such as:
        
        Santa Fe Railroad, 
        Union Paciﬁc, 
        Burlington Northern, 
        Kansas Southern.
        `,
    },
    {
      question: "Do you offer coverage for trucks with Haz-mat cargo?",
      answer:
        "Yes, we have coverage for Haz-mat and non Haz-mat.",
    },
    {
      question: "What is Trucker Plus?",
      answer:
        `
        Medical assistance to the driver of the insured vehicle. 

        Includes:
        
        Medical assistance due to accident or illness: $25,000 USD, 
        COVID medical assistance up to 65 years of age: Included, 
        Repatriation of remains: $10,000 USD, 
        Medications for hospitalization: Included.  
        (Place of Coverage: USA)
        `,
    },
    {
      question: "How do I quote insurance with National Unity?",
      answer:
        "Click 'Quote Online' and fill out the form.",
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

export default FaqCamion;
