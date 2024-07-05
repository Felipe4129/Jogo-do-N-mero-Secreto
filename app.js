alert('Bem Vindos ao jogo do Número Secreto');
let numeroMaximo = 5000;
let numeroSecreto= parseInt(Math.random () *numeroMaximo+1);
console.log (numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao numero secreto
while (chute!=numeroSecreto)
{   
    chute = prompt (`Escolha um numero de 1 a ${numeroMaximo}`);
    //se chute for igual ao numero secreto
    if (chute == numeroSecreto) 
    {
        break;
    } 
    else 
    {
        if (chute > numeroSecreto) 
        {
            alert(`O número secreto é menor que ${chute}`);
        } 
        else 
        {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;   
    }   
}

let palavaTentativa=tentativas>1? 'tentativas' : 'tentativa';
alert(`Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavaTentativa}.`);

/*
if(tentativas>1)
{
    alert(`Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
}
else
{
    alert(`Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
*/