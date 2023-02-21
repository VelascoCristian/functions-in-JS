import hamburguerMenu from "./hamburger_menu.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./keyboard.js";
import countdown from "./count_down_time.js";
import scrollTopButton from "./button_scroll.js";
import darkTheme from "./dark-theme.js";
import responsiveMedia from "./object_responsive.js";
import responsiveTester from "./responsive_test.js";
import userDeviceInfo from "./device_detection.js";
import networkStatus from "./network_detection.js";
import webCam from "./webcam_detection.js";
import getGeolocation from "./geolocation.js";
import searchFilter from "./search_filter.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    //             Activador   -  Despliegue - Una vez clickeado que desaparezca
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "May 23, 2023, 03:23:19", "Feliz cumpleaños");
    scrollTopButton(".scroll-top-btn");                // Movil                                                                                   - Desktop                 
    responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://www.youtube.com/embed/f6QFfmwFT3k" target="_blank">Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/f6QFfmwFT3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia("gmaps", "(min-width: 1024px)", `<a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53356.94560016026!2d-66.30966570000001!3d-33.2976569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d43954196ca6cd%3A0x7fc2e3b4d49ecc83!2sSan%20Luis!5e0!3m2!1ses-419!2sar!4v1676673956135!5m2!1ses-419!2sar" target="_blank">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53356.94560016026!2d-66.30966570000001!3d-33.2976569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d43954196ca6cd%3A0x7fc2e3b4d49ecc83!2sSan%20Luis!5e0!3m2!1ses-419!2sar!4v1676673956135!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilter(".card-filter", ".card");
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();