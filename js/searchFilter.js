const imageSearch = document.getElementById('search'); 
imageSearch.addEventListener('keyup', e => { 
    let currentValue = e.target.value.toLowerCase(); 
    console.log(currentValue);
    let authors = document.querySelectorAll('.gallery a'); 
    authors.forEach(author => { 
        if (author.getAttribute('data-caption').toLowerCase().includes(currentValue)) { 
            author.parentNode.style.display = 'block'; 
        } else { 
            author.parentNode.style.display = 'none'; 
        } 
    }); 
});

baguetteBox.run('.gallery');