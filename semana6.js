function teclado(){

		console.log(event.type);
		console.log(event.code);

		if(event.code=="KeyW")
		{
			console.log("Presionaste la W");
			var n1=document.getElementById("frase").value;
			var n2=document.getElementById("cuadro");

			n2.className="cuadrow";
			n2.innerHTML='<center><h1>'+n1+'</h1></center>';
		}

		if(event.code=="KeyX")
		{
			console.log("Presionaste la X");
			var n1=document.getElementById("frase").value;
			var n2=document.getElementById("cuadro");

			n2.className="cuadrox";
			n2.innerHTML='<center><h1>'+n1+'</h1></center>';
		}

		if(event.code=="KeyK")
		{
			console.log("Presionaste la K");
			var n1=document.getElementById("frase").value;
			var n2=document.getElementById("cuadro");

			n2.className="cuadrok";
			n2.innerHTML='<center><h1>'+n1+'</h1></center>';
		}
	}
