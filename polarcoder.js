const showContent = (contentId) => {
  const contentElements = Array.from(document.getElementsByClassName('content-text'))
  contentElements.map(element => element.style.display = 'none')

  if (contentId) {
    document.getElementById(contentId).style.display = 'block'
  }
  return false
}
