/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from "react";
import Head from "next/head";

import styles from "@/styles/modal.module.css";
import { Modal } from "@/components/Modal";
import { ConfirmationModal } from "@/components/ConfirmationModal";
import { ConfirmationModalContent } from "@/components/ConfirmationModalContent";
import { confirmationTypeProps } from "@/types/confirmation-type";

const buttons: { text: string; type: confirmationTypeProps }[] = [
  {
    text: "Abrir modal de confirmação (Deletar)",
    type: "delete",
  },
  {
    text: "Abrir modal de confirmação (Desativar)",
    type: "deactivate",
  },
];

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeConfirmation, setActiveConfirmation] =
    useState<confirmationTypeProps>("delete");

  const handleConfirmationModalClick = (type: confirmationTypeProps) => {
    setActiveConfirmation(type);
    setModalIsOpen(true);
  };

  const onModalConfirm = () => {
    setModalIsOpen(false);
    if (activeConfirmation === "delete") {
      return alert("Usuário deletado");
    }
    return alert("Usuário desativado temporariamente");
  };

  return (
    <>
      <main className={styles.container}>
        {buttons.map((button, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleConfirmationModalClick(button.type)}
          >
            {button.text}
          </button>
        ))}
      </main>

      <ConfirmationModal
        title="Confirmação"
        onConfirm={onModalConfirm}
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <ConfirmationModalContent type={activeConfirmation} />
      </ConfirmationModal>
    </>
  );
}
