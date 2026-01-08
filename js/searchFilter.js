const authorSearch = document.getElementById('authorSearch'); 
authorSearch.addEventListener('keyup', e => { 
    let currentValue = e.target.value.toLowerCase(); 
    let authors = document.querySelectorAll('h1.title'); 
    authors.forEach(author => { 
        if (author.textContent.toLowerCase().includes(currentValue)) { 
            author.parentNode.parentNode.style.display = 'block'; 
        } else { author.parentNode.parentNode.style.display = 'none'; 
        } 
    }); 
});