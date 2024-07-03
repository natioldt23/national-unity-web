import { useEffect, useRef } from 'react';
import { USAMap } from 'usa-map-react';
import { statesData } from '../../../data/statesData.js';

// TODO: ARREGLAR CAJA DE INFO EN MOUSE

const Map = () => {
  const detailsBoxRef = useRef(null);

  const mapHandler = (event) => {
    console.log(event.target.dataset.name);
  };

  useEffect(() => {
    const detailsBox = detailsBoxRef.current;

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'path') {
        const state = e.target.firstChild.innerHTML;
        
        let stateCoverage;
        statesData.forEach((stateData) => {
          if (state === stateData.name) {
            stateCoverage = stateData.limit;
          }
        });

        detailsBox.innerHTML = `
          <h4 style='color: #FFF;'>${state}</h4>
          <p style='margin: 0; text-align: center;'>${stateCoverage}</p>
        `;
        detailsBox.style.opacity = '100%';
      } /*else if (e.target.tagName === 'g'){
        const stateDC = e.target.dataset.name;

        let stateCoverageDC;
        statesData.forEach((stateData) => {
          if (stateDC === stateData.name) {
            stateCoverageDC = stateData.limit;
          }
        });

        detailsBox.innerHTML = `
          <h4 style='color: #FFF;'>${stateDC}</h4>
          <p style='margin: 0; text-align: center;'>${stateCoverageDC}</p>
        `;
        detailsBox.style.opacity = '100%';

      } */else {
        detailsBox.style.opacity = '0%';
      }
    };

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      detailsBox.style.top = `${y + 20}px`;
      detailsBox.style.left = `${x -100}px`;
    };

    const handleMouseMoveMobile = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      detailsBox.style.top = `${y + 20}px`;
      detailsBox.style.left = `${x}px`;
    };

    const updateEventListeners = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousemove', handleMouseMoveMobile);
      } else {
        window.removeEventListener('mousemove', handleMouseMoveMobile);
        window.addEventListener('mousemove', handleMouseMove);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    updateEventListeners();
    window.addEventListener('resize', updateEventListeners);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleMouseMoveMobile);
      window.removeEventListener('resize', updateEventListeners);
    };
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div id="details-box" ref={detailsBoxRef} style={{ position: 'absolute', opacity: 0 }}></div>
      <USAMap onClick={mapHandler} />
    </div>
  );
};

export default Map;
