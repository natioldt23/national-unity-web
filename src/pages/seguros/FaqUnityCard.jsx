import { LanguageContext } from "@/App";
import { useContext } from "react";

const FaqPremium = () => {
  const { lang } = useContext(LanguageContext)

  /*const faqData = [
    {
      question: "¿Cómo funciona el seguro de Unity Card?",
      answer:
        `
        `,
    },
    {
      question: "¿Cómo puedo hacer válida mi cobertura?",
      answer: ''
    },
    {
      question: "¿Dónde puedo activar mi póliza?",
      answer:
        `
        `,
    },
    {
      question:
        "¿Cuáles son los datos que necesito para activar mi póliza?",
      answer:
        `
        Ten a la mano el código de acceso, los datos de tu vehículo así como la información del conductor.

        Datos solicitados;
        Código de acceso (impreso en tu tarjeta)
        Nombre completo del conductor del vehículo
        Teléfono de contacto (10 dígitos)
        Fecha de Nacimiento
        Placas del vehículo
        Año del vehículo
        Serie del vehículo
        Estado de Entrada
        Marca del vehículo
        Modelo del vehiculo
        Correo electrónico
        Fecha de Inicio de cobertura
        Hora de Inicio de cobertura
        `,
    },
    {
      question: "¿Cuáles son los pasos para activar mi tarjeta?",
      answer:
        `
          Descubre el código de acceso, que está impreso en tu tarjeta Unity Card.
          Abre en internet la página de activación o escanea el QR desde tu tarjeta.
          Captura los datos requeridos.
          Listo, puedes descargar tu póliza al momento o bien se te enviará al correo
          registrado dentro de los próximos 30 minutos.
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
      question: "",
      answer:
        `
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
        You can activate your policy by scanning the QR printed on the card, on our website www.unitycard.com.        
         `,
    },
    {
      question:
        "What information do I need to activate my policy?",
      answer:
        `
        Have your access code, vehicle and driver information ready.

        Data requested;
        Access code (printed on your card)
        Full name of the driver of the vehicle
        Contact phone number (10 digits)
        Date of Birth
        Vehicle license plates
        Year of vehicle
        Vehicle Serial Number
        State of Entry
        Vehicle Make
        Vehicle Model
        Email Address
        Coverage Start Date
        Coverage Start Time
        `,
    },
    {
      question: "What are the steps to activate my card?",
      answer:
        `
        Find out the access code, which is printed on your Unity Card.
        Open the activation page on the internet or scan the QR of your card.
        Enter the required data.
        Ready, you can download your policy immediately or it will be sent to your registered email within 30 minutes.
        registered within 30 minutes.
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
  ];*/

  return (
    <div className="accordion accordion-style-two" id="accordionOne" data-aos="fade-up">
      {
        lang == 'es' ?
        (
          <>
            <div className="accordion-item" key={0}>
              <div className="accordion-header" id={`heading0`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse0`}
                  aria-expanded="false"
                  aria-controls={`collapse0`}
                >
                  ¿Cómo funciona el seguro de Unity Card?
                </button>
              </div>
              <div
                id={`collapse0`}
                className="accordion-collapse collapse pt-15"
                aria-labelledby={`heading0`}
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p className="fw-500">
                    Compra tu seguro Unity Card en uno de nuestros establecimientos autorizados y activala vía online o escaneando el QR impreso en la tarjeta Unity Card.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item" key={1}>
              <div className="accordion-header" id={`heading1`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse1`}
                  aria-expanded="false"
                  aria-controls={`collapse1`}
                >
                  ¿Cómo puedo hacer válida mi cobertura?
                </button>
              </div>
              <div
                id={`collapse1`}
                className="accordion-collapse collapse pt-15"
                aria-labelledby={`heading1`}
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p className="fw-500">
                    La cobertura de tu póliza es válida dentro del periodo contratado, después de haber sido pagada, 30 minutos después de ser activada.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item" key={2}>
              <div className="accordion-header" id={`heading2`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse2`}
                  aria-expanded="false"
                  aria-controls={`collapse2`}
                >
                  ¿Dónde puedo activar mi póliza?
                </button>
              </div>
              <div
                id={`collapse2`}
                className="accordion-collapse collapse pt-15"
                aria-labelledby={`heading2`}
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p className="fw-500">
                    Puedes activar tu póliza escaneando el QR impreso en la tarjeta, en nuestra página web www.unitycard.com 
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item" key={3}>
              <div className="accordion-header" id={`heading3`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse3`}
                  aria-expanded="false"
                  aria-controls={`collapse3`}
                >
                  ¿Cuáles son los datos que necesito para activar mi póliza?
                </button>
              </div>
              <div
                id={`collapse3`}
                className="accordion-collapse collapse pt-15"
                aria-labelledby={`heading3`}
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p className="fw-500">
                  Ten a la mano el código de acceso, los datos de tu vehículo así como la información del conductor.
                    <br />
                  Datos solicitados:
                  </p>
                  <ul>
                    <li className="pb-5">
                      Código de acceso (impreso en tu tarjeta)
                    </li>
                    <li className="pb-5">
                      Nombre completo del conductor del vehículo
                    </li>
                    <li className="pb-5">
                      Teléfono de contacto (10 dígitos)
                    </li>
                    <li className="pb-5">
                      Fecha de Nacimiento
                    </li>
                    <li className="pb-5">
                      Placas del vehículo
                    </li>
                    <li className="pb-5">
                      Año del vehículo
                    </li>
                    <li className="pb-5">
                      Serie del vehículo
                    </li>
                    <li className="pb-5">
                      Estado de Entrada
                    </li>
                    <li className="pb-5">
                      Marca del vehículo
                    </li>
                    <li className="pb-5">
                      Modelo del vehiculo
                    </li>
                    <li className="pb-5">
                      Correo electrónico
                    </li>
                    <li className="pb-5">
                      Fecha de Inicio de cobertura
                    </li>
                    <li className="pb-5">
                      Hora de Inicio de cobertura
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item" key={4}>
              <div className="accordion-header" id={`heading4`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse4`}
                  aria-expanded="false"
                  aria-controls={`collapse4`}
                >
                  ¿Cuáles son los pasos para activar mi tarjeta?
                </button>
              </div>
              <div
                id={`collapse4`}
                className="accordion-collapse collapse pt-15"
                aria-labelledby={`heading4`}
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p className="fw-500">
                  </p>
                  <ul>
                    <li className="pb-5">
                      Descubre el código de acceso que está impreso en tu tarjeta Unity Card.
                    </li>
                    <li className="pb-5">
                      Ingresa a la página de activación en internet o escanear el código QR de tu tarjeta. Completa los datos solicitados
                    </li>
                    <li className="pb-5">
                      Listo, puedes descargar tu póliza al momento o bien se te enviará al correo registrado dentro de los próximos 30 minutos.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item" key={5}>
              <div className="accordion-header" id={`heading5`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse5`}
                  aria-expanded="false"
                  aria-controls={`collapse5`}
                >
                  ¿Qué tengo que saber antes de comprar la Unity Card?
                </button>
              </div>
              <div
                id={`collapse5`}
                className="accordion-collapse collapse pt-15"
                aria-labelledby={`heading5`}
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p className="fw-500">
                  </p>
                  <ul>
                    <li className="pb-5">
                      Esta póliza es de Turista y no se podrá permanecer más de 28 días consecutivos en Estados Unidos. 
                    </li>
                    <li className="pb-5">
                      La cobertura no es válida para vehículos comerciales. 
                    </li>
                    <li className="pb-5">
                      Solo cubre personas con residencia permanente en la República Mexicana. 
                    </li>
                    <li className="pb-5">
                      El conductor deberá tener entre 21 y 75 años de edad y tener licencia mexicana de conducir vigente. 
                    </li>
                    <li className="pb-5">
                      Sólo cubre autos y pick-ups de uso particular con placas mexicanas o fronterizas. 
                    </li>
                    <li className="pb-5">
                      No aplica para vehículos de más de 9 pasajeros ni para remolques. 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item" key={6}>
              <div className="accordion-header" id={`heading6`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse6`}
                  aria-expanded="false"
                  aria-controls={`collapse6`}
                >
                  ¿Qué obtengo al comprar una tarjeta de Unity Card?¿Dónde puedo activar mi póliza?
                </button>
              </div>
              <div
                id={`collapse6`}
                className="accordion-collapse collapse pt-15"
                aria-labelledby={`heading6`}
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p className="fw-500">
                    Una cobertura de Responsabilidad Civil (RC) o daños a terceros, dividida para lesiones corporales, accidentes y daños materiales.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item" key={7}>
              <div className="accordion-header" id={`heading7`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse7`}
                  aria-expanded="false"
                  aria-controls={`collapse7`}
                >
                  ¿Qué incluye la asistencia en el camino en mi póliza de Unity Card?
                </button>
              </div>
              <div
                id={`collapse7`}
                className="accordion-collapse collapse pt-15"
                aria-labelledby={`heading7`}
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p className="fw-500">
                  </p>
                  <ul>
                    <li className="pb-5">
                      Servicio de Grúa hasta $100 USD. 
                    </li>
                    <li className="pb-5">
                      Cambio de neumático por ponchadura. 
                    </li>
                    <li className="pb-5">
                      Carga rápida de batería. 
                    </li>
                    <li className="pb-5">
                      Reposición de líquidos: gasolina, agua, aceite. 
                    </li>
                    <li className="pb-5">
                      Servicio de cerrajería. 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )
        :
        (
          <>
            <div className="accordion-item" key={0}>
              <div className="accordion-header" id={`heading0`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse0`}
                  aria-expanded="false"
                  aria-controls={`collapse0`}
                >
                  How does the Unity Card insurance work?
                </button>
              </div>
              <div
                id={`collapse0`}
                className="accordion-collapse collapse pt-15"
                aria-labelledby={`heading0`}
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p className="fw-500">
                    Buy your Unity Card insurance in one of our authorized stores and activate it online or by scanning the QR printed on the Unity Card.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item" key={1}>
              <div className="accordion-header" id={`heading1`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse1`}
                  aria-expanded="false"
                  aria-controls={`collapse1`}
                >
                  How can I validate my coverage?
                </button>
              </div>
              <div
                id={`collapse1`}
                className="accordion-collapse collapse pt-15"
                aria-labelledby={`heading1`}
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p className="fw-500">
                    The coverage of your policy is valid within the contracted period, after having been paid, 30 minutes after being activated.                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item" key={2}>
              <div className="accordion-header" id={`heading2`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse2`}
                  aria-expanded="false"
                  aria-controls={`collapse2`}
                >
                  Where can I activate my policy?                
                </button>
              </div>
              <div
                id={`collapse2`}
                className="accordion-collapse collapse pt-15"
                aria-labelledby={`heading2`}
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p className="fw-500">
                    You can activate your policy by scanning the QR printed on the card, on our website 
                    <a href="www.unitycard.com">
                      www.unitycard.com
                    </a>
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item" key={3}>
              <div className="accordion-header" id={`heading3`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse3`}
                  aria-expanded="false"
                  aria-controls={`collapse3`}
                >
                  What information do I need to activate my policy?
                </button>
              </div>
              <div
                id={`collapse3`}
                className="accordion-collapse collapse pt-15"
                aria-labelledby={`heading3`}
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p className="fw-500">
                    Have your access code, vehicle and driver information ready.
                    <br />
                    Data requested:
                  </p>
                  <ul>
                    <li className="pb-5">
                      Access code (printed on your card)
                    </li>
                    <li className="pb-5">
                      Full name of the driver of the vehicle
                    </li>
                    <li className="pb-5">
                      Contact phone number (10 digits)
                    </li>
                    <li className="pb-5">
                      Date of Birth
                    </li>
                    <li className="pb-5">
                      Vehicle license plates
                    </li>
                    <li className="pb-5">
                      Year of vehicle
                    </li>
                    <li className="pb-5">
                      Vehicle Serial Number
                    </li>
                    <li className="pb-5">
                      State of Entry
                    </li>
                    <li className="pb-5">
                      Vehicle Make
                    </li>
                    <li className="pb-5">
                      Vehicle Model
                    </li>
                    <li className="pb-5">
                      Email Address
                    </li>
                    <li className="pb-5">
                      Coverage Start Date
                    </li>
                    <li className="pb-5">
                      Coverage Start Time
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item" key={4}>
              <div className="accordion-header" id={`heading4`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse4`}
                  aria-expanded="false"
                  aria-controls={`collapse4`}
                >
                  What are the steps to activate my card?
                </button>
              </div>
              <div
                id={`collapse4`}
                className="accordion-collapse collapse pt-15"
                aria-labelledby={`heading4`}
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p className="fw-500">
                  </p>
                  <ul>
                    <li className="pb-5">
                      Uncover the access code which is printed on your Unity Card.                    
                    </li>
                    <li className="pb-5">
                      Enter the activation page on the internet or scan the QR code on your card. Fill in the requested information
                    </li>
                    <li className="pb-5">
                      Ready, you can download your policy immediately or it will be sent to your registered email within the next 30 minutes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item" key={5}>
              <div className="accordion-header" id={`heading5`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse5`}
                  aria-expanded="false"
                  aria-controls={`collapse5`}
                >
                  What do I need to know before buying the Unity Card?
                </button>
              </div>
              <div
                id={`collapse5`}
                className="accordion-collapse collapse pt-15"
                aria-labelledby={`heading5`}
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p className="fw-500">
                  </p>
                  <ul>
                    <li className="pb-5">
                      This policy is a Tourist policy and no more than 28 consecutive days may be spent in the United States. 
                    </li>
                    <li className="pb-5">
                      Coverage is not valid for commercial vehicles. 
                    </li>
                    <li className="pb-5">
                      It only covers persons with permanent residence in the Mexican Republic. 
                    </li>
                    <li className="pb-5">
                      The driver must be between 21 and 75 years of age and have a valid Mexican driver's license. 
                    </li>
                    <li className="pb-5">
                      Only covers cars and pick-ups for private use with Mexican or border plates. 
                    </li>
                    <li className="pb-5">
                      Does not apply to vehicles with more than 9 passengers or trailers. 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item" key={6}>
              <div className="accordion-header" id={`heading6`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse6`}
                  aria-expanded="false"
                  aria-controls={`collapse6`}
                >
                  What do I get when I purchase a Unity Card?
                </button>
              </div>
              <div
                id={`collapse6`}
                className="accordion-collapse collapse pt-15"
                aria-labelledby={`heading6`}
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p className="fw-500">
                    A Third Party Liability (LC) coverage, divided for bodily injury, accident and property damage.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item" key={7}>
              <div className="accordion-header" id={`heading7`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse7`}
                  aria-expanded="false"
                  aria-controls={`collapse7`}
                >
                  What does roadside assistance include in my Unity Card policy?
                </button>
              </div>
              <div
                id={`collapse7`}
                className="accordion-collapse collapse pt-15"
                aria-labelledby={`heading7`}
                data-bs-parent="#accordionOne"
              >
                <div className="accordion-body">
                  <p className="fw-500">
                  </p>
                  <ul>
                    <li className="pb-5">
                      Towing service up to $100 USD. 
                    </li>
                    <li className="pb-5">
                      Tire change due to flat tire. 
                    </li>
                    <li className="pb-5">
                      Fast battery charge. 
                    </li>
                    <li className="pb-5">
                      Fluid replacement: gasoline, water, oil. 
                    </li>
                    <li className="pb-5">
                      Locksmith service.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )
      }

      {/*
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
      */}
    </div>
  );
};

export default FaqPremium;
