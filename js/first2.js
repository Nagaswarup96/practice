const main = document.querySelector(".middle");
const sides = document.querySelectorAll(".visib");

main.addEventListener("mouseover", () => {
    sides.forEach((side) => {
        side.setAttribute("style", "transition:1s;visibility:visible");

    })
});
main.addEventListener("mouseout", () => {
    sides.forEach((side) => {
        side.setAttribute("style", "transition:1s;visibility:hidden");
    })
});