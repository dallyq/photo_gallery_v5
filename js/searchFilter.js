const imageSearch = document.getElementById('search'); 
imageSearch.addEventListener('keyup', e => { 
    let currentValue = e.target.value.toLowerCase(); 
    console.log(currentValue);
    let captions = document.querySelectorAll('.gallery .potato'); 
    captions.forEach(datacaption => { 
        if (datacaption.getAttribute('data-caption').toLowerCase().includes(currentValue)) { 
            datacaption.parentNode.style.display = 'block'; 
        } else { 
            datacaption.parentNode.style.display = 'none'; 
        } 
    }); 
});

baguetteBox.run('.gallery');