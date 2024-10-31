function fibonacci(num) {
    let a = 0, b = 1, temp;

    // Caso o número seja 0 ou 1, já retorna que pertence à sequência
    if (num === 0 || num === 1) {
        return true;
    }

    while (b <= num) {
        temp = b;
        b = a + b;
        a = temp;

        // Se o número for encontrado na sequência, retorna verdadeiro
        if (b === num) {
            return true;
        }
    }

    // Se o loop terminar e o número não for encontrado, retorna falso
    return false;
}

// Função para testar e imprimir o resultado
function verificarNumeroFibonacci(numero) {
    if (fibonacci(numero)) {
        console.log(numero + " pertence à sequência de Fibonacci.");
    } else {
        console.log(numero + " não pertence à sequência de Fibonacci.");
    }
}

// Exemplo de uso
let numero = 13;  // Insira o número que você quer verificar
verificarNumeroFibonacci(numero);
