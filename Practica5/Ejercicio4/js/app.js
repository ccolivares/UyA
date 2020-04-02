var usu1 = {
    "DNI": "45165298Z",
    "Nacimiento": 1987,
    "Ingreso": 2014,
    "Productividad": 40,
    "SueldoBase": 1500
}

var usu2 = {
    "DNI": "23091999Y",
    "Nacimiento": 1993,
    "Ingreso": 2016,
    "Productividad": 20,
    "SueldoBase": 1200
}

var usu3 = {
    "DNI": "20323098J",
    "Nacimiento": 1970,
    "Ingreso": 1990,
    "Productividad": 50,
    "SueldoBase": 1700
}


document.getElementById('Usuario1').innerHTML = "DNI: " + (usu1.DNI);
document.getElementById('Edad1').innerHTML =" Edad: " + (2020 - usu1.Nacimiento) + " años";
document.getElementById('Sueldo1').innerHTML = " Sueldo: " + (usu1.SueldoBase * (1 + 0.01 * (2020 - usu1.Ingreso) / 3 + usu1.Productividad / 100)) + "€" ;
document.getElementById('Usuario2').innerHTML = "DNI: " + (usu2.DNI);
document.getElementById('Edad2').innerHTML =" Edad: " + (2020 - usu2.Nacimiento) + " años";
document.getElementById('Sueldo2').innerHTML = " Sueldo: " + (usu2.SueldoBase * (1 + 0.01 * (2020 - usu2.Ingreso) / 3 + usu2.Productividad / 100)) + "€" ;
document.getElementById('Usuario3').innerHTML = "DNI: " + (usu3.DNI);
document.getElementById('Edad3').innerHTML =" Edad: " + (2020 - usu3.Nacimiento) + " años";
document.getElementById('Sueldo3').innerHTML = " Sueldo: " + (usu3.SueldoBase * (1 + 0.01 * (2020 - usu3.Ingreso) / 3 + usu3.Productividad / 100)) + "€" ;
