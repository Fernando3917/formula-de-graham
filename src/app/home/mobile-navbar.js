class MobileNavbar {
    constructor(mobileMenu, navList, navlinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind();
    }

    handleClick(){
        console.log(this);
        this.navlist.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const = new MobileNavbar(
    ".mobile-Menu",
    ".nav-list",
    ".nav-list li",
);
MobileNavbar.init();