const footer = document.querySelector('.footer')

const authorInfo = document.querySelector('.author-info')

const hover = document.querySelector('.hover-state')

const toggleAuthor = () => {
    authorInfo.classList.toggle('hidden')
}

const toggleHover = () => {
    hover.classList.toggle('hidden')
}

const addAuthor = () => {
    authorInfo.classList.remove('hidden')
}

const removeHover = () => {
    hover.classList.add('hidden')
}

// Set/update the viewportWidth value
const setViewportWidth = () => {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}

// On resize events, recalculate and reset to inital values
window.addEventListener('resize', () => {
	setViewportWidth();
    addAuthor()
    removeHover()
}, false);

footer.addEventListener('click', () => {
    setViewportWidth()
    
    if (viewportWidth > 900) {
        addAuthor()
        toggleHover()
    } else {
        toggleHover()
        toggleAuthor()  
    }
})
