export function resetNavStyle() {
  const home = document.querySelector('#home')
  const universe = document.querySelector('#universe')
  const explore = document.querySelector('#explore')

  home.classList.remove('selected')
  universe.classList.remove('selected')
  explore.classList.remove('selected')
}
