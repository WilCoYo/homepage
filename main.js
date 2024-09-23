

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const phrases = ["Web Developer", "Full-Stack Engineer", "Software Engineer"];
  const el = document.getElementById("typeWriter");

  let sleepTime = 100;

  let curPhraseIndex = 0;

  const writeLoop = async () => {
    while (true) {
      let curWord = phrases[curPhraseIndex];

      for (let i = 0; i < curWord.length; i++) {
        el.innerText = curWord.substring(0, i + 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 15);

      for (let i = curWord.length; i > 0; i--) {
        el.innerText = curWord.substring(0, i - 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 5);

      if (curPhraseIndex === phrases.length - 1) {
        curPhraseIndex = 0;
      } else {
        curPhraseIndex++;
      }
    }
  };

  writeLoop();




                                    // Slide In From Right and Left
const slidingElementsRight = document.querySelectorAll(".slideIn-animation");
const slidingElementsLeft = document.querySelectorAll(".slideIn-animation-left");

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    function checkElement(el) {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    }

    slidingElementsRight.forEach(checkElement);
    slidingElementsLeft.forEach(checkElement);
}

window.addEventListener('scroll', checkBoxes);
window.addEventListener('load', checkBoxes);


                                               






                                                // Preloader Function

let loader = document.getElementById("preloader");

window.addEventListener("load", function() {
    setTimeout(function() {
        // Start the fade-out transition
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1000);

    // Optional: remove the preloader from DOM after transition
    loader.addEventListener("transitionend", function() {
        document.body.removeChild(loader);
    });
});

                                          // Back Video scroll opacity

// window.addEventListener('scroll', function() {  
//     let background = document.getElementById("back-video");
//     let scrollTop = window.scrollY || this.document.documentElement.scrollTop;
//     background.style.opacity = 1 - scrollTop / 500;
// })

