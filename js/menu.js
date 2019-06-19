(function() {
    // Active menu functionality
    const menuContainer = document.getElementById('menu');
    let items = menuContainer.getElementsByClassName('item');
    items = Array.from(items);
    items.forEach(function(item){
        item.addEventListener('click', function(){
            let current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace(' active', '');
            this.className += ' active';
        });
    });
})()