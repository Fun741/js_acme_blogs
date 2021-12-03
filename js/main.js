function createElemWithText(elmStrName = "p", textCont = "", className) {
  
  const elem = document.createElement(elmStrName);
  elem.textContent = textCont;
  if (className)
    elem.classList.add(className);
  return elem
  
}
