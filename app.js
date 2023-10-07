var btnSearch = document.querySelector('.searchBox-btn');
btnSearch.addEventListener('click', function(){
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
})