const containerModal = document.getElementById("containerModal");
const btnFirs = document.getElementById("btnFirs");
const btnSecond = document.getElementById("btnSecond");
const btnThird = document.getElementById("btnThird");
const btnSixth = document.getElementById("btnSixth");
const body = document.getElementById("body");

let newProyect = document.createElement("div");

btnFirs.addEventListener('click', (e) => {
    let name = e.target.id
    openModal(name)
});
btnSecond.addEventListener('click', (e) => {
    let name = e.target.id
    openModal(name)
});
btnThird.addEventListener('click', (e) => {
    let name = e.target.id
    openModal(name)
});
btnFourth.addEventListener('click', (e) => {
    let name = e.target.id
    openModal(name)
});
btnFifth.addEventListener('click', (e) => {
    let name = e.target.id
    openModal(name)
});
btnSixth.addEventListener('click', (e) => {
    let name = e.target.id
    openModal(name)
});


const proyects = {
    btnFirs: {
        img: './video/rickMorty.gif',
        title: 'Rick and Morty Plugin',
        text: 'Plugin para WordPress que muestra los personajes y sus respectivos detalles de la serie de animación Rick y Morty. El proyecto se desarrollo con <span class="spanTI">CSS, JavaScript y Python.</span>',
        linkGitHub: 'https://github.com/MicaelaJofre/RickandMortyPlugin'
    },
    btnSecond: {
        img: './video/cristina.gif',
        title: 'Cristina Greño',
        text: 'Trabajo freelance para artista plástica Argentina. El sitio web consta de seis secciones, incluido el home, donde el usuario va a poder navegar por la galería de cuadros y cursos que ofrece el cliente. Además podrá conocer más de la historia de la artista, así como ver las recomendaciones de la misma. Por último, se ofrece un formulario de contacto y las diferentes redes sociales, que a su vez, se puede acceder en todas las secciones. El proyecto se desarrollo con <span class="spanTI">HTML, Css, Bootstrap y Python.</span>',
        linkGitHub: 'https://github.com/MicaelaJofre/CristinaGreno',
        linkWeb: 'https://www.xn--cristinagreo-khb.com/'
    },
    btnThird: {
        img: './video/message.gif',
        title: 'Message',
        text: 'Este proyecto es una aplicación de mensajería instantánea en la que los usuarios pueden registrarse o iniciar sesión mediante un formulario o con su cuenta de Google. Los usuarios también pueden crear salas de chat y comunicarse con otros miembros de la sala. El propietario de la sala tiene la capacidad de eliminar las salas que haya creado. El proyecto se desarrollo con <span class="spanTI">React Js, SASS y Firebase.</span>',
        linkGitHub: 'https://github.com/MicaelaJofre/message',
        linkWeb: 'https://micaelajofre.github.io/message/'
    },
    btnFourth: {
        img: './video/evento.gif',
        title: 'Dreamed Day',
        text: 'Sitio web creado para que el usuario pueda manejar una agenda de su boda. El sitio consta de un registro de usuario y una agenda personalizada con cuatro secciones donde podrá manejar la lista de invitados, el presupuesto, una lista de tareas pendientes y proveedores. El proyecto fue desarrollado con <span class="spanTI">HTML, SASS, JavaScript vanilla y JQuery.</span>',
        linkGitHub: 'https://github.com/MicaelaJofre/Eventos',
        linkWeb: 'https://micaelajofre.github.io/Eventos/'
    },
    btnFifth: {
        img: './video/ecommerce.gif',
        title: 'Lima',
        text: 'Ecommerce creado para la venta de productos del hogar y deco. El proyecto consta de varias secciones donde el usuario va a poder visualizar los distintos productos y en donde podrá filtrar según sus preferencias. En cada producto se podrá ingresar a un detalle con más información del mismo y proseguir con la compra. Además, incluye un carrito de compras y un formulario para agendar los datos de la compra realizada. El sitio web fue desarrollado con <span class="spanTI">React Js, CSS y Firebase.</span>',
        linkGitHub: 'https://github.com/MicaelaJofre/ecommercejofre',
        linkWeb: 'https://micaelajofre.github.io/ecommercejofre/'
    },
    btnSixth: {
        img: './video/serviciosLibres.gif',
        title: 'Servicios Libres',
        text: 'App de servicios que facilita la conexión a consumidores con proveedores. Proporciona una interfaz dinámica y rápida, un diseño moderno y responsivo, seguridad y escalabilidad, y utiliza MongoDB como base de datos. <span class="spanTI">React, Next.js, Tailwind CSS, TypeScript, Express, Node.js y MongoDB.</span>',
        linkGitHub: 'https://github.com/MicaelaJofre/servicios-libres'
    }
}


function openModal(name) {
    containerModal.style.visibility = 'visible'
    containerModal.style.opacity = '1';
    body.style.overflow = 'hidden';
    console.log(name);
    newProyect.className = 'newProyect';
    newProyect.innerHTML = `
            <p class="containerClose"><img onClick="closeModal()" class="close"  src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"/></p>
            <img class="gif" src=${proyects[name].img} alt=${proyects[name].title}/>
            <h4>${proyects[name].title}</h4>
            <p class="textNewProyect">${proyects[name].text}</p>
            ${proyects[name].linkGitHub ? `<a class="linkModal" target="_blank" href=${proyects[name].linkGitHub}>Ver repositorio de GitHub</a>` : ""}
            ${proyects[name].linkWeb ? `<a class="linkModal" target="_blank" href=${proyects[name].linkWeb}>Ver sitio web</a>` : ""}    
`
    containerModal.appendChild(newProyect);
}

function closeModal() {
    containerModal.style.visibility = 'hidden'
    containerModal.style.opacity = '0';
    newProyect.innerHTML = '';
    body.style.overflow = 'scroll'
}
