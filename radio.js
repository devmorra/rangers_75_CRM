let radio1 = document.getElementById("radio1")
let radio2 = document.getElementById("radio2")
let radio3 = document.getElementById("radio3")
let radio4 = document.getElementById("radio4")

let content1 = document.getElementById("content1")
let content2 = document.getElementById("content2")
let content3 = document.getElementById("content3")
let content4 = document.getElementById("content4")

radio1.onclick = (function() {
    content1.style.display="block"
    content2.style.display="none"
    content3.style.display="none"
    content4.style.display="none"
})

radio2.onclick = (function() {
    content1.style.display="none"
    content2.style.display="block"
    content3.style.display="none"
    content4.style.display="none"
})

radio3.onclick = (function() {
    content1.style.display="none"
    content2.style.display="none"
    content3.style.display="block"
    content4.style.display="none"
})

radio4.onclick = (function() {
    content1.style.display="none"
    content2.style.display="none"
    content3.style.display="none"
    content4.style.display="block"
})


