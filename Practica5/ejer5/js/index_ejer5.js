//Parte 5 Funciones que me cuentan el numero de parrafos enlaces y encabezados.
    function contador_parrafos() {

        document.write ("El número de párrafos es:  \n"+ document.getElementsByTagName('p').length);
        
    }
    function contador_enlaces() {

        document.write ("El número de enlaces es:  \n"+ document.getElementsByTagName('a').length);
   
    }

    function contador_encabezados() {
        let encabezados =  ["h1","h2","h3","h4","h5","h6"];
        let resultado = 0;
        for(var i=0;i<=encabezados.length;i++){
            resultado +=  document.getElementsByTagName(encabezados[i]).length;
        }
        document.write("El numero de encabezados es: \n" + resultado );
        
   
    }



    
