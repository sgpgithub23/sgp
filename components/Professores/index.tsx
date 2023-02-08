import { ProfessoresType } from '@/typings/Professores';
import { InfosProfessor } from '@/utils/professores';
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react'
import { BsArrowLeftCircle, BsPersonCircle } from 'react-icons/bs';
import { HiMagnifyingGlass } from 'react-icons/hi2'
import Input from '../Input'
import styles from "./Professores.module.scss"

export default function ProfessoresComponent() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ProfessoresType>();

    function modalState(content: ProfessoresType) {
        setIsModalOpen(!isModalOpen);
        setModalContent(content)
    }

    return (
        <div className={styles.mainContentForm}>
            <div className={styles.introduction}>
                <div className={styles.left}>
                    <h2>Nossos Professores</h2>
                    <span>
                    Professores qualificados que transferem conhecimento e experiências.
                    </span>
                </div>
                <div className={styles.right}>
                    <Input
                        withIcon
                        placeholder="Pesquisar professor..."
                        label=""
                        type="text"
                        icon={<HiMagnifyingGlass />}
                    />
                </div>
            </div>
            <div className={styles.professoresTodos}> 
                {InfosProfessor.map((x) => (
                    <div className={styles.professor} onClick={() => modalState(x)}>
                        <div role="button">

                        </div>
                        <p role="button">
                    <span>
                      <BsPersonCircle /> Conferir detalhes
                    </span>
                  </p>
                    </div>
                ))}
            </div>
            <p>
                Confira a lista completa{" "}
                <b style={{ cursor: "pointer" }}>clicando aqui!</b>
            </p>
            <Transition appear show={isModalOpen} as={Fragment}>
            <Dialog as="div" style={{zIndex: 40}} onClose={() => setIsModalOpen(false)}>
              <div className={styles.fullBodyModal}>
                <div className={styles.bodyModalStarted}>
                    <Dialog.Panel className={styles.modalPanel}>
                      <div className={styles.voltarParaInicio} onClick={() => setIsModalOpen(false)}>
                        <BsArrowLeftCircle/>
                        <span>Voltar para o início</span>
                      </div>
                      <Dialog.Title
                        as="h3"
                        className={styles.modalTitle}
                      >
                        <span>{modalContent?.nome} - Currículo</span>
                      </Dialog.Title>
                      <div className={styles.contentAboveTitle}>
                        <span>
                            {modalContent?.linkCurriculo}
                        </span>
                      </div>
                    </Dialog.Panel>
                </div>
              </div>
            </Dialog>
      </Transition>
        </div>
    )
}
