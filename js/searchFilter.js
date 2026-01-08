const imageSearch = document.getElementById('search'); 
imageSearch.addEventListener('keyup', e => { 
    let currentValue = e.target.value.toLowerCase(); 
    let authors = document.querySelectorAll('nature'); 
    authors.forEach(author => { 
        if (author.getAttribute('data-caption').toLowerCase().includes(currentValue)) { 
            author.parentNode.style.display = 'block'; 
        } else { 
            author.parentNode.style.display = 'none'; 
        } 
    }); 
});