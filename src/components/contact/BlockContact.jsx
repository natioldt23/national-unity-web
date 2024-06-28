import { LanguageContext } from "@/App";
import { useContext } from "react";

const BlockContact = () => {
  const { lang } = useContext(LanguageContext)

  const addressBlocks = [
    {
      icon: "/images/icon/icon_178.svg",
      title: "Nuestra dirección",
      content: "One Huebner Parke, 15303 Huebner Road San Antonio, TX 78248",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_179.svg",
      title: "Información de contacto",
      content: "Llámanos en México al",
      link: "tel:+52-800-062-0460",
      content2: 'o en USA al',
      link2: "tel: 001-210-479-8886",
      delay: "200",
    },
    {
      icon: "/images/icon/icon_180.svg",
      title: "Apoyo por Whatsapp",
      content: "Servicio de chat en vivo",
      link: "https://wa.me/8134039138",
      delay: "300",
    },
    
  ];
  const addressBlocksEng = [
    {
      icon: "/images/icon/icon_178.svg",
      title: "Our Address",
      content: "One Huebner Parke, 15303 Huebner Road San Antonio, TX 78248",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_179.svg",
      title: "Contact Information",
      content: "Call us in Mexico at",
      link: "tel:+52-800-062-0460",
      content2: 'or in USA at',
      link2: "tel: 001-210-479-8886",
      delay: "200",
    },
    {
      icon: "/images/icon/icon_180.svg",
      title: "Whatsapp Support",
      content: "Servicio de chat en vivo",
      link: "https://wa.me/8134039138",
      delay: "300",
    },
    
  ];

  return (
    <>
      {
        lang == 'es'?
        addressBlocks.map((block, index) => (
        <div
          className="col-md-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <div className="icon border rounded-circle d-flex align-items-center justify-content-center m-auto">
              <img src={block.icon} alt="icon" />
            </div>
            <h5 className="title">{block.title}</h5>
            <p>
              {block.content} <br />
              {block.link && (
                <a
                  href={block.link}
                  target="_blank"
                  className={
                    block.link.includes("tel:") ? "call" : "webaddress"
                  }
                >
                  {block.link.replace("tel:", "")}
                </a>
              )}
            </p>
            <p>
              {block.content2} <br />
              {block.link2 && (
                <a
                  href={block.link2}
                  target="_blank"
                  className={
                    block.link2.includes("tel:") ? "call" : "webaddress"
                  }
                >
                  {block.link2.replace("tel:", "")}
                </a>
              )}
            </p>
          </div>
        </div>
        )) :
        addressBlocksEng.map((block, index) => (
          <div
            className="col-md-4"
            key={index}
            data-aos="fade-up"
            data-aos-delay={block.delay}
          >
            <div className="address-block-two text-center mb-40">
              <div className="icon border rounded-circle d-flex align-items-center justify-content-center m-auto">
                <img src={block.icon} alt="icon" />
              </div>
              <h5 className="title">{block.title}</h5>
              <p>
                {block.content} <br />
                {block.link && (
                  <a
                    href={block.link}
                    target="_blank"
                    className={
                      block.link.includes("tel:") ? "call" : "webaddress"
                    }
                  >
                    {block.link.replace("tel:", "")}
                  </a>
                )}
              </p>
              <p>
                {block.content2} <br />
                {block.link2 && (
                  <a
                    href={block.link2}
                    className={
                      block.link2.includes("tel:") ? "call" : "webaddress"
                    }
                  >
                    {block.link2.replace("tel:", "")}
                  </a>
                )}
              </p>
            </div>
          </div>
        ))
      }
    </>
  );
};

export default BlockContact;
