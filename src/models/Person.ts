import Alias from "./Alias"

export default interface Person {
  id: number,
  name: string,
  aliases: Alias[]
}