const app = {};

//Elements (Global use)
app.menuBtn = document.querySelector(".ham-btn");
app.slideOutMenu = document.querySelector(".side-bar-menu");
app.contentContainer = document.querySelector(".content-container");

//Sidebar Listeners
app.sidebarlisteners = () => {
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileMenuLinks = document.querySelectorAll(".side-bar-menu a");

    //On Menu button click
    app.menuBtn.addEventListener("click", app.toggleElementsOnActiveSidebar);

    //On any menu item click
    mobileMenuLinks.forEach((link) => {
        link.addEventListener("click", app.toggleElementsOnActiveSidebar);
    });

    //Close mobile menu when user cliks outside of it and it's active
    document.addEventListener("click", function (e) {
        if (!mobileNav.contains(e.target) && app.menuBtn.classList.contains("active")) {
            app.toggleElementsOnActiveSidebar();
        }
    });
};

//Toggle elements on active Sidebar

app.toggleElementsOnActiveSidebar = () => {
    app.menuBtn.classList.toggle("active");
    app.slideOutMenu.classList.toggle("active");
    app.contentContainer.classList.toggle("active");//Blurs content
};

//Initial

app.init = () => {
    app.sidebarlisteners();
};

app.init();
