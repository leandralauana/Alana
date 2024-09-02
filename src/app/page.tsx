'use client'

import { useContext, useState } from "react";
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { HomeContext } from "./context/HomeContext";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";


export default function Home() {
  const {
    contador,
    incremento,
    playing,
    statusPlaying
  } = useContext(HomeContext);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{contador}</h1>
      <div className="flex flex-row">
        <button onClick={() => incremento()}>
          {
            (contador === 0) ?
              (<FaPlusCircle className="text-[50px] text-[tomato]" />) :
              (<FaMinusCircle />)
          }

        </button>
        <button onClick={() => incremento()}>
          {
            (contador === 0) ?
              (<FaPlusCircle className="text-[50px] text-[tomato]" />) :
              (<FaMinusCircle />)
          }

        </button>
        <button onClick={() => incremento()}>
          {
            (contador === 0) ?
              (<FaPlusCircle className="text-[50px] text-[tomato]" />) :
              (<FaMinusCircle />)
          }
        </button>
        <button onClick={() => statusPlaying()}>
          {playing ? <FaPlay style={{ fontSize: '45px' }} /> : <FaPause style={{ fontSize: '45px' }} />}
        </button>
      </div>
      <h1>{playing ? "Pause" : "Executando"}</h1>
    </main>
  );
}
