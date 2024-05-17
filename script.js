const qna = document.getElementsByClassName('qna');

for (let i = 0; i < qna.length; i++) {
    qna[i].addEventListener("click", function () {
        this.classList.toggle('active');
    })
}