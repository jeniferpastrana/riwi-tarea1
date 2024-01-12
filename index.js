(() => {
    "use strict";

    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();



let pacientecita = [];
let modo = "guarda"
let pacienteEditar;

const respuesta = document.querySelector(".container-cites");


document.addEventListener("DOMContentLoaded", () => { });



const formulario = document.querySelector("#formulario");

//crear el evento
formulario.addEventListener("submit", validarFormulario);
const contenedor = document.querySelector(".container-cites")
const editar = document.querySelector(".container-cites")

//mis funciones
function validarFormulario(e) {
    e.preventDefault();

    const nombreMascota = document.querySelector("#name_pet").value;
    const nombrePropietario = document.querySelector("#name_person").value;
    const telefonoPersona = document.querySelector("#phone_person").value;
    const fechaDelaCita = document.querySelector("#date_cite").value;
    const horaDelaCita = document.querySelector("#time_cite").value;
    const sintomas = document.querySelector("#description").value;








    let paciente = {
        id: Date.now(),
        nombreMascota: nombreMascota,
        nombrePropietario: nombrePropietario,
        telefonoPersona: telefonoPersona,
        fechaDelaCita: fechaDelaCita,
        horaDelaCita: horaDelaCita,
        sintomas: sintomas,
    };

    pacientecita.push(paciente);
    listarPaciente()



}


function listarPaciente() {
    respuesta.innerHTML = ""

    pacientecita.forEach(paciente => {
        respuesta.innerHTML += `
            <div class="card card_cite">
                <div class="card-body" data-id="${paciente.id}">
                    <h5 class="card-title fs-3 fw-bold">${paciente.nombreMascota}</h5>
                    <p class="card-text">
                    <div class="d-flex gap-2">
                        <span class="fw-bold">Propietario:</span>
                        <span class="propietario">${paciente.nombrePropietario}</span>
                    </div>
                    <div class="d-flex gap-2">
                        <span class="fw-bold">Telefono:</span>
                        <span  class="telefono">${paciente.telefonoPersona}</span>
                    </div>
                    <div class="d-flex gap-2">
                        <span class="fw-bold">Fecha:</span>
                        <span class="fecha">${paciente.fechaDelaCita}</span>
                    </div>
                    
                    <div class="d-flex gap-2">
                        <span class="fw-bold">Hora:</span>
                        <span  class="hora">${paciente.horaDelaCita}</span>
                    </div>
                    <div class="d-flex gap-2">
                        <span class="fw-bold">Sintomas:</span>
                        <span  class="sintomas">${paciente.sintomas}</span>
                    </div>
                    </p>
                    <div class="d-flex gap-2">
                        <button class="btn btn-primary btn-edit" identificador="${paciente.id}">Editar</button>
                        <button class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>
    `



    })



}



contenedor.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-danger")) {
        let id = e.target.parentElement.parentElement.getAttribute("data-id")
        pacientecita = pacientecita.filter(element => element.id != id)
        listarPaciente()
    }

})


editar.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-edit")) {
        let iden = e.target.getAttribute("identificador")
        //BUscar la mascota que tenga el identificador
         pacienteEditar  = pacientecita.find(mascota => mascota.id == iden)

         document.querySelector("#name_pet").value = pacienteEditar.nombreMascota;
         document.querySelector("#name_person").value =pacienteEditar.nombrePropietario;
         document.querySelector("#phone_person").value = pacienteEditar.telefonoPersona;
         document.querySelector("#date_cite").value =pacienteEditar.fechaDelaCita;
         document.querySelector("#time_cite").value  =pacienteEditar.horaDelaCita;
         document.querySelector("#description").value =pacienteEditar.sintomas;
    }

})

