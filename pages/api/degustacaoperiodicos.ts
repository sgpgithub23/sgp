import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const url = `${process.env.NEXT_GET_INFOS_SGP_CONTATO}?action=1&model=periodicosdegustacao`
        const result = await axios.get(url, {
            params: {
                tipo: req.body.tipo,
                ano: req.body.ano,
                mes: req.body.mes,
            },
        })
        res.status(200).json(result.data)
    } catch (error) {
        console.log('error', error)
        res.status(400).json({ error: 'error' })
    }
}
