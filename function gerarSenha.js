function gerarSenha(tamanho) {
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    var senha = '';
    for (var i = 0; i < tamanho; i++) {
        var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indiceAleatorio];
    }
    return senha;
}

console.log(gerarSenha(10)); // Gera uma senha de 10 caracteres