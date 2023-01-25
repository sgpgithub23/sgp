import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Navbar from '@/components/Navbar'
import { useSpringCarousel } from 'react-spring-carousel'
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"
import Button from '@/components/Button'

export default function Home() {
  const { 
    carouselFragment, 
    slideToPrevItem, 
    slideToNextItem, 
  } = useSpringCarousel({
    itemsPerSlide: 1,
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
    </>
  )
}
