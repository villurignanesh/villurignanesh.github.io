/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Iris Movement and Eye Gaze Tracking",
    authors:
      "Gnaneswar Villuri",
    researchYr: " In this work, I put some light on the new system in which using the eye as an interface to communicate with a system for people that are severely paralyzed or affected by diseases in which they are unable to move or control most of their body parts except for their eyes. This paper gives an overview of different techniques and describes the best possible methods of Iris movement and Gaze Tracking techniques. The main purpose of the system is the motion analysis method and finding Horizontal Ratio to Find the Direction of Vision i.e., Left, Right or Centre.",
    citebox: "popup1",
    image: "assets/images/research-page/Iris.png",
    citation: {
      vancouver:
        "Paper Published in IJSER Volume 9, Issue4, April 2021 Edition (ISSN 2229-5518)",
    },
    abstract:
      "This paper gives an overview of different techniques and describes the best possible methods of Iris movement and Gaze Tracking techniques",
    absbox: "absPopup1",
  },
  
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="researchY">${researchYr}</div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
