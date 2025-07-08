function pegarID () {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(20)    
        }, 2000)
    })
};

function buscaEmailBanco (id) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({
                id: id,
                email: "email@teste.com"
            })    
        }, 2000)
    })
};

function enviarEmail (id, destinatario, corpo) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {

            const error = false

            if (error) {
                reject({
                    errorCode: 500,
                    errorMessage: "Internal server error"
                })
            } else {
                resolve ({
                    time: 10,
                    id: id,
                    destinatario: destinatario,
                    host: "mail.host",
                    body: corpo
                })
            }
        }, 2000)
    })
};

//Aninhamento de promises (pode dar muito problema, caso haja lógicas grandes, devido a fica difícil de manutenção)
console.log("Iniciando escript ...")
pegarID().then((id) => {
    buscaEmailBanco(id).then(({id, email}) => {
        enviarEmail(id, email, "Corpo teste de email").then((emailData) => {
            console.log("Email enviado com sucesso:", emailData)
        }).catch(() => {
            console.error("Erro ao enviar email")
        })
    })
    console.log("Não bloqueante - Finalizando bloco de promises ...")
});
console.log("Não bloqueante - Finalizando escript ...")