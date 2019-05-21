(() => {
    //stub
    console.log('fired!');

    // select elements with Javascript

    // setting up a variable using the let keyword,
    // and using a CSS selector to find the element we want to use.

    //let stores the reference to element as a variable(in memory)
    let svgGraphic = document.querySelector("#badgeSVG"),
        mainHeadline = document.querySelector(".main-headline"),
        topic = document.querySelector(".topic");


    // functions are reusable pieces of code
    // that can run any timetime
    function logMyId(){
        console.log(this.id);

        this.style.opacity =0.5;
    }

    svgGraphic.addEventListener("click", logMyId);

    mainHeadline.textContent = "Now you're something else!";
    topic.textContent = "Javascript Lesson";

})();
