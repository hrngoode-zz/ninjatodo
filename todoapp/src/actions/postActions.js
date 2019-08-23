import { LoremIpsum } from "lorem-ipsum";

let li = new LoremIpsum({
  sentencesPerParagraph: {
    max: 6,
    min: 3
  },
  wordsPerSentence: {
    max: 55,
    min: 30
  }
})


export const deletePost  = (id) => {
  return {
    type: "DELETE_POST",
    id: id
  }
}

export const uploadPost = (id, title, body) => {
  return {
    type: "UPLOAD_POST",
    id: Math.floor(Math.random() * 10000), 
    title: title,
    body: li.generateSentences(1)
  }
}