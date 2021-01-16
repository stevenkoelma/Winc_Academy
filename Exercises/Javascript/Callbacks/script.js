const huiswerkMaken = (vak, callback) => {
  console.log(`"Ok, ok, ik ga nu mijn ${vak} maken"`);
  setTimeout(function () {
    callback();
  }, 3000);
};

const klaarMetHuiswerk = () => {
  console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
};

huiswerkMaken("wiskunde", klaarMetHuiswerk);
