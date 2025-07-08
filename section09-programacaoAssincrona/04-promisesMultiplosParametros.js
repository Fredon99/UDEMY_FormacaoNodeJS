function enviarEmail (remetente, destinatario, corpo, error) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (error) {
                reject({
                    errorCode: 500,
                    errorMessage: "Internal server error"
                })
            } else {
                resolve ({
                    time: 10,
                    host: "mail.host",
                    body: `
                    De: ${remetente}
                    Para: ${destinatario}
                    -------------------------
                    Corpo: ${corpo}
                    `
                })
            }
        }, 2000)
    })
};

// Promisses eu só posso utilizar um único parametro, caso eu precise utilizar vários parametros é necessário um json
enviarEmail("Fred", "José", "Mensagem enviada como teste", true).then( (emailBody) => {
    console.log(emailBody)
    console.log("Mensagem enviada com sucesso!")
    }
).catch( ({errorCode, errorMessage}) => { //Desestruturação do objeto
    console.log("Falha ao enviar email:", errorMessage)
    console.log("Código do erro para análise:", errorCode)
    }
)