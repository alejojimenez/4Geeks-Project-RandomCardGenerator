randomCard = () => {   // Pasar al HTML la pica y el valor de la Carta //
    let elm = card();  
    elm.className = ('style=color:blue;');
    document.getElementById("simbolTop").innerHTML = elm;
    document.getElementById("cardNumber").innerHTML = numberCenter();        
    document.getElementById("simbolBottom").innerHTML = elm;
    console.log("Negro", elm.className);
    // Si es igual a Corazones o Diamantes, cambiar el color a Rojo
    if(elm === '&hearts;' || elm === '&diams;'){   
        document.getElementById("simbolTop").classList.add("cardColorRed");
        document.getElementById("simbolBottom").classList.add("cardColorRed");
    };
};

card = () => {    // Obtener Pica de la Carta
    let simbol = ['&spades;','&clubs;','&hearts;','&diams;'];
    // asignar posicion de arreglo segun random
    let simbolId = Math.floor(Math.random() * simbol.length);
    pica = simbol[simbolId];
    return pica;
};

numberCenter = () => {    // Obtener el Numero de la Carta
    let value = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    // asignar posicion de arreglo segun random
    let valueId = Math.floor(Math.random() * value.length);
    return value[valueId];
};