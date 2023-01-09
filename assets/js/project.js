AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Experimental assessment of the state of the art on classification",
    cardImage: "assets/images/project-page/classification.png",
    description: "Comparing various classification algorithms",
    Previewlink: "https://github.com/villurignanesh/Experimental-assessment-of-the-state-of-the-art-on-classification",
    Githublink: "https://github.com/villurignanesh/Experimental-assessment-of-the-state-of-the-art-on-classification",
  },
  {
    title: "Decision Tree Classification Algorithms",
    cardImage: "assets/images/project-page/decisiontree.png",
    description: "This project the implemention of the Decision Tree Induction algorithm for classification using python on 15 benchmark datasets",
    Previewlink: "https://github.com/villurignanesh/Decision-Tree-Classification",
    Githublink: "https://github.com/villurignanesh/Decision-Tree-Classification",
  },
  {
    title: "FPGrowth Algorithm",
    cardImage: "assets/images/project-page/fpgrowth.png",
    description: "This project shows how I used Python to construct the FPGrowth algorithm on 20 Benchmark test datasets",
    Previewlink: "https://github.com/villurignanesh/FPGrowth",
    Githublink: "https://github.com/villurignanesh/FPGrowth",
  },
  {
    title: "HOLA ENTERPRISE DESIGNER TOOL",
    cardImage: "assets/images/project-page/hola.jpeg",
    description: "Created a tool which can generate customizable videos using different Web Based Components",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://www.holaenterprise.com/",
    Githublink: "https://github.com/villurignanesh/Building-Components-of-Hola-Enterprise",
  },
  {
    title: "Forecasting High School Dropouts %",
    cardImage: "assets/images/project-page/hs.png",
    description: "Used a python module named Prophet, Which provides a practical approach to recasting ”at scale”",
    Previewlink: "https://github.com/villurignanesh/Forecasting-Future-trends-using-FBProphet",
    Githublink: "https://github.com/villurignanesh/Forecasting-Future-trends-using-FBProphet",
  },
  {
    title: "Tic Tac Toe Game",
    cardImage: "assets/images/project-page/tic-tac-toe.png",
    description:
      "Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/villurignanesh/Tic-Tac-Toe",
    Githublink: "https://github.com/villurignanesh/Tic-Tac-Toe",
  },
  {
    title: "Battery Life Calculator",
    cardImage: "assets/images/project-page/battery.png",
    description: "Built battery life calculator using Python.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://github.com/villurignanesh/Battery-Calculator",
    Githublink: "https://github.com/villurignanesh/Battery-Calculator",
  },
  {
    title: "Movie Recommendation Engine",
    cardImage: "assets/images/project-page/music.jpg",
    description: "Built using Python.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
