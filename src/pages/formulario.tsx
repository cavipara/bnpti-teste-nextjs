/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import styles from "@/styles/formulario.module.css";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { useToast } from "@/context/ToastContex";
import { ToastMessage } from "@/components/ToastMessage";

type FormInputs = {
  name: string;
  email: string;
};

const FormSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Email inválido" }),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormInputs>();
  const { toastMessages, showToast } = useToast();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const validatedData = FormSchema.parse(data);
      await axios.post("/api/users/create", validatedData);
      showToast({
        id: String(Math.random()),
        message: "Usuário criado com sucesso",
        type: "success",
        duration: 3000,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        for (const issue of error.issues) {
          if (typeof issue.path[0] === "string") {
            setError(issue.path[0] as keyof FormInputs, {
              message: issue.message,
            });
          }
        }
      } else {
        const axiosError = error as AxiosError;
        console.error(axiosError.message);
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", { required: true })}
              placeholder="Nome"
            />
            {errors.name && <span>{errors.name?.message}</span>}

            <input
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email && <span>{errors.email?.message}</span>}

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <div className={styles["toast-container"]}>
        {toastMessages.map((toast) => (
          <ToastMessage key={toast.id} content={toast} />
        ))}
      </div>
    </>
  );
}
