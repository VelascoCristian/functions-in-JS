import hamburguerMenu from "./hamburger_menu.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./keyboard";
import countdown from "./count_down_time.js";
import scrollTopButton from "./button_scroll.js";
import darkTheme from "./dark-theme.js";
import responsiveMedia from "./object_responsive.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    //             Activador   -  Despliegue - Una vez clickeado que desaparezca
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "May 23, 2023, 03:23:19", "Feliz cumpleaños");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube", "(min-width: 1024px)", "Contenido Móvil", "Contenido Escritorio");
    responsiveMedia("gmaps", "(min-width: 1024px)", "Contenido Móvil", "Contenido Escritorio");
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");