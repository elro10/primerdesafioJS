const names = prompt("Bienvenido, ¿Cómo es tu nombre?").trim();
const saludo=(nombre) => { return alert("Hola "+nombre+ " muchas gracias por elegirnos") };
saludo(names);
    const inicio = prompt("¿Necesitas un prestamo?").toLowerCase().trim();
    if (inicio=="si"){    
        alert("¡Genial! intentaremos ofrecerte el que más te convenga");
        document.write("Esto es lo que podemos ofrecerte"+"<br>");
        const amount = prompt("¿Cuánto necesitas")
        const interest = prompt("¿Qué tasa de interes te conviene?")
        const share = prompt("¿En cuántas cuotas lo quieres saldar?")
        console.log(share);
        function cuota(cantidad, interes, cuotas){
            return (cantidad*(1+(interes/100))/cuotas).toFixed(2);
        }
        let cuotas = cuota(amount, interest, share);
        console.log(cuota);
        var capAmort = (amount/share).toFixed(2);
        var inter = (amount*interest/1000).toFixed(2)
        console.log(cuota);
        for(let i=1;i<=share;i++)
        document.write("El valor de tu cuota "+i+" es de "+ cuotas + " (pagarás "+capAmort+" de capital y "+inter+" de interés)" +"<br>")
    }
    else if (inicio=="no"){
    let goodbye= alert ("Muchas gracias por visitarnos")
    }
    else{
        const non= alert ("No puedo comprenderte, por favor responde si o no, muchas gracias")
    }
