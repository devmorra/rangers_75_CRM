let radio1 = document.getElementById("radio1")
let radio2 = document.getElementById("radio2")
let radio3 = document.getElementById("radio3")
let radio4 = document.getElementById("radio4")

let content1 = document.getElementById("content1")
let content2 = document.getElementById("content2")
let content3 = document.getElementById("content3")
let content4 = document.getElementById("content4")



let currentContent = content1;


// function setCurrentContent(content){
//     let otherContent = [content1, content2, content3, content4].filter(item => item !== content)
//     if (content != currentContent){
//         currentContent.classList.remove("radio-content-slidein")
//         currentContent.classList.add("radio-content-slideout")
//         currentContent = content;
//         setTimeout()
//         content.style.display="block"
//         content.classList.remove("radio-content-slideout")
//         content.classList.add("radio-content-slidein")
//     }
// }

radio1.onclick = function(){setCurrentContent(content1)};
radio2.onclick = function(){setCurrentContent(content2)};
radio3.onclick = function(){setCurrentContent(content3)};
radio4.onclick = function(){setCurrentContent(content4)};

radio1.onclick = (function() {
    content1.style.display="block"
    content1.classList.add("radio-content-slidein")
    content2.style.display="none"
    content3.style.display="none"
    content4.style.display="none"
    content2.classList.add
    content3.classList.add
    content4.classList.add
})

radio2.onclick = (function() {
    content1.style.display="none"
    content2.style.display="block"
    content2.classList.add("radio-content-slidein")
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

radio1.click()


