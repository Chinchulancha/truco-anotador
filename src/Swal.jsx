import Swal from "sweetalert2";

 


const Swal = () => {

    
        Swal.fire({
          title: "¿Quieres comenzar un Nuevo Partido?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí",
          cancelButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            newGame();
          } else if (result.isDenied) {
            null;
          }
        });
      

  return (
    <></>
  )
}

export default Swal