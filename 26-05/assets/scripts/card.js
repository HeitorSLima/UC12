const img = document.getElementById("img")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    if(img.getAttribute("src") == "./assets/images/Wooby.png") {
        img.setAttribute("src", "./assets/images/woobjojo.png");
    }else{
        img.setAttribute("src", "./assets/images/Wooby.png");
    }
});