const d = document;
const selectProvincias = d.getElementById("selectProvincias");
const selectDepartamentos = d.getElementById("selectDepartamentos");
const selectLocalidades = d.getElementById("selectLocalidades");

//Esta es la conexion con La API del Servicio de Normalización de Datos Geográficos de https://datosgobar.github.io/georef-ar-api/

function provincia() {
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then (json=> {
        let options = '<option value="Elige una provincia">Elige una provincia</option>';
    
        json.provincias.forEach(element => options += `<option value="${element.nombre}">${element.nombre}</option>`);

        selectProvincias.innerHTML = options;
            
        });
    }

d.addEventListener("DOMContentLoaded", provincia)

function departamentos(provincia) {
    fetch(`https://apis.datos.gob.ar/georef/api/departamentos?provincia=${provincia}`)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let options = `<option value="Elige un departamento">Elige un departamento</option>`;

        json.departamentos.forEach(el => options += `<option value="${el.id}">${el.nombre}</option>`);

        selectDepartamentos.innerHTML = options;
    })
    .catch(error => {
        let message = error.statusText || "Ocurrió un error";

        selectDepartamentos.nextElementSibling.innerHTML = `Error: ${error.status}: ${message}`;
    })
}

//Remueve el Disabled al select de Departamentos al elegir una Provincia, y ejecuta la funcion departamentos(provincia)

selectProvincias.addEventListener("change", e => {
	selectDepartamentos.removeAttribute('disabled');
    departamentos(e.target.value);
})


//Expresiones usadas para la Validacion de  los campos (inputs).

const formulario = d.getElementById ('formulario');
const inputs= document.querySelectorAll('#formulario input');
const expresiones= {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
// Al hacer click en submit se comprobaran los atributos de campos, si todos son true: El formulario esta llenado correctamente

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false,
	provincia: false,
	departamento: false,
	fecha: false
}

//Esta es la funcion que realizara la validacion propiamente dicha (inputs)

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

// Agrega y Quita los estilos de Validacion de los Selects del grupo__residencia

//Para las Provincias

selectProvincias.addEventListener("change", e => {
	if(selectProvincias.value != "Elige una provincia"){
		document.getElementById('grupo__residencia').classList.remove('formulario__grupo-incorrecto');
		document.getElementById('grupo__residencia').classList.add('formulario__grupo-correcto');
		document.getElementById('grupo__residencia2').classList.remove('formulario__grupo-correcto');
		document.querySelector('#grupo__residencia i').classList.add('fa-check-circle');
		document.querySelector('#grupo__residencia i').classList.remove('fa-times-circle');
		document.querySelector('#grupo__residencia .formulario__input-error').classList.remove('formulario__input-error-activo');
		campos.provincia = true;
	} else {
		document.getElementById('grupo__residencia').classList.add('formulario__grupo-incorrecto');
		document.getElementById('grupo__residencia').classList.remove('formulario__grupo-correcto');
		document.getElementById('grupo__residencia2').classList.remove('formulario__grupo-correcto');
		document.querySelector('#grupo__residencia i').classList.add('fa-times-circle');
		document.querySelector('#grupo__residencia i').classList.remove('fa-check-circle');
		document.querySelector('#grupo__residencia .formulario__input-error').classList.add('formulario__input-error-activo');
		campos.provincia = false;
	}

})

//Para los Departamentos

selectDepartamentos.addEventListener("change", e => {
	if(selectDepartamentos.value != "Elige un departamento"){
		document.getElementById('grupo__residencia2').classList.remove('formulario__grupo-incorrecto');
		document.getElementById('grupo__residencia2').classList.add('formulario__grupo-correcto');
		document.querySelector('#grupo__residencia2 i').classList.add('fa-check-circle');
		document.querySelector('#grupo__residencia2 i').classList.remove('fa-times-circle');
		document.querySelector('#grupo__residencia2 .formulario__input-error').classList.remove('formulario__input-error-activo');
		campos.departamento = true;
	} else {
		document.getElementById('grupo__residencia2').classList.add('formulario__grupo-incorrecto');
		document.getElementById('grupo__residencia2').classList.remove('formulario__grupo-correcto');
		document.querySelector('#grupo__residencia2 i').classList.add('fa-times-circle');
		document.querySelector('#grupo__residencia2 i').classList.remove('fa-check-circle');
		document.querySelector('#grupo__residencia2 .formulario__input-error').classList.add('formulario__input-error-activo');
		campos.departamento = false;
	}

});

// Se usa el widget datepicker de jquery para la fecha de nacimiento.
//Las fechas validas de nacimiento son hasta 18 años atras de la fecha actual; para solo admitir usuarions mayores de edad.

$("#datepicker").datepicker( {
	changeMonth: true,
	changeYear: true,
	maxDate: "-18y",
	yearRange: "1904:2022",
	onSelect: function(d,i){
		if(d !== i.lastVal){
			$(this).change();
		}
   }
});

//Validacion de los campos del grupo fecha

$('#datepicker').change(function(){
	document.getElementById('grupo__fecha').classList.remove('formulario__grupo-incorrecto');
	document.getElementById('grupo__fecha').classList.add('formulario__grupo-correcto');
	document.querySelector('#grupo__fecha i').classList.add('fa-check-circle');
	document.querySelector('#grupo__fecha i').classList.remove('fa-times-circle');
	document.querySelector('#grupo__fecha .formulario__input-error').classList.remove('formulario__input-error-activo');
	campos.fecha = true;
});

	

	

// Agrega y Quita los estilos de Validacion de los campos (INPUTS)

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}
// Agrega y Quita los estilos de Validacion de los campos de password y los compara para comprobar si son iguales

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

//Event Listener para desencadenar la funcion de validacion: Al sosltar tecla y al perder focus

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

//Boton Submit del formulario

const submitFormulario = d.getElementById("submitFormulario");

submitFormulario.addEventListener('click', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked && campos.provincia && campos.departamento && campos.fecha ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});