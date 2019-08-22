import { LoremIpsum } from "lorem-ipsum";


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
    body: new LoremIpsum({
      sentencesPerParagraph: {
        max: Math.floor(Math.random() * 10),
        min: 0
      },
      wordsPerSentence: {
        max: Math.floor(Math.random() * 10),
        min: 0
      }
    })
  }
}