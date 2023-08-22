import Busboy from 'busboy';
import { NextApiRequest, NextApiResponse } from 'next';

import { promisify } from 'util';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { MailOptions } from 'nodemailer/lib/json-transport';

export const config = {
	api: {
		bodyParser: false,
	},
};

const emails = {
	1: "atendimento@sgpsolucoes.com.br",
	2: "rosangela.tartarotti@sgpsolucoes.com.br",
	3: "valdir.moda@sgpsolucoes.com.br",
	4: "gilberto.oliveira@sgpsolucoes.com.br",
}

export const subjects = {
	"Acesso Login": [1, 2],
	"Agenda Cursos": [1, 2],
	"Artigos": [3],
	"Assessoria Jurídica In Loco": [1, 2, 3],
	"Assessoria On Line Hora Certa": [1, 2, 3],
	"Assessoria para Empresas Privadas": [1, 2, 3],
	"Certificados": [1, 2],
	"Cursos": [1, 2],
	"Documentações": [1, 2],
	"Dúvidas Jurídicas": [1,2],
	"Implantações de Leis": [1, 2, 3],
	"Livros": [1, 2],
	"MBA": [1, 2],
	"Mentoria": [1, 2, 3],
	"Orientações SGP": [1, 2, 3, 4],
	"Outras informações": [1, 2],
	"Periódicos": [1, 2],
	"Projeto LGPD": [1, 2, 3],
	"Publique seu artigo conosco": [1, 4],
	"Regulamentação e/ou Revisão Legislativa": [1, 2, 3],
	"Revista": [1, 2],
	"Treinamentos": [1, 2],
	"Visita Agendada": [1, 2, 3],
}

interface Fields {
	name: string, 
	email: string, 
	cep?: string, 
	cpf?: string, 
	city?: string, 
	state?: string, 
	address?: string, 
	phone:string, 
	message? :string, 
	facebook?: string,
	tel: string,
	subject: keyof typeof subjects,
	attachment: Buffer,
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const fields: Fields = { 
		name: "", 
		email: "", 
		cep: "", 
		cpf: "", 
		city: "", 
		state: "", 
		address: "", 
		phone:"", 
		tel: "",
		facebook: "",
		message: "",
		subject: "Acesso Login",
		attachment: Buffer.from(''),
	}

	const busboy = Busboy({ headers: req.headers });

	try {
		busboy.on('field', (field: keyof typeof fields, value: any) => {
			if (field !== "attachment") {
				fields[field] = value;
			}
		});

		busboy.on('file', (_, file, fileInfo) => {
			file.on('data', async (chunk: Buffer) => {
				fields.attachment = Buffer.concat([fields.attachment, chunk]);
			});
		});

		busboy.on('finish', async () => {
			console.log({ fields })
			const transporter = nodemailer.createTransport({
				// host: process.env.NEXT_PUBLIC_URL_SMTP_LOCAWEB!,
				host: "sandbox.smtp.mailtrap.io",
				port: 2525,
				auth: {
					user: 'c416bf7ba3f9d2',
					pass: '4e4f29ea9273b7'
				}
			});

			const emailsData = emails as any;
			const emailsToSend = subjects[fields.subject]?.map((item) => emailsData[item]) || []

			await Promise.all(emailsToSend.map(async email => {
				const mailOptions: MailOptions = {
					from: 'atendimento@sgpsolucoes.com.br',
					to: email,
					subject: fields.subject,
					text: Object.entries(fields).map(([ key, value ]) => key === "attachment" ? "" : `<p>${key}: ${value}</p>`).join(""),
					attachments: [{ filename: "Arquivo.pdf", content: fields.attachment }]
				};

				const sendMailAsync = promisify<any, SMTPTransport.SentMessageInfo>(transporter.sendMail).bind(transporter);
				const info = await sendMailAsync(mailOptions);
	
				console.log(`E-mail enviado com sucesso para ${email}. Assunto: ${fields.subject}!`, info.response);
			}))

			res.status(200).send({ message: "E-mail sent" })
		});

		busboy.on('error', (error: any) => {
			return res.status(400).json({ error: error.error || error.message });
		});

		req.pipe(busboy);
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);

		res.status(500).send({ error })
  }
}