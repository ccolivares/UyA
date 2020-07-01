//Inicializacion 
document.addEventListener('DOMContentLoaded', function() {
    var options = {
        data: {
            "HTML": null,
            "CSS": null,
            "Angular": 'https://placehold.it/250x250'
          },
        onAutocomplete: function(texto){
        //console.log(`diste clic ${texto}`);
        respuesta.innerHTML= ` <h3>Usted está buscando: ${texto} </h3>`;
        }
    }
    
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems, options);
  });

  const respuesta = document.getElementById('respuesta')

/*
Las lineas que irián en html serían:

 <!--haciendo esto-->
   <div class="container section white-text">
    <div class="row ">
        <div class="input-field col s6">
            <i class="material-icons prefix">search</i>
            <input type="text" id="buscar" class="autocomplete">
            <label for="buscar">Buscar...</label>
        </div>
    </div>
  
    <div class="container" id="respuesta">
      

    </div>
*/