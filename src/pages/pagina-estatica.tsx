/**
 * Página estática
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 */

import styles from "@/styles/lista.module.css";
import { ICity } from "@/types/city.d";
import { GetStaticProps } from "next/types";
import { getCityList } from "./api/cities/[length]";

type ListaProps = {
  cityList: ICity[];
};

export default function Lista({ cityList }: ListaProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Lista de cidades</h2>

        <div data-list-container>
          {cityList.map((city) => (
            <div data-list-item key={city.id}>
              {city.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const cityList = await getCityList(10);

  return {
    props: {
      cityList,
    },
    revalidate: 60, // 1 minute
  };
};
