import { useContext } from "react";
import { AppContext } from "../utils/context";
import { Field } from "../model/language";

export default function Home() {
  const { lang, setLanguage } = useContext(AppContext);
  let { code, name, h1, p, footer, options } = lang as Field;
  return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1>{h1}</h1>
        <p>{p}</p>
        <p>{name}</p>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <select 
            className="bg-white border border-white rounded-lg py-2 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
            value={code}
            >
              {options.map((options, index) => (
                <option key={index} value={options.value}>
                  {options.label}
                </option>
              ))}
            </select>
        </div>
      </main>
    </div>
  )
}