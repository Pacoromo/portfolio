const app = {};

app.options = {
    root: null,
    rootMargin: "0px 0px",
    threshold: 0.5
}

app.observer = new IntersectionObserver(beTouching, options);
app.observer.observe();


//Listeners
app.listeners = () => {
    app.body = document.querySelector("body");
    app.contentContainer = document.querySelector(".content-container");
    app.menuBtn = document.querySelector(".ham-btn");
    app.slideOutMenu = document.querySelector(".side-bar-menu");

    const mobileNav = document.querySelector(".mobile-nav");
    const mobileMenuLinks = document.querySelectorAll(".side-bar-menu a");
    const skills = document.querySelectorAll(".social-side-bar li");

    //Menu button
    app.menuBtn.addEventListener("click", app.toggleElementsOnActiveSidebar);

    //Menu items
    mobileMenuLinks.forEach((link) => {
        link.addEventListener("click", app.toggleElementsOnActiveSidebar);
    });

    //If active, close mobile bar when user cliks outside of it
    document.addEventListener("click", function (e) {
        if (
            !mobileNav.contains(e.target) &&
            app.menuBtn.classList.contains("active-side-bar")
        ) {
            app.toggleElementsOnActiveSidebar();
        }
    });

    //Remove the active state if viewport is beyond medium screen size
    window.addEventListener("resize", () => {
        if (this.innerWidth >= 768 && app.menuBtn.classList.contains("active-side-bar")) {
            app.toggleElementsOnActiveSidebar();
        }
    });

    //Observe elements to animate
    skills.forEach(element => {
        observer.observe(element);
        console.log(element);
    });
};

//Toggle elements on active Sidebar

app.toggleElementsOnActiveSidebar = () => {
    app.body.classList.toggle("active-side-bar"); //Hide the scroll bar
    app.contentContainer.classList.toggle("active-side-bar"); //Blurs content
    app.menuBtn.classList.toggle("active-side-bar");
    app.slideOutMenu.classList.toggle("active-side-bar");
};

//Initial

app.init = () => {
    app.listeners();
};

app.init();