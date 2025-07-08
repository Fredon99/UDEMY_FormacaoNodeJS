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

            const error = true

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

//Resolvendo problema de aninhamento de promises porém de modo bloqueante com async await
console.log("Iniciando escript ...")
async function main() {
    const userID = await pegarID()
    const {id, email} = await buscaEmailBanco(userID)
    

    try {
        const emailData = await enviarEmail(id, email, "Corpo de email teste")
        console.log(emailData)
        console.log("Mensagem enviada com sucesso!")

        // throw new Error("Deu ruim aqui")
    } catch (error) { //O catch pega tanto erros das promises como erros dentro do bloco try
        console.error("Falha ao enviar email")
        console.error(error)
    }

    console.log("Bloqueante - Finalizando bloco de promises com async await...")
    
};

main()

console.log("Não bloqueante - Finalizando escript ...")