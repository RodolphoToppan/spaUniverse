import { resetNavStyle } from './resetNavStyle.js'

export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, '', event.target.href)
    console.log(event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname]

    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html

        let pageId = route.replace('/pages/', '').replace('.html', '')
        resetNavStyle()
        document.querySelector(`#${pageId}`).classList.add('selected')
      })
  }
}
