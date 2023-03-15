import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse, params: any) {
    console.warn("CHEGIY iuoqiwue")
    try {
        const url = `${process.env.NEXT_PUBLIC_GET_INFOS_SGP_CONTATO}?action=1&model=periodicosdegustacao`
        const result = await axios.get(url, {
            params: {
                tipo: req.query.tipo,
                ano: req.query.ano,
                mes: req.query.mes,
            },
            headers: {
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        res.status(200).json(result.data)
    } catch (error) {
        console.log('error', error)
        res.status(400).json({ error: 'error' })
    }
}
