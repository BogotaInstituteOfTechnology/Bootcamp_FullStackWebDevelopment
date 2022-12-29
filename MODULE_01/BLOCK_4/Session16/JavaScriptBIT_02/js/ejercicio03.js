// For

let ejFor = document.getElementById("ejFor");

const emergente = () => {
  for (let i = 0; i < 5; i++) {
    //alert("ACTIVA LAS VENTANAS EMERGENTES PARA DETENER ESTE SPAM");
    window.open("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEMWGrW37iVuEQlE8gbU-bWEz6lauSJSwYVw&usqp=CAU");
  }
};

// evento
ejFor.onclick = function () {
  emergente();
};
