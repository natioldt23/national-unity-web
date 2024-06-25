import { useEffect } from 'react';

export const Zendesk = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = "ze-snippet";
    script.src = "https://static.zdassets.com/ekr/snippet.js?key=658890bd-303c-4451-83ce-9952a91c636c";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};
