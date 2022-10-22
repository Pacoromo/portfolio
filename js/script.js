const app = {};


//Sidebar Listeners
app.sidebarlisteners = () => {
    app.slideOutMenu = document.querySelector(".side-bar-menu");
    app.contentContainer = document.querySelector(".content-container");
    app.body = document.querySelector("body");
    app.menuBtn = document.querySelector(".ham-btn");
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileMenuLinks = document.querySelectorAll(".side-bar-menu a");

    //Menu button
    app.menuBtn.addEventListener("click", app.toggleElementsOnActiveSidebar);

    //Menu items
        mobileMenuLinks.forEach((link) => {
        link.addEventListener("click", app.toggleElementsOnActiveSidebar);
    });

    //If active, close mobile bar when user cliks outside of it
    document.addEventListener("click", function (e) {
        if (!mobileNav.contains(e.target) && app.menuBtn.classList.contains("active-side-bar")) {
            app.toggleElementsOnActiveSidebar();
        }
    });
};

//Toggle elements on active Sidebar

app.toggleElementsOnActiveSidebar = () => {
    app.menuBtn.classList.toggle("active-side-bar");
    app.slideOutMenu.classList.toggle("active-side-bar");
    app.contentContainer.classList.toggle("active-side-bar");//Blurs content
    app.body.classList.toggle("active-side-bar");//Hide the scroll bar
};

//Initial

app.init = () => {
    app.sidebarlisteners();
};

app.init();
