import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Head } from "$fresh/runtime.ts";
import {IconBrandInstagram} from 'https://deno.land/x/tablertsx@0.0.5/icons/separate/b.tsx'

export default function Home() {
  return (
    <div className="text-zinc-100">
      <div className={"absolute top-0 bg-red-600 flex flex-row justify-center items-center px-4 py-2"}>Em desenvolvimento</div>

      {/* Banner */}
      <div className=" w-full bg-gradient-to-b from-zinc-900 via-[#491F00] to-zinc-900 flex flex-col justify-center items-center min-h-[80vh]">
        <img src="rosa de saron.png" alt="" className="w-60 absolute top-[20vh]" />
        <div className="z-10 flex flex-col items-center justify-center">
            <h1 className="text-4xl backdrop-blur-md">Rosa de Saron</h1>
            <h2 className="text-zinc-300 text-xl backdrop-blur-md">Grupo de Jovens</h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-row items-center justify-center bg-[#E8EEF2] min-h-[40vh] text-zinc-900 text-lg px-8 font-medium">

        <span className="text-2xl"><span className="text-4xl font-bold">"</span><span>Ninguém o despreze por você ser jovem; pelo contrário, seja um exemplo para os fiéis, na palavra, na conduta, no amor, na fé, na pureza.</span></span>
        

      </div>

      {/* Footer */}
      <div className="flex flex-col justify-center bg-zinc-900 p-8">

        <span className="text-2xl pb-4">Redes Sociais</span>
        <hr />

        <a href="https://www.instagram.com/grupojovensrosadesaron/" className={"flex flex-row items-center p-4"}>
          <button><IconBrandInstagram></IconBrandInstagram></button>
          <span className="text-xl">Instagram</span>
        </a>

        <hr />

        <div className={"pt-12"}>Feito com carinho ❤️‍🔥</div>
        

      </div>

    </div>
  );
}
