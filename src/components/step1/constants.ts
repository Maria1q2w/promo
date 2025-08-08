import { CoinIcon } from "../../assets";
import { FieldMapItem } from "./types";

export const FIELD_MAP: Array<FieldMapItem> = [
  {
    name: 'name',
    type: 'input',
    label: 'Название промокода',
    placeholder: 'Введи название',
    rules: 'required',
  },
  {
    name: 'title',
    type: 'input',
    label: 'Заголовок',
    placeholder: 'Введи заголовок',
    rules: 'required',
  },
  {
    name: 'description',
    type: 'textarea',
    label: 'Сопроводительный текст',
    placeholder: 'Например: «Ты попал в число счастливчиков! Дарим 300 баллов»',
    rules: 'required',
  },
  {
    name: 'coins',
    type: 'input',
    label: 'Укажи количество баллов',
    placeholder: '100',
    rules: 'required',
    icon: CoinIcon,
  }
]
