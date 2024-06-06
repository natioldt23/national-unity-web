import { Helmet, HelmetProvider } from "react-helmet-async";
const Seo = ({ pageTitle }) => (
  <HelmetProvider>
    <Helmet>
      <title>
        National Unity
      </title>
    </Helmet>
  </HelmetProvider>
);

export default Seo;
