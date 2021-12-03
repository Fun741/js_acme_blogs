function createElemWithText(elmStrName = "p", textCont = "", className) {
  
  const elem = document.createElement(elmStrName);
  elem.textContent = textCont;
  if (className)
    elem.classList.add(className);
  return elem
  
}

function createSelectOptions(user = "undefined") {
    const newArr = []
    if (user == "undefined") {
        return user;
    }
    else
    {
        for (let i = 0; i < userData.length; i++)
        {
            newArr[i] = document.createElement("option");
            user.id = option.value;
            user.name = option.textContent;
        }
        //userData.forEach((users) => {
        //    const newElem = document.createElement("div");
        //});
    }
    return newArr;
}

