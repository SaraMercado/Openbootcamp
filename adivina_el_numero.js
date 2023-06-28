// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Juego simple que pide al usuario que adivine un numero en 10 intentos
function adivina_numero() {
	var intentos, num_ingresado, num_secreto;
	intentos = 10;
	num_secreto = Math.floor(Math.random()*100)+1;
	document.write("Adivine el numero (de 1 a 100):",'<BR/>');
	num_ingresado = prompt();
	while (num_secreto!=num_ingresado && intentos>1) {
		if (num_secreto>num_ingresado) {
			document.write("Muy bajo",'<BR/>');
		} else {
			document.write("Muy alto",'<BR/>');
		}
		intentos = intentos-1;
		document.write("Le quedan ",intentos," intentos:",'<BR/>');
		num_ingresado = Number(prompt());
	}
	if (num_secreto==num_ingresado) {
		document.write("Exacto! Usted adivino en ",11-intentos," intentos.",'<BR/>');
	} else {
		document.write("El numero era: ",num_secreto,'<BR/>');
	}
}

