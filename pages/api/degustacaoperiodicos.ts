import { extractErrorMessages } from "@/utils/tratamento-erros";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { tipo, ano, mes } = JSON.parse(req.body);

    let errorsFromRequisition: any[] = [];

    const url = `${process.env.NEXT_PUBLIC_GET_INFOS_SGP_CONTATO}?action=1&model=periodicosdegustacao`;
    const { data } = await axios.get(url, {
        params: {
            tipo: tipo,
            ano: ano,
            mes: mes,
        },
    });
    
    errorsFromRequisition = extractErrorMessages(data);

    if(errorsFromRequisition.length > 0) {
        return res.status(404).json({errors: errorsFromRequisition})
    }

    res.status(200).json(data);
}
