/*const goToAjax = (id, web) => {
  document.addEventListener("click", (e) => {
    const $link = document.getElementById(id);

    if (e.target.matches(id)) {
      e.preventDefault();
      alert("SISI");
    }
  });
};

document.addEventListener("DOMContentLoaded", (e) => {
  goToAjax("services-link", "weasdaaa");
});*/

document
  .getElementById("services-link")
  .addEventListener("click", function (e) {
    e.preventDefault(); // Previene el comportamiento predeterminado del enlace

    // Realiza una solicitud AJAX con Axios
    axios
      .get("services.html")
      .then(function (response) {
        // Agrega el contenido obtenido a la página actual
        document.documentElement.innerHTML = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  });
