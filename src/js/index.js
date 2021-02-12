/* Sidebar menu links effect with scroll progress */
const scrollLinks = element => {
    const links = document.querySelectorAll('.sidebar li')
    const linksLength = links.length

    const headers = document.querySelectorAll('.header-text')
    const scrollTop = element.scrollTop;

    for (var i = 0; i <= linksLength; i++) {
        if (i == linksLength) break

        if (scrollTop >= (headers[i].offsetTop - 10) && scrollTop <= (headers[i+1].offsetTop - 10)) {
            links[i].classList.add('active-list')
        } else {
            links[i].classList.remove('active-list')
        }
    }
}

document.addEventListener('scroll', () => {
    scrollLinks(document.documentElement)
})
scrollLinks(document.documentElement) // When the page reloads this should work