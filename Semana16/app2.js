const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');



//listeners
cargarEventListeners();

function cargarEventListeners(){
    //Dispara cuando se presiona "agregar carrito"
    cursos.addEventListener('click', comprarCurso);


    //cuando se elimina un curso del carrito
    carrito.addEventListener('click',eliminarCurso);
}




// funciones
//funcion que añade el curso al carrito
function comprarCurso(e) {
    e.preventDefault();
    //delegacion para agregar-carrito
    if(e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        //enviamos el cuerso seleccionado para tomar sus datos
        leerDatosCurso(curso) ;
    }
}
//lee datos del curso
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')

    }

    insertarCarrito(infoCurso);
}

//muestra el curso seleccionado en el carrito
function insertarCarrito(curso){
    const row=document.createElement('tr');
    row.innerHTML= ` 
  
  <td>
  <img src="${curso.imagen}" width=100>
  </td>
  <td>${curso.tituto}</td>
  <td>${curso.precio}</td>

  <td>
  <a href="#" class="borrar-curso" data-id="${curso.id}
  ">X</a>
  </td> 
        
     `;
    listaCursos.appendChild(row);
}
//elimina el curso del carrito en el DOM

function eliminarCurso(e){
   e.preventDefault();

   let curso;
   if (e.target.classList.contains('borrar-curso')){
       e.target.parentElement.parentElement.remove();
   }

   
}















