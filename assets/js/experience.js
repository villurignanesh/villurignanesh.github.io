AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Research Assistant (Part-time)",
    cardImage: "assets/images/experience-page/sbu.png",
    place: "Stony Brook University",
    time: "(Jan, 2023 - Present)",
    desp: "<ol><li>Working on ONR Sponsored Research Project under Professor Alex Doboli.</li><li> Spearheaded groundbreaking research funded by the Office of Naval Research (ONR) on consensus-building dynamics using NLP tools, resulting in a remarkable 24% improvement in optimizing team strategies.</li><li>Conducted comprehensive analysis on data collected from more than 50 team interactions involving 3 speakers, leading to a significant 24% improvement in consensus-reaching strategies.</li><li>Integrated Whisper, a cutting-edge speech-to-text conversion technology, into the research framework, enabling 15% faster and 27% more accurate insights extraction and analysis.</li></ol>",
  },
  {
    title: "Software Developer Intern - Zippi Delivery",
    cardImage: "assets/images/experience-page/zippi.png",
    place: "Stony Brook",
    time: "(May, 2023 - Aug, 2023)",
    desp: "<ol><li>Developed a cross-platform application(Web and Mobile App) that streamlined the ordering process for customers which increased the number of orders by more than 60%. Used flutter and firebase. Implemented Stripe as a payment gateway for secure online transactions. Try The App (Use 3A Detmer Rd, East Setauket, NY as Address)</li><li> Optimized the search algorithm in a way that customers can order from multiple restaurants within the same order. This new feature attracted over 1000 new customers and resulted in a 40% increase in daily order volume.</li></ol>",
  },
  {
    title: "Software Developer",
    cardImage: "assets/images/experience-page/ABDA.png",
    place: "ABDA Digital",
    time: "(Nov, 2020 - Jan, 2022)",
    desp: "<ol><li>Developed web components for making light, portable, and mobile-centric content that can be shared using SMS or Email. Worked on front-end Technologies like HTML, CSS & JavaScript, and frameworks like JQuery, Bootstrap and Groovy on grails.</li><li>Enhaced the usability of the designer tool by adding dynamic functionalities like undo-redo, ruler, alignment gridlines, draggable, and resizable.</li><li>Boosted user experience scores by 45% over company’s previous best.</li><li>Awarded as Top 50 Emerging Startups from India by NASSCOM(for our flagship product Hola Enterprise).</li></ol>",
  },
  {
    title: "Associate Software Engineer",
    cardImage: "assets/images/experience-page/Accenture.jpg",
    place: "Accenture",
    time: "(Jan, 2022 - June, 2022)",
    desp: "<ol><li>Contributed to creating a responsive user interface for the client, which increased their customer satisfaction by 30% and customer acquisition by 50%.</li> <li>Redesigned the client's website, resulting in a 25% increase in traffic.</li></ol>",
  },
  {
    title: "Business Development Intern",
    cardImage: "assets/images/experience-page/treksome.png",
    place: "Treksome",
    time: "(May, 2019 - Jun, 2019)",
    desp: "<ol><li>I am the in the promotion team, We are a team of four people working on marketing and promotions. I discussed some marketing strategies and promotion ideas for the organization which increased the sales of our organization by over 40%</li></ol>",
  },
  {
    title: "Social Media Marketing Intern",
    cardImage: "assets/images/experience-page/internshala.png",
    place: "Internshala",
    time: "(Jun, 19 - Aug, 20)",
    desp: "<ol><li>Created awareness about Internshala internships and training, organizing seminars to find their dream internships.</li></ol>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// // Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Hamari Pahchan",
    cardImage: "assets/images/experience-page/hamari.jpeg",
    description:
      "Me as a volunteer in it took my responsiblity of Fundrising and Social Marketing as my priviledge and worked with atmost dedication and perseverance",
  },
  // {
  //   title: "StudentCode-in 2020",
  //   cardImage: "assets/images/experience-page/2.jpg",
  //   description:
  //     "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  // },
  // {
  //   title: "PClub Summer Of Code 2020",
  //   cardImage: "assets/images/experience-page/3.jpg",
  //   description:
  //     "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  // },
  // {
  //   title: "Hakin-Codes",
  //   cardImage: "assets/images/experience-page/4.jpg",
  //   description:
  //     "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Web3athon",
    subtitle: "Participant",
    image: "assets/images/experience-page/web3athon.png",
    desp: "A Hyperlocal, people-first crypto Hackathon",
  },
  // {
  //   title: "ULHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/ulhacks.png",
  //   desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  // },
  // {
  //   title: "WaffleHacks",
  //   subtitle: "Judge",
  //   image: "assets/images/experience-page/wafflehacks.png",
  //   desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  // },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
