const NS = [
  'http://www.w3.org/1999/xhtml',
  'http://www.w3.org/2000/svg',
]

const elements = {}

export default (name: string): HTMLElement | Element => {
  if (name in elements) return elements[name]

  let domElem = window.HTMLUnknownElement
  for (let i = 0; i < NS.length; i += 1) {
    domElem = document.createElementNS(NS[i], name)
    if (!(domElem instanceof window.HTMLUnknownElement)) {
      elements[name] = domElem

      return domElem
    }
  }

  return domElem
}
