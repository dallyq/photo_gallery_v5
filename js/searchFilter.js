const imageSearch = document.getElementById('search'); 
imageSearch.addEventListener('keyup', e => { 
    let currentValue = e.target.value.toLowerCase(); 
    console.log(currentValue);
    let authors = document.querySelectorAll('.gallery a'); 
    authors.forEach(captions => { 
        if (captions.getAttribute('data-caption').toLowerCase().includes(currentValue)) { 
            captions.parentNode.style.display = 'block'; 
        } else { 
            captions.parentNode.style.display = 'none'; 
        } 
    }); 
});

baguetteBox.run('.gallery');