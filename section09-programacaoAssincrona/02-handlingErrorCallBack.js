function enviarEmail (remetente, destinatario, error, callback) {
    setTimeout(() => {
        if (error) {
            callback(12, "Status 500 - Internal server error");
        } else {
            console.log(`
            --------------------------------
            -> REALIZADO O ENVIO DO EMAIL
            --------------------------------
            De: ${remetente}
            Para: ${destinatario}
            -----------------------
            < mensagem que será enviada ao destinatário. >
            `)
            callback(12);
        }
    }, 5000);
};

console.log("Realizando o envio do emiail ...");

enviarEmail("Fred", "José", false, (spentTime, errorMessage) => {
    if (errorMessage == undefined) {
        console.log("Email enviado com sucesso!")
        console.log("Tempo gasto em segundos:", spentTime)
    } else {
        console.log("Houve um erro ao enviar o email:",errorMessage)
        console.log("Tempo gasto em segundos:", spentTime)
    }
});