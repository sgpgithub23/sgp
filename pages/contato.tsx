import Head from "next/head";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import Input from "@/components/Input";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Contato.module.scss";
import inputStyles from "../components/Input/Input.module.scss";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FooterCompleto } from "@/components/FooterCompleto";
import { useRouter } from "next/router";
import { FormContato } from "@/typings/FormContato";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelephone,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RedesSociaisSGP } from "@/utils/redes-socias";
import Link from "next/link";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Button from "@/components/Button";

const schema = yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório"),
  mensagem: yup.string().required("Campo obrigatório"),
  arquivo: yup.mixed().nullable().required("A file is required"),
  assunto: yup.string().required("Campo obrigatório"),
  celular: yup.string().required("Campo obrigatório"),
  conheceusgp: yup.string().required("Campo obrigatório"),
  dataEnvio: yup.date().required("Campo obrigatório"),
  empresa: yup.string().required("Campo obrigatório"),
  facebook: yup.string().required("Campo obrigatório"),
  // telComl: yup.string().required("Campo obrigatório"),
});

const initialValues = {
  nome: "",
  email: "",
  mensagem: "",
  arquivo: undefined,
  assunto: "",
  celular: "",
  conheceusgp: "",
  dataEnvio: new Date(),
  empresa: "",
  facebook: "",
  telComl: "",
};

