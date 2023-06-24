import { FC } from "react";
import s from "./logo.module.css";

interface Props {
  children?: never;
}

export const Logo: FC<Props> = () => {
  return <h1 className={s.logo}>Билетопоиск</h1>;
};
