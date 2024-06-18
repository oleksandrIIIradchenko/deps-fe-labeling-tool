//fix: ReferenceError: Element is not defined

const Element = typeof Element === "undefined" ? function () {} : Element;

export {
    Element
}
