/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import styles from "@/styles/context-api.module.css";
import { IToastMessage } from "@/types/toast-message";
import { ToastMessage } from "@/components/ToastMessage";
import { useToast } from "@/context/ToastContex";

export default function ContextApi() {
  const { toastMessages, showToast } = useToast();

  const messages: Array<IToastMessage> = [
    {
      id: "1",
      message: "Mensagem de sucesso",
      type: "success",
      duration: 3000,
    },
    {
      id: "2",
      message: "Mensagem de erro",
      type: "error",
      duration: 3000,
    },
  ];

  function handleSuccessButtonClick() {
    showToast({
      ...messages[0],
      id: String(Math.random()),
    });
  }

  function handleErrorButtonClick() {
    showToast({
      ...messages[1],
      id: String(Math.random()),
    });
  }

  return (
    <>
      <div className={styles.container}>
        <button type="button" onClick={handleSuccessButtonClick}>
          Disparar mensagem de sucesso
        </button>
        <button type="button" onClick={handleErrorButtonClick}>
          Disparar mensagem de erro
        </button>
      </div>

      <div className={styles["toast-container"]}>
        {toastMessages.map((toast) => (
          <ToastMessage key={toast.id} content={toast} />
        ))}
      </div>
    </>
  );
}
