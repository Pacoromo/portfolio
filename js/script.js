const app = {};

//Listeners
app.listeners = () => {
    app.body = document.querySelector("body");
    app.contentContainer = document.querySelector(".content-container");
    app.menuBtn = document.querySelector(".ham-btn");
    app.slideOutMenu = document.querySelector(".side-bar-menu");
    app.mobileNav = document.querySelector(".mobile-nav");
    app.mobileMenuLinks = document.querySelectorAll(".side-bar-menu a");

    //Menu button
    app.menuBtn.addEventListener("click", app.toggleElementsOnActiveSidebar);

    //Menu items
    app.mobileMenuLinks.forEach((link) => {
        link.addEventListener("click", app.toggleElementsOnActiveSidebar);
    });

    //If active, close mobile bar when user cliks outside of it
    document.addEventListener("click", function (e) {
        if (
            !app.mobileNav.contains(e.target) &&
            app.menuBtn.classList.contains("active-side-bar")
        ) {
            app.toggleElementsOnActiveSidebar();
        }
    });

    //Remove the active state if viewport is beyond medium screen size
    window.addEventListener("resize", () => {
        if (
            this.innerWidth >= 768 &&
            app.menuBtn.classList.contains("active-side-bar")
        ) {
            app.toggleElementsOnActiveSidebar();
        }
    });
};

//Toggle elements on active Sidebar

app.toggleElementsOnActiveSidebar = () => {
    app.body.classList.toggle("active-side-bar"); //Hide the scroll bar
    app.contentContainer.classList.toggle("active-side-bar"); //Blurs content
    app.menuBtn.classList.toggle("active-side-bar");
    app.slideOutMenu.classList.toggle("active-side-bar");
};

//Observers

app.startObservers = () => {

    app.options = {
        root: null,
        rootMargin: "0px 0px",
        threshold: 0,
    };

    app.beTouching = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active-fade-in");
                app.observer.unobserve(entry.target);
            }
        });
    };

    app.observer = new IntersectionObserver(app.beTouching, app.options);
    app.fadeInElements = document.querySelectorAll(".fade-in");

    //Observe elements to animate
    app.fadeInElements.forEach((element) => {
        element.style.opacity = 0;
        app.observer.observe(element);
    });

};

//Initial

app.init = () => {
    app.listeners();
    app.startObservers();
};

app.init();
