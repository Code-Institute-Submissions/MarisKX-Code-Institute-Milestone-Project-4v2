let mobileMenu = document.getElementById("mobilemenu");
mobileMenu.style.display = "none";
function showMobileMenu() {
    let showMenuMobileIcon = document.getElementById("showmenumobile");
    let hideMenuMobileIcon = document.getElementById("hidemenumobile");
    let fixedHeader = document.getElementById("main-header");
    let mainContent = document.getElementsByClassName("main-content")[0];
    let spacerHeader = document.getElementsByClassName("header-container")[0];
    let bttButton = document.getElementsByClassName("btt-button")[0];
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "block";
        showMenuMobileIcon.style.display = "none";
        hideMenuMobileIcon.style.display = "block";
        fixedHeader.classList.remove("fixed-top");
        mainContent.style.display = "none";
        spacerHeader.style.display = "none";
        bttButton.style.display = "none";
    } else {
        mobileMenu.style.display = "none";
        showMenuMobileIcon.style.display = "block";
        hideMenuMobileIcon.style.display = "none";
        fixedHeader.classList.add("fixed-top");
        mainContent.style.display = "block";
        spacerHeader.style.display = "block";
    }
}