// const QUESTIONS_LEVEL_ENDPOINT = "https://dev.prog24.com/meta_nasi.json";
const sentData = {
  method: "GET",
  mode: "cors",
  header: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "multipart/form-data"
  },
  body: ""
};
export const getQuestions = () => {
  return fetch("https://dev.prog24.com/meta_nasi.json", sentData)
    .then(result => result.json())
    .then(resultJson => {
      console.log(resultJson);
      return resultJson["questions"].map(question => {
        return {
          id: question.id,
          title: question.title
        };
      });
    });
};
