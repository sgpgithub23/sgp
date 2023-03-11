import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
    try {
        const url = `${process.env.NEXT_GET_INFOS_SGP_CONTATO}?action=1`
        const result = await axios.get(url, {
            params: {
                model: req.body.model
            }
        })
        res.status(200).json(result.data)
    } catch (error) {
        console.warn("ERRO API", error)
    }
}