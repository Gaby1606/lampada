let body=document.querySelector("body");

let div01= document.createElement("div");
div01.setAttribute("id", "interruptor")
let imagemInterruptor=document.createElement("img")
imagemInterruptor.setAttribute("id", "switch")
imagemInterruptor.src="./imagens/interruptorOff.jpg"

let div02=document.createElement("div")
div02.setAttribute("id", "lampada")
let imagemLampada=document.createElement("img")
imagemLampada.setAttribute("id", "lampada")
imagemLampada.src="./imagens/luzOff.jpg"

div01.append(imagemInterruptor);
body.append(div01);

div02.append(imagemLampada)
body.append(div02)

let interruptor=document.querySelector("#switch");
let lampada=document.querySelector("#lampada");

interruptor.style.width="150px";

interruptor.addEventListener('click', () => {
    if(imagemLampada.src ='./imagens/luzOn.jpg'){
        lampada.src = "./imagens/luzOff.jpg";
        body.setAttribute("style", "background-color:#FFFAFA")
        interruptor.src='./imagens/interruptorOff.jpg';
        interruptor.src='./imagens/interruptorOn.jpg';
    }else{
        lampada.src = "./imagens/luzOff.jpg";
        body.setAttribute("style", "background-color:#1C1C1C")     
        interruptor.src='./imagens/interruptorOn.jpg';
        interruptor.src='./imagens/interruptorOff.jpg'
}
})
