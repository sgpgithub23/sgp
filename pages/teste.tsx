import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
// @ts-ignore
import styles from "../styles/Modal.module.scss";

export default function Teste() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [hasScrolledPast25Percent, setHasScrolledPast25Percent] =
    useState(false);

  const handleScroll = () => {
    const scrollPercent =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
      100;
    if (scrollPercent >= 25 && !hasScrolledPast25Percent) {
      setHasScrolledPast25Percent(true);
      setModalIsOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolledPast25Percent]);

  const afterOpenModal = () => {
    document.body.style.overflow = "hidden";
  };

  // Função para habilitar a rolagem da página quando o modal for fechado
  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <p>teste</p>
      <Transition
        appear
        show={modalIsOpen}
        as="div"
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterEnter={() => {
          document.body.style.overflow = "hidden";
        }}
        afterLeave={() => {
          document.body.style.overflow = "auto";
        }}
      >
        <Dialog open={modalIsOpen} onClose={closeModal}>
          {/* Aqui vem o conteúdo do modal */}
          <div>
            <h2>Modal de Exemplo</h2>
            <p>
              Este é um modal que aparecerá quando você rolar 25% da página.
            </p>
            <button onClick={closeModal}>Fechar Modal</button>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
