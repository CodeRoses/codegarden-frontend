import React from "react";
import Dragula from "react-dragula";
import Code from "./Code";

const codePrewritten =
  'balagan_ani = [\n\t{\n\t\t"nazwa": "Barbie",\n\t\t"typ": "Zabawka"\n\t},\n\t{\n\t\t"nazwa": "Harry Potter i Komnata Tajemnic",\n\t\t"typ": "Książka",\n\t\t"kategoria": "Fantasy"\n\t},\n\t{\n\t\t"nazwa": "Transformers",\n\t\t"typ": "Zabawka"\n\t},\n\t{\n\t\t"nazwa": "Niebieska bluza",\n\t\t"typ": "Ubranie"\n\t},\n\t{\n\t\t"nazwa": "Nowe przygody Mikołajka",\n\t\t"typ": "Książka",\n\t\t"kategoria": "Dla dzieci"\n\t},\n\t{\n\t\t"nazwa": "Java. Poradnik dla poczatkujacych",\n\t\t"typ": "Książka",\n\t\t"kategoria": "Naukowe"\n\t},\n\t{\n\t\t"nazwa": "Revenge of Najmanito",\n\t\t"typ": "Zabawka"\n\t},\n\t{\n\t\t"nazwa": "Skarpetki",\n\t\t"typ": "Ubranie"\n\t},\n\t{\n\t\t"nazwa": "Władca pierścieni: Drużyna pierścienia",\n\t\t"typ": "Książka",\n\t\t"kategoria": "Fantasy"\n\t}\n]\n\npojemniki = {\n\t"szafa": [],\n\t"pud�o": [],\n\t"stos_książek": [],\n}\npolka_na_ksiazki = {}';

const codeFragments = [
  "for przedmiot in balagan_ani:",
  '\tif przedmiot["typ"] == "Książka":\n\t\tpojemniki["stos_książek"].append(przedmiot)',
  '\telif przedmiot["typ"] == "Ubranie":\n\t\tpojemniki["szafa"].append(przedmiot)\n\telif przedmiot["typ"] == "Zabawka":\n\t\tpojemniki["pudło"].append(przedmiot)',
  'for ksiazka in pojemniki["stos_książek"]:',
  '\tif ksiazka["kategoria"] not in polka_na_ksiazki.keys():\n\t\tpolka_na_ksiazki[ksiazka["kategoria"]] = []',
  '\tpolka_na_ksiazki[ksiazka["kategoria"]].append(ksiazka)\n',
];

const CodeEditor: React.FunctionComponent = () => {
  const dragulaDecorator = React.useRef(
    (componentBackingInstance: HTMLDivElement) => {
      if (componentBackingInstance) {
        const options = {};
        Dragula([componentBackingInstance], options);
      }
    }
  );

  return (
    <div className="bg-black p-10 bg-opacity-50 rounded-lg self-center">
      <div className="flex flex-col rounded bg-duotone-dark p-10">
        <Code code={codePrewritten} />
        <div className="container" ref={dragulaDecorator.current}>
          {codeFragments.map((fragment, index) => (
            <div className="border-t border-gray-700" key={index}>
              <Code code={fragment} />
            </div>
          ))}
        </div>
        <div className="flex justify-center text-white text-2xl mt-10">
          <button className="bg-red-400 hover:bg-red-500 rounded-full py-2 px-4">
            Wyślij
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
