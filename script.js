class portfolio {or
    // @param (string) select[]
constructor (selector) {
    this.container = document.querySelectorAll(selector)
    if (this.container === null) {
        throw new Error('L element ${selector} nexiste plus')
    }
}
}
new Portfolio ('#js.portfolio')