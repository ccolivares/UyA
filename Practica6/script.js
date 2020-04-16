 $(document).ready(function() {

  
    $('#enviodelboton').click(function(){
        numerador = document.querySelector("#valor_numerico").value;
       

        
        $.ajax({

                url: "https://jsonplaceholder.typicode.com/comments?",
                type: 'GET',
                data: `postId=${numerador}`,
                success : function(informacion){
                    for(const i in informacion ){
                        $('#etiqueta').append(`nombre: ${informacion[i].name} <br>`);
                        $('#etiqueta').append(`id: ${informacion[i].id} <br> `); 
                        $('#etiqueta').append(`email: ${informacion[i].email} <br>`);
                        $('#etiqueta').append(`cuerpo: ${informacion[i].body} <br>`);
                    }
                }

        });
    });
});


