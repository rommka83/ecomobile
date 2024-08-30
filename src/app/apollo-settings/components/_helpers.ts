import { v4 as uuidv4 } from 'uuid';

export const generateCorrelationId = () => {
  return uuidv4()
}

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}

export function numberWithSpaces(value: number) {
  let parts = value.toString().split(".")
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ")

  return parts.join(".")
}

export function priceWithSpaces(value: any) {
  return numberWithSpaces(parseInt(value) / 100) + '\u00A0₽'
}