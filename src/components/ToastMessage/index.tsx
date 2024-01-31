import { useState } from "react";

import { IToastMessage } from "@/types/toast-message.d";

import styles from "./style.module.css";
import { useToast } from "@/context/ToastContex";

type ToastMessageProps = {
  content: IToastMessage;
};

export const ToastMessage: React.FC<ToastMessageProps> = ({
  content: data,
}) => {
  const { hideToast } = useToast();
  return (
    <div
      className={styles.container}
      data-toast-type={data.type}
      data-toast-id={data.id}
    >
      <span data-content>{data.message}</span>

      <span data-close onClick={() => hideToast(data.id)}>
        ╳
      </span>
    </div>
  );
};
