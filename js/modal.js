const containerModal = document.getElementById("containerModal");
const btnFirs = document.getElementById("btnFirs");
const btnSecond = document.getElementById("btnSecond");
const btnThird = document.getElementById("btnThird");
const body = document.getElementById("body");


btnFirs.addEventListener('click', openModal);
btnSecond.addEventListener('click', openModalSecond);
btnThird.addEventListener('click', openModalThird);


const proyects = [
    {
        img: './video/cristina.gif',
        title: 'Cristina Greño',
        text: 'Trabajo freelance para artista plástica Argentina. El sitio web consta de seis secciones, incluido el home, donde el usuario va a poder navegar por la galería de cuadros y cursos que ofrece el cliente. Además podrá conocer más de la historia de la artista, así como ver las recomendaciones de la misma. Por último, se ofrece un formulario de contacto y las diferentes redes sociales, que a su vez, se puede acceder en todas las secciones. El proyecto se desarrollo con <span class="spanTI">HTML, Css, Bootstrap y Python.</span>',
        linkGitHub: 'https://github.com/MicaelaJofre/CristinaGreno',
        linkWeb: 'https://www.xn--cristinagreo-khb.com/'
    },
    {
        img: './video/ecommerce.gif',
        title: 'Lima',
        text: 'Ecommerce creado para la venta de productos del hogar y deco. El proyecto consta de varias secciones donde el usuario va a poder visualizar los distintos productos y en donde podrá filtrar según sus preferencias. En cada producto se podrá ingresar a un detalle con más información del mismo y proseguir con la compra. Además, incluye un carrito de compras y un formulario para agendar los datos de la compra realizada. El sitio web fue desarrollado con <span class="spanTI">React Js, Css y Firebase.</span>',
        linkGitHub: 'https://github.com/MicaelaJofre/ecommercejofre',
        linkWeb: 'https://micaelajofre.github.io/ecommercejofre/'
    },
    {
        img: './img/coder2.jpg',
        title: 'Dreamed Day',
        text: 'Sitio web creado para que el usuario pueda manejar una agenda de su boda. El sito consta de un registro de usurio y una agenda personalizada con cuatro secciones donde podrá manejar la lista de invitados, el presupuesto, una lista de tareas pendientes y proveedores. El proyecto fue desarrollado con <span class="spanTI">HTML, Sass, JavaScript vanilla y JQuery.</span>',
        linkGitHub: 'https://github.com/MicaelaJofre/Eventos',
        linkWeb: 'https://micaelajofre.github.io/Eventos/'
    }
]
let newProyect = document.createElement("div");

function openModal() {
    containerModal.style.visibility='visible'
    containerModal.style.opacity = '1';
    body.style.overflow = 'hidden';
    
    newProyect.className = 'newProyect';
    newProyect.innerHTML = `
            <p class="containerClose"><img onClick="closeModal()" class="close"  src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"/></p>
            <img class="gif" src=${proyects[0].img} alt=${proyects[0].title}/>
            <h4>${proyects[0].title}</h4>
            <p class="textNewProyect">${proyects[0].text}</p>
            <a class="linkModal" target="_blank" href=${proyects[0].linkGitHub}>Ver repositorio de GitHub</a> 
            <a class="linkModal" target="_blank" href=${proyects[0].linkWeb}>Ver sitio web</a>    
        `
    containerModal.appendChild(newProyect);
}
function openModalSecond() {
    containerModal.style.visibility = 'visible'
    containerModal.style.opacity = '1';
    body.style.overflow = 'hidden';

    newProyect.className = 'newProyect';
    newProyect.innerHTML = `
            <p class="containerClose"><img onClick="closeModal()" class="close"  src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"/></p>
            <img class="gif" src=${proyects[1].img} alt=${proyects[1].title}/> 
            <h4>${proyects[1].title}</h4> 
            <p class="textNewProyect">${proyects[1].text}</p>
            <a class="linkModal" target="_blank" href=${proyects[1].linkGitHub}>Ver repositorio de GitHub</a> 
            <a class="linkModal" target="_blank" href=${proyects[1].linkWeb}>Ver sitio web</a>              
        `
    containerModal.appendChild(newProyect);
}
function openModalThird() {
    containerModal.style.visibility = 'visible'
    containerModal.style.opacity = '1';
    body.style.overflow = 'hidden';

    newProyect.className = 'newProyect';
    newProyect.innerHTML = `
            <p class="containerClose"><img onClick="closeModal()" class="close"  src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"/></p>
            <img class="gif" src=${proyects[2].img} alt=${proyects[2].title}/> 
            <h4>${proyects[2].title}</h4> 
            <p class="textNewProyect">${proyects[2].text}</p>
            <a class="linkModal" target="_blank" href=${proyects[2].linkGitHub}>Ver repositorio de GitHub</a>
            <a class="linkModal" target="_blank" href=${proyects[2].linkWeb}>Ver sitio web</a>
        `
    containerModal.appendChild(newProyect);
}

function closeModal() {
    containerModal.style.visibility = 'hidden'
    containerModal.style.opacity = '0';
    newProyect.innerHTML = '';
    body.style.overflow = 'scroll'
}