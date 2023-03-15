import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next';
import locaweb from 'smtp-locaweb-nodejs' 



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const url = process.env.NEXT_PUBLIC_URL_SMTP_LOCAWEB!
        const result = axios.post(url, {
            data: {
                "to": "string",
                "subject": "Um título bem legal!!!",
                "from": "suporte@bytechsolutions.com.br",
                "body": "O conteúdo da mensagem.",
                "cc": "suporte@bytechsolutions.com.br"
            }, 
        })
        res.status(200).json((await result).data)
    } catch (error) {
        console.log('error', error)
    }
}

// let mensagem = {  
//     to: ['barbarapereira123@hotmail.com'],
//     subject: 'Um título bem legal!!!',
//     from: 'babi.silva1163@gmail.com',
//     body: 'O conteúdo da mensagem.',
//     cc: ['copia_opcional@email.com'],
//     headers: {
//         "Content-Type": "text/plain", 
//         "x-auth-NEXT_PUBLIC_TOKEN": process.env.NEXT_PUBLIC_TOKEN,
//         "x-source": "https://api.smtplw.com.br/v1/messages"
//     }
// }

// var email = new locaweb.Email(mensagem);

// locaweb.sendMail(email);