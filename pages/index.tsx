import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Navbar from '@/components/Navbar'
import { useSpringCarousel } from 'react-spring-carousel'
import { BsArrowLeftCircle, BsArrowRightCircle, BsFillArrowDownCircleFill } from "react-icons/bs"
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

import Button from '@/components/Button'
import Image from 'next/image'

export default function Home() {
  const { 
    carouselFragment, 
    slideToPrevItem, 
    slideToNextItem, 
  } = useSpringCarousel({
    itemsPerSlide: 3,
    withLoop: true,
    items: [
      {
        id: 'item-1',
        renderItem: (
          <div className={styles.imgBannerPublicacoes}>
              <div className={styles.boldHigher}>
                <span>
                Publicações de qualidade e que fazem a
                <span className={styles.italicTiny}> diferença! </span>
                </span>
                <Button title='Saber Mais Agora!' color='blue' />
              </div>
          </div>
        )
      },
      {
        id: 'item-2',
        renderItem: (
          <div className={styles.imgCaraGravata}>
            <div>
              <p className={styles.boldHigher}>Dream Team</p> 
              de <span className={styles.italicTiny}>Professores</span>, 
              <br /> Consultores e Técnicos 
              <Button title='Saber Mais Agora!' color='blue' />
              </div>
          </div>
        )
      },
      {
        id: 'item-3',
        renderItem: (
          <div className={styles.imgDuasConversando}>
            <span>
              <b>Pós Graduação </b> 
              com Professores de alto
              <em className={styles.italicTiny}> padrão </em>
              <Button title='Consultar disponibilidade' color='orange' />
            </span>


            {/* <img className={styles.imgCarousel} src="/images/carousel/duas-pessoas-conversando.webp" alt="Banner referente as publicações da SGP" /> */}
          </div>        
        )
      },
      {
        id: 'item-4',
        renderItem: (
          <div className={styles.imgHomemTelefone}>
            <div>
              <h3>Eventos In Company</h3>
              <span>Consulte nossa agenda de cursos e Treinamentos</span>
              <Button title='Consultar disponibilidade' color='blue' />
            </div>
          </div>
        )
      },
      {
        id: 'item-5',
        renderItem: (
          <div className={styles.imgMao}>
            <div>
              <Button title='Soluções Inovadoras em:' color='blue' />

            <p>Periódicos informativos
              Orientação Jurídica
              Cursos e Treinamentos
              <em> Eventos In Company </em>
              Assessorias para
              empresas privadas
            </p>
            </div>
          </div>
        )
      },
      {
        id: 'item-6',
        renderItem: (
          <div className={styles.imgMarcia}>
          </div>
        )
      },
      {
        id: 'item-7',
        renderItem: (
          <div className={styles.imgModelTresPessoas}>
            <div>
              <p><b>Capacitação</b> técnica que faz a diferença</p>
              <Button title='SGP é a solução!' color='blue' />

            </div>
          </div>
        )
      },
      {
        id: 'item-8',
        renderItem: (
          <div className={styles.imgModel}>
            <div>
              <p><b>Informação de qualidade</b>, 
              sempre atual seguindo as <em> boas práticas </em>
              do mercado.</p>
              <Button title='SGP é a solução!' color='blue' />

            </div>
          </div>
        )
      },
      {
        id: 'item-9',
        renderItem: (
          <div className={styles.imgPublico}>
            <div>
              <p><b>Cansado de</b> "cursinho" e "palestrinha"???</p>
              <Button title='SGP é a solução!' color='orange' />

            </div>
          </div>
        )
      },

    ]
  })

  const carouselParceiros = useSpringCarousel({
    itemsPerSlide: 2,
    withLoop: true,
    initialActiveItem: 1,
    items: [
      {
        id: "1", 
        renderItem: (
          <div className={styles.carouselParceirosItem}>
            <Image src={"/images/homepage/carousel/saae.png"} alt="araras" width={311} height={127}/>
          </div>
        )
      },
      {
        id: "2", 
        renderItem: (
          <div className={styles.carouselParceirosItem}>          
            <Image src={"/images/homepage/carousel/pg.png"} alt="araras" width={311} height={127}/>
          </div>
        )
      },
      {
        id: "3", 
        renderItem: (
          <div className={styles.carouselParceirosItem}>          
                    <Image src={"/images/homepage/carousel/araras.png"} alt="araras" width={311} height={127}/>
          </div>
        )
      },
      {
        id: "4", 
        renderItem: (
          <div className={styles.carouselParceirosItem}>    
            <Image src={"/images/homepage/carousel/sao-joaquim.png"} alt="araras" width={311} height={127}/>
          </div>
        )
      }
    ]
  })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.carouselSpace}>
          <button className={styles.slideToPrevItem} onClick={slideToPrevItem}>          
            <BsArrowLeftCircle />
          </button>
            {carouselFragment}
          <button className={styles.slideToNextItem} onClick={slideToNextItem}>
            <BsArrowRightCircle />
          </button>
        </div>
      </main>
      <section className={styles.quemsomos}>
        <div className={styles.descricao}>
          <h1>Quem somos, um pouco da história da SGP. </h1>
          <hr />
          <p>
            <b> Experientes profissionais do segmento de cursos e treinamentos de capacitação profissional </b>
            uniram esforços em uma nova empreitada, com o intuito de continuar a atualizar, informar, capacitar e trazer inovações aos profissionais que atuam na 
            <b> área do Direito Público.</b>
          </p>
          <p className={styles.descricaoPt2}>
            <b>Assim nasceu a SGP - Soluções em Gestão Pública, </b> 
            uma empresa que veio inovar no mercado de eventos técnicos e jurídicos, capacitação e aperfeiçoamento profissional, mas contando com uma 
            <b> equipe jurídica altamente qualificada,</b> 
            detentora de um know-how singular, obtido ao longo de mais de 20 anos de experiência no 
            <b> segmento da boa Gestão Pública.</b>
          </p>
        </div>
        <div className={styles.foto}>
          <Image 
            src={"/images/homepage/cidadesp.webp"} 
            alt='Foto do centro de São Paulo' 
            width={416}
            height={700}
          />
        </div>
        <div className={styles.icon}>
          <BsFillArrowDownCircleFill size="25px" />
        </div>
      </section>
      <section className={styles.clientesContribuintes}>
        <h1 className={styles.titleDarkBlue}>Clientes que fazem parte deste sucesso</h1>
        <div className={styles.spaceTitleCarousel}>
          <div className={styles.explicacao}>
            <p>Contar com clientes em potencial é o que nos motiva como empresa a cada ano.</p>
            <p>Vivenciando dificuldades e participando de experiências profissionais de nossos clientes, nos trouxe uma bagagem onde sempre podemos direciona-los por um caminho mais tranquilo, estratégico e muito mais profissional.</p>
            <p>Esta é a razão da SGP Soluções em ser sempre lembrada quando existir necessidade de se capacitar em cursos e treinamentos, adquirir um material com conteúdo didático ou orientações no segmento de Gestão Pública.</p>
          </div>
          <div className={styles.carouselAll}>
            <div className={styles.carousel}>
              {carouselParceiros.carouselFragment}
            </div>
            <div className={styles.controles}>
              <MdOutlineKeyboardArrowLeft onClick={carouselParceiros.slideToPrevItem} className={styles.arrowLeft}/>
              <MdOutlineKeyboardArrowRight onClick={carouselParceiros.slideToNextItem} className={styles.arrowRight}/>
              <span>Clique nos botões para interagir</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.comentarios}>
        <div className={styles.comentariosContent}>
          <h1 className={styles.titleDarkBlue}>
            Clientes e Parceiros comentam sobre a SGP...
          </h1>
          <div className={styles.sergio}>
            <div className={styles.nomefoto}>
              <Image 
                src={"/images/homepage/sergio.png"} 
                alt="Sergio Ferraz - Integrante do Conselho Editorial da SGP " 
                width={52}
                height={52}
              />
            <p>
              <b>Sergio Ferraz - </b>
              Integrante do nosso Conselho Editorial
            </p>
            </div>
            <div className={styles.review}>
              <Image 
                  src={"/images/homepage/rant-stars.svg"} 
                  alt="Sergio Ferraz - Integrante do Conselho Editorial da SGP " 
                  width={109}
                  height={15.71}
              />
              <div className={styles.linhaVertical}></div>
              <p>Avaliação - SGP</p>
            </div>
          </div>
          <p className={styles.comentarioSergio}>
            O periódico SLC - Solução em Licitações e Contratos é uma referência imprescindível, tanto para doutrinadores como para exercentes da advocacia. Trata-se do mais atualizado e abrangente repositório de tudo quanto se produz, em qualquer das vertentes do Direito, no campo da constatação administrativa.

          </p>
        </div>

      </section>
      <section>
        <div className={styles.periodicos}>
          <div className={styles.introducao}>
            <h1 className={styles.titleDarkBlue}>
              Conheça nossos periódicos exclusivos
            </h1> 
            <p>A SGP - Soluções em Gestão Pública atua no mercado editorial, oferecendo publicações especializadas mensais de qualidade e extremamente práticas, na área do Direito Público.</p>
          </div>
          <div className={styles.fotosPeriodicos}>
            <Image 
              src={"/images/homepage/periodicos/azul.png"} 
              alt='Foto do centro de São Paulo' 
              width={200.44}
              height={300.32}
            />
            <Image 
              src={"/images/homepage/periodicos/laranja.png"} 
              alt='Foto do centro de São Paulo' 
              width={200.44}
              height={300.32}
            />
          </div>
        </div>
      </section>
    </>
  )
}
