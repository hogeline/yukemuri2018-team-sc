const QUESTIONS_LEVEL_ENDPOINT = "https://dev.prog24.com/meta_nasi.json";
export const getQuestions = () => {
  return fetch(`${QUESTIONS_LEVEL_ENDPOINT}`, sentData)
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
