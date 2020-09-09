const init = function() {
  const tabAnchor = document.querySelectorAll('.tabs-nav li')
  const tabPanel = document.querySelectorAll('.tabs-panel')

  Array.prototype.forEach.call(tabAnchor, function(currentElement, currentIndex) {
    currentElement.addEventListener('click', function() {
      Array.prototype.forEach.call(tabPanel, function(panel) {
        panel.style.display = 'none'
      })
      tabPanel[currentIndex].style.display = ''
    })
  })
  tabAnchor[0].click()
}

init()