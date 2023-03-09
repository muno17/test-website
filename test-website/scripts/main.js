// change image if clicked on
const myImage = document.querySelector("img");

myImage.onclick = () => 
{
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/mixer.jpg") 
    {
        myImage.setAttribute("src", "images/synth1.jpg");
    } 
    else 
    {
        myImage.setAttribute("src", "images/mixer.jpg");
    }
};

