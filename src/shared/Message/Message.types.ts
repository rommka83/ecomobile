type color = "error" | "info";

export interface IMessage {
  type: color;
  message: string;
}
