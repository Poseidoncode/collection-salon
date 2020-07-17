// Navbar Toggle Class


$(document).ready(function () {
    let navMenu = $('.nav-menu')
    let navContainer = $('section.container')

    navMenu.click(function () {
        navContainer.toggleClass("nav-show-menu")
    })
})