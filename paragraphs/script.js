const colors = ['white', 'red', 'green', 'blue'];
//                 0       1       2        3  


function createEventListener() {
    let currentColor = 0;
    return function() {
        currentColor++;
        this.style['background-color'] = colors[currentColor % colors.length];
    }
}

document.querySelectorAll('p').forEach(function(element) {
  element.addEventListener('click', createEventListener());
})

