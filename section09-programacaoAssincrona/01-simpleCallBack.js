function enviarEmail (remetente, destinatario, tipo, callback) {
    setTimeout(() => {
        console.log(`
            ----------------------------------------
            -> CALLBACK do tipo: ${tipo}
            ----------------------------------------
            De: ${remetente}
            Para: ${destinatario}
            -----------------------
            < mensagem que será enviada ao destinatário. >
            `)

            callback(remetente,destinatario)
    }, 5000)
};

function emailSuccessful(remetente, destinatario) {
    console.log(`O email do remetente: ${remetente} foi entregue com sucesso para o destinatario: ${destinatario}`)
};

console.log("Inicio do envio de email ...");

//Posso enviar através de uma função externa
enviarEmail("Fred", "José", "funcao externa", emailSuccessful);

//Posso enviar diretamente passando a função
enviarEmail("Fred", "José", "funcao direta", (remetente, destinatario) => {
    console.log(`O email do remetente: ${remetente} foi entregue com sucesso para o destinatario: ${destinatario}`)
});

console.log("Email enviado com sucesso ... (mensagem errada)");  //Será impressa a mensagem dizendo que foi enviado com sucesso antes do término do envio