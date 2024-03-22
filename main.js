


window.addEventListener(`scroll`, () => {
    document.querySelector("header .container").classList.toggle("background", window.scrollY > 100)
}
)

let hello = document.querySelectorAll(`.faqs-art`)

hello.forEach(faq => {
    faq.addEventListener(`click`, () => {
        faq.classList.toggle(`open`);

    })
})
