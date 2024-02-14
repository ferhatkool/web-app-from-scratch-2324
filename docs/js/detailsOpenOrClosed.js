// function that checks the screen size on the top5 list dialog //
// if the screen size is bigger than 800px, all the details that are in the dialog are opened //
function detailsOpenOrClosed() {
    // places the screen size in a variable //
    var screenSize = window.innerWidth;
    // retrieves elements with a specified class
    const detailElement = document.querySelectorAll('.open_or_closed')
    // for each detail, change the attribute based on the screen size
    detailElement.forEach(function(detail){
        // bigger than 800, set a attribute open to the detail
        if (screenSize > 800) {
            detail.setAttribute('open', '')
        // smaller than 800, remove the attribute open to the detail
        } else {
            detail.removeAttribute('open')
        }
    })

}

// eventlistener that starts when the window (page) is loaded and executes the function
window.addEventListener('load', detailsOpenOrClosed);