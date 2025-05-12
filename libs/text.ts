import { loremIpsum } from "lorem-ipsum"

export default function MakeText(length: number = 5): string {
  const text = loremIpsum({
    sentenceLowerBound: 3,
    sentenceUpperBound: length,
  })
  return text
}
