function createABlog() {
  const storedArticles = JSON.parse(localStorage.getItem("articles")) || [];
  renderArticles(storedArticles);
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const adminName = prompt("Admin Name");
    if (adminName !== "admin_name") return; // please modify "admin_name" with admin name
    let question = e.target.question.value;
    let answer = e.target.answer.value;
    const question_container = document.getElementById("question-container");
    const newArticle = document.createElement("article");
    newArticle.classList.add("space-y-3", "border-b-2", "pb-5");
    newArticle.innerHTML = `
          <h2 class="text-xl font-bold">
             <span class="text-red-600">Q${
               question_container.children.length + 1
             } :</span> ${question}
              </h2>
               <p class="text-justify">
                 <span class="text-green-600">Answer :</span> ${answer}
              </p>
          `;
    question_container.appendChild(newArticle);
    const newArticleInLocalStorage = {
      question: question,
      answer: answer,
    };
    storedArticles.push(newArticleInLocalStorage);
    localStorage.setItem("articles", JSON.stringify(storedArticles));
    e.target.reset();
  });
}

function renderArticles(articleFromStorage) {
  const question_container = document.getElementById("question-container");
  articleFromStorage.forEach((article) => {
    const newArticle = document.createElement("article");
    newArticle.classList.add("space-y-3", "border-b-2", "pb-5");
    newArticle.innerHTML = `
          <h2 class="text-xl font-bold">
             <span class="text-red-600">Q${
               question_container.children.length + 1
             } :</span> ${article.question}
              </h2>
               <p class="text-justify">
                 <span class="text-green-600">Answer :</span> ${article.answer}
              </p>
          `;
    question_container.appendChild(newArticle);
  });
}

createABlog();
