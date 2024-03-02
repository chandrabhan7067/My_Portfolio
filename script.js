let imgsContainer = document.querySelector('.imgs');
let backBtn = document.getElementById('backbtn');
let nextBtn = document.getElementById('nextbtn');


backBtn.addEventListener('click', scrollBack);
nextBtn.addEventListener('click', scrollNext);

function scrollBack() {
    let gallery = document.querySelector(".gallery")
    console.log(gallery.offsetWidth)
    //imgsContainer.style.scrollBehavior = "smooth";
    imgsContainer.scrollLeft -= gallery.offsetWidth; // Adjust the scroll distance as needed
}

function scrollNext() {
    let gallery = document.querySelector(".gallery")
    console.log(gallery.offsetWidth)
    //imgsContainer.style.scrollBehavior = "smooth";
    imgsContainer.scrollLeft += gallery.offsetWidth; // Adjust the scroll distance as needed
}


function checkScrollProfile(){
    let profiles = document.getElementsByClassName("profile")
    let thresold = window.innerHeight/5*4;

    Array.from(profiles).forEach((profile,index )=> {
        let topDist = profile.getBoundingClientRect().top;

        if(topDist < thresold){
            if(index == 0){
                profile.classList.add('animate-left')
            }
            else if(index == 1){
                profile.classList.add('animate-bottom')
            }
            else if(index == 2){
                profile.classList.add('animate-right')
            }
            
        }
        else{
            profile.classList.remove('animate-left', 'animate-bottom', 'animate-right');
        }

    });

}

window.addEventListener("scroll", checkScrollProfile)



const sentences = [
    "Software Engineer",
    "Frontend Developer",
    "Data Scientist"
  ];
  
  const aboutDiv = document.querySelector('.running-words');
  let currentIndex = 0;
  
  function displayNextSentence() {
    const currentSentence = sentences[currentIndex];
    currentIndex = (currentIndex + 1) % sentences.length;
  
    let charIndex = 0;
    const displayInterval = setInterval(() => {
      const currentChar = currentSentence[charIndex];
      if (currentChar === undefined) {
        clearInterval(displayInterval);
        setTimeout(() => {
          aboutDiv.textContent = '';
          displayNextSentence();
        }, 1000); // Delay before displaying next sentence
      } else {
        aboutDiv.textContent += currentChar;
        charIndex++;
      }
    }, 100); // Speed of displaying characters
  }
  
  displayNextSentence();
  