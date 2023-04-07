import { useState, useEffect } from "react";

import Header from "./components/Header";
import NosClick from "./components/NosClick";
import EllosClick from "./components/EllosClick";

import Swal from "sweetalert2";


function App() {
  const [puntosNos, setPuntosNos] = useState(0);
  const [puntosNos2, setPuntosNos2] = useState(0);
  

  const [puntosEllos, setPuntosEllos] = useState(0);
  const [puntosEllos2, setPuntosEllos2] = useState(0);

  const [gameOver, setGameOver] = useState(false);

  const rutaImagenPuntosNos = `./src/assets/fosforos/fosforos-${puntosNos}.png`;
  const rutaImagenPuntosNos2 = `./src/assets/fosforos/fosforos-${puntosNos2}.png`;
  const rutaImagenPuntosEllos = `./src/assets/fosforos/fosforos-${puntosEllos}.png`;
  const rutaImagenPuntosEllos2 = `./src/assets/fosforos/fosforos-${puntosEllos2}.png`;

  useEffect(() => {
    if (puntosEllos2 === 15 || puntosNos2 === 15) {
      swal();
    }
  }, [puntosEllos2, puntosNos2]);

  function handleClickNos(operacion) {
    if (puntosNos >= 15) {
      if (operacion === "+") {
        if (puntosNos2 < 15) {
          setPuntosNos2(puntosNos2 + 1);
        }
      } else if (operacion === "-" && puntosNos2 > 0) {
        setPuntosNos2(puntosNos2 - 1);
      } else if (operacion === "-" && puntosNos2 === 0 && puntosNos > 0) {
        setPuntosNos(puntosNos - 1);
      }
    } else {
      if (operacion === "+") {
        setPuntosNos(puntosNos + 1);
      } else if (operacion === "-" && puntosNos > 0) {
        setPuntosNos(puntosNos - 1);
      }
    }
  }

  function handleClickEllos(operacion) {
    if (puntosEllos >= 15) {
      if (operacion === "+") {
        if (puntosEllos2 < 15) {
          setPuntosEllos2(puntosEllos2 + 1);
        }
      } else if (operacion === "-" && puntosEllos2 > 0) {
        setPuntosEllos2(puntosEllos2 - 1);
      } else if (operacion === "-" && puntosEllos2 === 0 && puntosEllos > 0) {
        setPuntosEllos(puntosEllos - 1);
      }
    } else {
      if (operacion === "+") {
        setPuntosEllos(puntosEllos + 1);
      } else if (operacion === "-" && puntosEllos > 0) {
        setPuntosEllos(puntosEllos - 1);
      }
    }
  }

  const newGame = () => {
    Swal.fire({
      title: "¿Comenzar Nuevo Partido?",
      icon: "warning",
      showCancelButton: true,
      background: "#4d2e0f",
      color: "#fff",
      confirmButtonColor: "#64401c",
      cancelButtonColor: "#64401c",
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        reiniciarPuntos()
        setGameOver(false);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        setGameOver(true);
      }
    });
  };

  const swal = () => {
    if (gameOver) return;

    Swal.fire({
      title: "¿Comenzar Nuevo Partido?",
      icon: "warning",
      showCancelButton: true,
      background: "#4d2e0f",
      color: "#fff",
      confirmButtonColor: "#64401c",
      cancelButtonColor: "#64401c",
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      customClass: {
        confirmButton: "px-4 py-2 text-[#4d2e0f]",
        cancelButton: "px-4 py-2 text-[#4d2e0f]",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        reiniciarPuntos()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        setGameOver(true);
      }
    });
  };

  const reiniciarPuntos = () => {
    setPuntosNos(0);
    setPuntosEllos(0);
    setPuntosNos2(0);
    setPuntosEllos2(0);
  };

  return (
    <div className="font-semibold font-sans flex justify-center text-[#f2e8c4] h-full">
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col h-full gap-y-3 md:gap-y-20">
        <Header newGame={newGame} />

        <div className="flex w-full text-center justify-center text-2xl px-3">
          <div className="p-3 w-1/2 max-h-[500px]">
            <h3 className="text-white border-b-2 border-[#f2e8c4] font-cur">
              Nos: {puntosNos + puntosNos2}
            </h3>

            <div className="h-full py-2 flex items-center flex-col">
              {puntosNos === 0 ? (
                ""
              ) : (
                <div
                  className={`h-[50%] px-10 py-6 ${
                    puntosNos >= 15 && "border-b-2 border-[#f2e8c4]"
                  } ${puntosNos < 6 && "h-[30%]"}`}
                >
                  {" "}
                  <img
                    className={`${puntosNos <= 5 ? "h-[60%]" : "h-full"}`}
                    src={rutaImagenPuntosNos}
                    alt="fosforo anotador truco"
                  />
                </div>
              )}

              {puntosNos2 === 0 ? (
                ""
              ) : (
                <div
                  className={`h-[50%] px-10 py-6 ${
                    puntosNos2 > 0 ? "block" : "hidden"
                  } ${puntosNos2 < 6 && "h-[30%]"}`}
                >
                  {" "}
                  <img
                    className={`${puntosNos2 <= 5 ? "h-[60%]" : "h-full"}`}
                    src={rutaImagenPuntosNos2}
                    alt="fosforo anotador truco"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="w-[2px] h-[500px] bg-[#f2e8c4]"></div>
          <div className="p-3 w-1/2  max-h-[500px]">
            <h3 className="text-white w-full text-center border-b-2 border-[#f2e8c4] font-cur">
              Ellos: {puntosEllos + puntosEllos2}
            </h3>

            <div className="h-full py-2 flex items-center flex-col">
              {puntosEllos === 0 ? (
                ""
              ) : (
                <div
                  className={`h-[50%] px-10 py-6 ${
                    puntosEllos >= 15 && "border-b-2 border-[#f2e8c4]"
                  } ${puntosEllos < 6 && "h-[30%]"}`}
                >
                  {" "}
                  <img
                    className={`${puntosEllos <= 5 ? "h-[60%]" : "h-full"}`}
                    src={rutaImagenPuntosEllos}
                    alt="fosforo anotador truco"
                  />
                </div>
              )}

              {puntosEllos2 === 0 ? (
                ""
              ) : (
                <div
                  className={`h-[50%] px-10 py-6 ${
                    puntosEllos2 > 0 ? "block" : "hidden"
                  } ${puntosEllos2 < 6 && "h-[30%]"}`}
                >
                  {" "}
                  <img
                    className={`${puntosEllos2 <= 5 ? "h-[60%]" : "h-full"}`}
                    src={rutaImagenPuntosEllos2}
                    alt="fosforo anotador truco"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" w-full flex justify-around  m-auto">
          <NosClick handleClickNos={handleClickNos} />
          <EllosClick handleClickEllos={handleClickEllos} />
        </div>
      </div>
    </div>
  );
}

export default App;
