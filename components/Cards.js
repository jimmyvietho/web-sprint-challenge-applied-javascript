// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
// 
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((response) => {
    const articlesArray = Object.values(response.data.articles);

    articlesArray.forEach((category) => {
      category.forEach((article) => {
        document.querySelector(".cards-container").appendChild(card(article));
      });
    });
  })
  .catch((err) => {
    console.log("errorResponse", err);
  });

const card = (article) => {
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const divHeadline = document.createElement("div");
  divHeadline.classList.add("headline");
  divHeadline.textContent = article.headline;

  const divAuthor = document.createElement("div");
  divAuthor.classList.add("author");

  const imgContainerDiv = document.createElement("div");
  imgContainerDiv.classList.add("img-container");

  const img = document.createElement("img");
  img.src = article.authorPhoto;

  const span = document.createElement("span");
  span.textContent = `By ${article.authorName}`;

  divCard.append(divHeadline, divAuthor);
  divAuthor.append(imgContainerDiv, span);
  imgContainerDiv.append(img);

  divCard.addEventListener("click", () => {
    console.log(`The headline for this article is ${article.headline} `);
  });

  document.querySelector(".cards-container").append(divCard);

  return divCard;
};
 