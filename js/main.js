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

function toggleCommentSection()
{

    return;
}

//a.Receives a postId as the parameter
//b.Selects the section element with the data - post - id attribute equal to the postId received as a parameter
//c.Use code to verify the section exists before attempting to access the classList property
//d.At this point in your code, the section will not exist.You can create one to test if desired.
//e.Toggles the class 'hide' on the section element
//f.Return the section element

function toggleCommentButton() {

    return;
}

 
//a.Receives a parentElement as a parameter
//b.Define a child variable as parentElement.lastElementChild
//c.While the child exists…(use a while loop)
//d.Use parentElement.removeChild to remove the child in the loop
//e.Reassign child to parentElement.lastElementChild in the loop
//f.Return the parentElement

function deleteChildElements()
{
    let child = parentElement.lastElementChild;
    while (child.firstChild)
    {
        child = parentElement.removeChild(child);
        child = parentElement.lastElementChild(child);
    }

    return parentElem;
}

