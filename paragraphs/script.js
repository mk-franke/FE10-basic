const colors = ['white', 'red', 'green', 'blue'];
//                 0       1       2        3  


function createEventListener(i) {
    let currentColor = 0;
    return function() {
        currentColor++;
        console.log("Click on " + i + " paragraph, currentColor = " + currentColor);
        this.style['background-color'] = colors[currentColor % colors.length];
    }
}

document.querySelectorAll('p').forEach(function(element, i) {
    console.log(i);
    element.addEventListener('click', createEventListener(i));
})

