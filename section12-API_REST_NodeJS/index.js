import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";

const PORT = 3002;
const app = express();

const JWTSecret = "aljkdjflsfslkdjflsfjkdlsjfs";

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function auth(req, res, next) {
    const authToken = req.headers['authorization'];

    if (authToken !== undefined) {
        const token = authToken.split(" ")[1];
        jwt.verify(token,JWTSecret, (err, data) => {
            if (err) {
                res.status(401).json({error: "Token invalido"});
            } else {

                //consigo adicionar algo no objeto de requisicao
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email};

                next(); //somente vou para rota com token válido
            }
        })
    } else {
        res.status(401).json({error: "Não autorizado"})
    }

}

let DB = {
    games: [
        {
            id: 23,
            title: "call of duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: "Sea of thieves",
            year: 2018,
            price: 40
        },
        {
            id: 2,
            title: "Minecraft",
            year: 2012,
            price: 20
        }
    ],
    users: [
        {
            id: 1,
            name: "Frederico",
            email: "fred@email.com",
            password: "teste123"
        },
        {
            id: 2,
            name: "Miriã",
            email: "miria@email.com",
            password: "testando123"
        }
    ]
};

//rotas
app.get("/", (req, res) => {
    res.status(200).json({message: "Welcome to games API"})
});

app.get("/games", auth, (req, res) => {
    res.status(200).json(DB.games);
});

app.get("/game/:id", (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        res.status(400).send({errorMessage: "Isso não é um válido"});
    }

    const game = DB.games.find( (game) =>  game.id === id);

    if (game) {
        res.status(200).json(game);
    } else {
        return res.status(400).json({message: "Nenhum game encontrado com esse id"});
    }
});

app.post("/game", (req, res) => {
    let {title, price, year} = req.body;

    const maxId = Math.max(... DB.games.map(item => item.id)) + 1;

    DB.games.push({
        id: maxId,
        title: title,
        year: year,
        price: price
    });

    res.status(200).json(DB.games);

});

app.delete("/game/:id", (req, res) => {
    const id = parseInt(req.params.id);

    if ( isNaN(id) || parseInt(id) < 0 ) {
        res.status(400).send({errorMessage: "Isso não é um válido"});
    }

    const index = DB.games.findIndex( (game) =>  game.id === id);
    
    DB.games.splice(index, 1);

    res.status(200).json(DB.games);
});


app.post("/auth", (req, res) => {
    let {email, password } = req.body;

    if (email !== undefined) {

        let user = DB.users.find( user => user.email === email );

        if (user !== undefined) {

            if (user.password === password) {
                // nunca se armazena dados sensíveis no token - no payload
                jwt.sign({id: user.id, email: user.email}, JWTSecret, {expiresIn: '24h'}, (err, token) => {
                    if (err) {
                        res.status(500).json({tokenError: "Falha ao criar token"});
                    } else {
                        res.status(200).json({token: token});
                    }
                });
            } else {
                res.status(401).json({error: "Credenciais inválidas"})
            }

        } else {
            res.status(400).json({error: "O usuário não é válido"});
        }

    } else {
        res.status(400).json({error: "O email enviado não é válido"});
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} ...`);
});