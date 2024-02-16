
//se declara una funcion, se  define los argunmentos y la operacion
//a retornar 
Funcion area <- calcularAreaTriangulo ( base, altura )
	
	area <- (base * altura) / 2
Fin Funcion
Funcion areacuadrado <- calcularareacuadrado (lado, lado)
	areacuadrado <- (lado * lado)
FinFuncion

Algoritmo Funciones 
	// vamos a llamar a nuestra funcion (invocar)
	
	area <- calcularAreaTriangulo (5,8) ;
	escribir "El area del triangulo es: ", area;
	
	
	areacuadrado <- calcularareacuadrado (6,6) ;
	Escribir "El area del cuadrado es : ", areacuadrado;
	
FinAlgoritmo
