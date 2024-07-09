/******** animación menu movile *****************/
function openNav(){
    event.preventDefault();
    document.getElementById("mobile-menu").style.width = "100%";
    document.querySelector(".close").style.right = "5%";
    document.querySelector(".overlay-content__titulo").style.fontSize = "2rem";
}


function closeNav(){
    event.preventDefault();
    document.getElementById("mobile-menu").style.width = "0%";
    document.querySelector(".close").style.right = "100%";
    document.querySelector(".overlay-content__titulo").style.fontSize = "0rem";
}


const div = document.querySelector(".header__logo");

div.addEventListener("click", function() {
    window.location.href = "index.html";
});




/******** validacion forumlario Delivery ************/

function contacFormularioDelivery() {
    const form = document.querySelector(".formulario-delivery");
    const inputs = document.querySelectorAll(".formulario-delivery [required]");
    //console.log(inputs);


    inputs.forEach(input => {
        const span = document.createElement("span");
        span.id = input.name;
        span.textContent = input.title;
        span.classList.add("contac-form-error", "none"); //
        input.insertAdjacentElement("afterend", span);
    });


    document.addEventListener("keyup", (e) => {
        if(e.target.matches(".formulario-delivery [required]")){
            let input = e.target;
            pattern = input.pattern;
            //console.log(input, pattern);
            
            if(pattern) {
                let regule = new RegExp(pattern);
                return !regule.exec(input.value) 
                ? document.getElementById(input.name).classList.add("is-active")              
                : document.getElementById(input.name).classList.remove("is-active");
            }

            if(!pattern) {
                return input.value === ""
                ? document.getElementById(input.name).classList.add("is-active")              
                : document.getElementById(input.name).classList.remove("is-active");
            }


        }
    });

    document.addEventListener("submit", (e) =>{
        e.preventDefault();
        //alert("Enviar formulario")
        const cargando = document.querySelector(".contact-form-loader");
        const response = document.querySelector(".contact-form-response");
    
        cargando.classList.remove("none");
        //response.classList.remove("none");

        setTimeout(() => {
            cargando.classList.add("none");
            response.classList.remove("none");
            form.reset();

        }, 4000);

        setTimeout(() => {
            response.classList.add("none");

        }, 3000);

    });

}





contacFormularioDelivery();


/*


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario

        // Muestra el loader
        document.querySelector(".contact-form-loader").classList.remove("none");

        // Oculta la respuesta anterior
        document.querySelector(".contact-form-response").classList.add("none");

        // Obtén los datos del formulario
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        console.log(data);

        try {
            // Envía los datos al servidor
            const response = await fetch("https://backend-grupo07-c-24253.onrender.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            // Verifica si la solicitud fue exitosa
            if (!response.ok) {
                throw new Error("Error en la solicitud");
            }

            // Muestra el mensaje de éxito
            document.querySelector(".contact-form-response").classList.remove("none");

        } catch (error) {
            // Muestra un mensaje de error
            alert("Hubo un problema con el envío del formulario: " + error.message);
        } finally {
            // Oculta el loader
            document.querySelector(".contact-form-loader").classList.add("none");
        }
    });
});



*/


document.addEventListener('DOMContentLoaded', () => { 
    const authToken = JSON.parse(sessionStorage.getItem('authData'));
    if (authToken) {
            const logoutSectionHTML = ` <div class="header__login">
            <button id="logout" type="button" class="btn btn-secondary btn-lg">Cerrar Sesión</button>
        </div>`;
        const targetElement = document.getElementById('targetElementId');
        //console.log(authToken.auth);
    
        if(authToken.auth){
            targetElement.innerHTML = logoutSectionHTML;
           
            } 
    }else {
        const loginSectionHTML = `
        <div class='header__login'>
            <a href='../login.html'>
                <div class='boton-login' title='Iniciar Sesión'>
                    <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-user' width='35' height='35' viewBox='0 0 24 24' stroke-width='1.5' stroke='#ffffff' fill='none' stroke-linecap='round' stroke-linejoin='round'>
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' />
                        <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
                    </svg>
                    <span class='boton-login__texto'>Iniciar Sesión</span>
                </div>
            </a>
            <a href='../register.html'>
                <div class='boton-registrate'>
                    <span>Regístrate</span>
                </div>
            </a>
        </div>
    `;
        const targetElement = document.getElementById('targetElementId');
        targetElement.innerHTML = loginSectionHTML;
    }
});

