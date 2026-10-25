
const display = document.getElementById("image");
const previews = document.querySelectorAll(".preview");

function updateImage(event) {
    const image = event.currentTarget;

    display.style.backgroundImage = `url("${image.src}")`;
    display.textContent = image.alt;

    console.log("Image selected:", image.alt);
}

function undoUpdate() {
    display.style.backgroundImage = "none";
    display.textContent =
        "Hover over or focus on an image below to display it here.";

    console.log("Image display reset");
}

function addTabIndex() {
    console.log("Page loaded");

    for (let i = 0; i < previews.length; i++) {
        previews[i].setAttribute("tabindex", "0");
        console.log("Added tabindex to image", i + 1);
    }
}

window.addEventListener("load", addTabIndex);

for (let i = 0; i < previews.length; i++) {
    previews[i].addEventListener("mouseover", updateImage);
    previews[i].addEventListener("mouseleave", undoUpdate);
    previews[i].addEventListener("focus", updateImage);
    previews[i].addEventListener("blur", undoUpdate);
}
