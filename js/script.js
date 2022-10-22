const app = {};








//Button Listener
app.menuBtnListener = () => {
    const menuBtn = document.querySelector(".ham-btn");
    const slideOutMenu = document.querySelector(".side-bar-menu");
    
    menuBtn.addEventListener("click", function () {
        this.classList.toggle("active");
        slideOutMenu.classList.toggle("active");
    });
};

app.init = () => {
    app.menuBtnListener();
};

app.init();
