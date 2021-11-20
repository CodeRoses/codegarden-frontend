import React from "react";

const text = {
  title: "Cukierek albo psikus!",
  flavor:
    "Pomóż Sersi zebrać halloweenowe słodkości! Ale uważaj - Sersi nie lubi rodzynek.",
  task: "Przeszukaj elementy w kociołku = jeśli trafisz na coś słodkiego, dodaj to do torby Sersi. Pamiętaj, aby nie zbierać rodzynek!",
  instructions:
    "Przeciągnij i ułóż bloki kodu, aby zliczyć słodkosci i wyświetlić zawartość torby Sersi.",
};

const Instructions: React.FunctionComponent = () => {
  return (
    <div className="rounded-l-3xl bg-green-300 w-80 p-10 absolute right-0">
      <div className="text-white text-lg bg-red-400 mb-5 py-5 text-center">
        {text.title}
      </div>
      <div className="flex flex-col bg-black bg-opacity-50 py-7 px-5 text-right">
        <div className="text-white mb-7">{text.flavor}</div>
        <div className="text-red-400 mb-7">{text.task}</div>
        <div className="text-green-300">{text.instructions}</div>
      </div>
    </div>
  );
};

export default Instructions;
