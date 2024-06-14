alert('Bem Vindos ao jogo do Número Secreto');
let numeroSecreto=5;
console.log (numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao numero secreto
while (chute!=numeroSecreto)
{
    chute = prompt('Escolha um número entre 1 e 10');
    //Se chute for igual numero secreto
    if (chute == numeroSecreto) 
    {
        alert(`Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
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