export default function Contato() {
  const {
    push,
    query: { assuntoForm },
  } = useRouter();
  const [ isLoading, setIsLoading ] = useState(false);
  const captchaRef = useRef(null);

  const [recaptchaResponse, setRecaptchaResponse] = useState<any>();

  const {
    register,
    formState: { errors, isValid, isSubmitting },
    getValues,
    reset,
    setValue,
  } = useForm<FormContato>({
    defaultValues: initialValues,
    mode: "all",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (assuntoForm && assuntoForm.length > 1) {
      setValue("assunto", String(assuntoForm));
    }
  }, [assuntoForm]);

  function getIconByName(rede: string) {
    if (rede === "Facebook") {
      return <BsFacebook />;
    }

    if (rede === "Youtube") {
      return <BsYoutube />;
    }

    if (rede === "LinkedIn") {
      return <BsLinkedin />;
    }

    if (rede === "Twitter") {
      return <BsTwitter />;
    }

    if (rede === "Instagram") {
      return <BsInstagram />;
    }
  }

  const onSubmit = async () => {

    // const response = await fetch("/api/verify-token", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ token: recaptchaResponse }),
    // });

    // const result = await response.json();

    setIsLoading(true)

    try {
      const name = getValues("nome");
      const company = getValues("empresa");
      const email = getValues("email");
      const knowSGP = getValues("conheceusgp");
      const facebook = getValues("facebook");
      const subject = getValues("assunto");
      const phone = getValues("celular");
      const message = getValues("mensagem")
      const tel = getValues("telComl");
      const sendDate = getValues("dataEnvio");
      const attachment = getValues("arquivo");

      const formData = new FormData();

      formData.append('name', name);
      formData.append('company', company);
      formData.append('email', email);
      formData.append('knowSGP', knowSGP);
      formData.append('facebook', facebook);
      formData.append('subject', subject);
      formData.append('phone', phone);
      formData.append('message', message);
      formData.append('tel', tel);
      formData.append('sendDate', sendDate.toString());
      formData.append('attachment', attachment);
      formData.append('subject', subject);

      const { data } = await axios.post("/api/sendEmail", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-auth-token": process.env.NEXT_PUBLIC_TOKEN!,
          "x-source": process.env.NEXT_PUBLIC_URL_SMTP_LOCAWEB!,
          // "User-Agent": "locaweb-smtp-nodejs",
        },
      });

      setIsLoading(false)
      reset()
    } catch (error) {
      setIsLoading(false);
      console.error(error)
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if(file)
      setValue("arquivo", file, { shouldValidate: true });
  }

  return (
    <div className={styles.main}>
      <Head>
        <title>SGP - Soluções em Gestão Público</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.content}></div>
      <div className={styles.pageSize}>
        <div className={styles.mainContentForm}>
          <div className={styles.introduction}>
            <h2>Inicie um contato preenchendo o formulário</h2>
            <span>
              Disponibilizamos vários canais de comunicação e este é um deles
              para que você possa se comunicar mais rápido conosco!
            </span>

            <ul>
              <li>Central de Atendimento</li>
              <li>
                {" "}
                <BsTelephone /> (11) 3237-4232
              </li>
              <li>
                {" "}
                <BsTelephone /> (11) 97443-5898
              </li>
              <li>
                {" "}
                <AiOutlineMail /> atendimento@sgpsolucoes.com.br
              </li>
            </ul>

            <div>
              {RedesSociaisSGP.map(({ link, name }) => (
                <Link
                  href={link}
                  key={link}
                  target="_blank"
                  className={styles.rede}
                >
                  {getIconByName(name)}
                </Link>
              ))}
            </div>

            <Image
              src={"/images/contato/mulher-sorrindo.webp"}
              alt="Bolo de chocolate"
              width={416}
              height={435}
              className={"imgOnHover"}
            />
          </div>
          <form className={styles.formContato}>
            <div>
              <Input
                type="text"
                label="Empresa"
                required
                register={register("empresa")}
                placeholder="Razão social completo"
                error={errors.empresa?.message}
              />

              <div className={inputStyles.main}>
                <label htmlFor="subject-dropdown">Assunto</label>
                <select id="subject-dropdown" className={inputStyles.inputComum} onChange={e => setValue("assunto", e.target.value)}>
                  <option value="Acesso Login">Acesso Login</option>
                  <option value="Agenda Cursos">Agenda Cursos</option>
                  <option value="Artigos">Artigos</option>
                  <option value="Assessoria Jurídica In Loco">Assessoria Jurídica In Loco</option>
                  <option value="Assessoria On Line Hora Certa">Assessoria On Line Hora Certa</option>
                  <option value="Assessoria para Empresas Privadas">Assessoria para Empresas Privadas</option>
                  <option value="Certificados">Certificados</option>
                  <option value="Cursos">Cursos</option>
                  <option value="Documentações">Documentações</option>
                  <option value="Dúvidas Jurídicas">Dúvidas Jurídicas</option>
                  <option value="Implantações de Leis">Implantações de Leis</option>
                  <option value="Livros">Livros</option>
                  <option value="MBA">MBA</option>
                  <option value="Mentoria">Mentoria</option>
                  <option value="Orientações SGP">Orientações SGP</option>
                  <option value="Outras informações">Outras informações</option>
                  <option value="Periódicos">Periódicos</option>
                  <option value="Projeto LGPD">Projeto LGPD</option>
                  <option value="Publique seu artigo conosco">Publique seu artigo conosco</option>
                  <option value="Regulamentação e/ou Revisão Legislativa">Regulamentação e/ou Revisão Legislativa</option>
                  <option value="Revista">Revista</option>
                  <option value="Treinamentos">Treinamentos</option>
                  <option value="Visita Agendada">Visita Agendada</option>
                </select>
              </div>

            </div>
            <div>
              <Input
                name="email"
                type="email"
                label="E-mail"
                required
                register={register("email")}
                error={errors.email?.message}
                placeholder="email@dominio.com.br"
              />
              <Input
                name="nome"
                label="Nome"
                type="text"
                required
                register={register("nome")}
                error={errors.nome?.message}
                placeholder="Nome completo"
              />
            </div>
            <div>
              <Input
                name="telComl"
                type="text"
                label="Telefone"
                required
                register={register("telComl")}
                error={errors.telComl?.message}
                placeholder="(99) 99999-9999"
                mask="(99) 99999-9999"
              />
              <Input
                name="celular"
                label="Celular"
                required
                mask="(99) 99999-9999"
                register={register("celular")}
                error={errors.celular?.message}
                placeholder="(99) 99999-9999"
              />
            </div>
            <div>
              <Input
                name="conheceusgp"
                label="Como conheceu a SGP?"
                required
                register={register("conheceusgp")}
                error={errors.conheceusgp?.message}
                placeholder="Escreva aqui"
              />
              <Input
                name="facebook"
                type="text"
                label="Facebook"
                register={register("facebook")}
                error={errors.facebook?.message}
                placeholder="facebook.com/nomedeusuario"
              />
            </div>
            <div>
              <Input
                name="mensagem"
                type="text"
                required
                label="Mensagem"
                as="textarea"
                register={register("mensagem")}
                error={errors.mensagem?.message}
                placeholder="Descreva sua mensagem de forma detalhada aqui, e logo será respondido."
              />
            </div>
            <div>
              <Input
                name="arquivo"
                as="file"
                required
                onChange={handleFileUpload}
                label={getValues("arquivo")?.name || getValues("arquivo")?.[0]?.name || "Anexe seu arquivo"}
                register={register("arquivo")}
                error={errors.arquivo?.message}
              />
              <Input
                name="dataEnvio"
                type="date"
                required
                label="Data do envio"
                register={register("dataEnvio")}
                error={errors.dataEnvio?.message}
              />
            </div>
            <div className={styles.informacoes}>
              <p>Campos obrigatórios*</p>
              <p>
                Ao enviar sua mensagem, você autoriza receber comunicações do
                SGP - Soluções em Gestão Pública, podendo cancelar a qualquer
                momento. Consulte nossa{" "}
                <b onClick={() => push("/documentacoes/politica-privacidade")}>
                  Política de Privacidade
                </b>
                .
              </p>
            </div>
            {/* <ReCAPTCHA
              // @ts-ignore
              sitekey={process.env.NEXT_PUBLIC_API_RECAPTCHA_SIE}
              ref={captchaRef}
              onChange={(value) => setRecaptchaResponse(value)}
            /> */}
            <div className={styles.buttonPosition}>
              <Button
                color="grey"
                title="Limpar"
                onClick={() => reset(initialValues)}
              />

              <Button
                color="darkBlue"
                title={isLoading ? "Enviando..." : "Enviar informações"}
                disabled={isSubmitting || isLoading || !isValid}
                onClick={onSubmit}
              /> 
            </div>
          </form>
        </div>
      </div>
      {/* <WhatsappIcon /> */}
      <FooterCompleto />
    </div>
  );
}
