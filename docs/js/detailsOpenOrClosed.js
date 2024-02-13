function detailsOpenOrClosed() {
    var screenSize = window.innerWidth;
    const detailElement = document.querySelectorAll('.open_or_closed')

    detailElement.forEach(function(detail){
        if (screenSize > 800) {
            detail.setAttribute('open', '')
        } else {
            detail.removeAttribute('open')
        }
    })

}

window.addEventListener('load', detailsOpenOrClosed);