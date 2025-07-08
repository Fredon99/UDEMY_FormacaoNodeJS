function enviarEmail (remetente, destinatario, corpo, error) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (error) {
                reject("Error 500 - Internal server error")
            } else {
                resolve (`
                    De: ${remetente}
                    Para: ${destinatario}
                    -------------------------
                    Corpo: ${corpo}
                    `
                )
            }
        }, 2000)
    })
};

// Promisses eu só posso utilizar um único parametro, caso eu precise utilizar vários parametros é necessário um json
enviarEmail("Fred", "José", "Mensagem enviada como teste", false).then( (emailBody) => {
    console.log(emailBody)
    console.log("Mensagem enviada com sucesso!")
    }
).catch( (errorMessage) => {
    console.log("Falha ao enviar email:", errorMessage)
    }
)