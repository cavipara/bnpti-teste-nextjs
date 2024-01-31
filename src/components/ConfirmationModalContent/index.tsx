import { confirmationTypeProps } from "@/types/confirmation-type";
import styles from "./style.module.css";

interface ConfirmationModalContentProps {
  type: confirmationTypeProps;
}

export const ConfirmationModalContent: React.FC<
  ConfirmationModalContentProps
> = ({ type }: ConfirmationModalContentProps) => {
  const isDelete = type === "delete";

  if (isDelete) {
    return (
      <div className={styles.confirmationContentContainer}>
        <h3>Tem certeza que deseja excluir o usuário?</h3>
        <p>Essa ação será irreversível</p>
      </div>
    );
  }

  return (
    <div className={styles.confirmationContentContainer}>
      <h3>Tem certeza que deseja desativar o usuário?</h3>
      <p>
        Essa ação desativará o usuário temporariamente. Posteriormente, você
        poderá ativá-lo.
      </p>
    </div>
  );
};
