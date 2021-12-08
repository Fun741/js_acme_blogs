function createElemWithText(elmStrName = "p", textCont = "", className) {
  
  const elem = document.createElement(elmStrName);
  elem.textContent = textCont;
  if (className)
    elem.classList.add(className);
  return elem
  
}
/*
function createSelectOptions(user = "undefined") {
    const optionArr = [];
    let i = 0;
    JsonData.forEach((users) => {
        newArr[i] = document.createElement("option");
        user.id = option.value;
        user.name = option.textContent;
        i = i + 1;
    });
    return optionArr;
}
*/

function createSelectOptions(users) {
    //d. Returns undefined if no parameter received
    if (!users) { return undefined; }
    let optionArray = [];
    //e. Loops through the users data
    for (let i = 0; i < users.length; i++)
    {
        const u = users[i];
        //f. Creates an option element for each user with document.createElement()
        let option = document.createElement("option");
        //g. Assigns the user.id to the option.value
        option.value = u.id;
        //h. Assigns the user.name to the option.textContent
        option.textContent = u.name;
        optionArray.push(option);
    }
    //i. Return an array of options elements
    return optionArray;

    return array;
}


/*
function toggleCommentSection()
{

    return;
}
*/

function toggleCommentSection(postId)
{
    // If Post Id Is Passed, Return Undefined
    if (!postId) { return undefined; }
    else
    {
        // Else, Get All Comment Sections
        const commentSections = document.querySelectorAll(postId);
        // Loop Through Each Comment Section
        for (let i = 0; i < commentSections.length; i++)
        {
            const commentSection = commentSections[i];
            // If Post Id Attribut Of Comment Section Is Equal To Post Id Passed Arg
            if (commentSection.getAttribute(postId) === postId)
            {
                // Toggle Hide Class
                commentSection.classList.toggle("hide");
                // Return Comment Section Element
                return commentSection;
            }
        }

        // If We Are Here, No Matching Post Id Is Found
        // Return NULL
        return null;
    }
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

function deleteChildElements(parentElement)
{
    // if element is undefined
    if (parentElement == undefined || parentElement == ' ')
    {
        // return normal html
        return undefined;
    }
    else
    {
        // iterate until element has chile
        while (parentElement.hasChildNodes())
        {
            // iterete until element child has child
            while (parentElement.lastElementChild.hasChildNodes())
            {
                // remove child from first
                //console.log(parentElement.lastElementChild.removeChild(parentElement.lastElementChild.firstChild));
                parentElement.lastElementChild.removeChild(parentElement.lastElementChild.firstChild);
            }
            // remove element
            html_element.removeChild(parentElement.lastElementChild);
        }
    }
    return parentElement;
}

/*
6. addButtonListeners
a.Selects all buttons nested inside the main element
b.If buttons exist:
c.Loop through the NodeList of buttons
d.Gets the postId from button.dataset.id
e.Adds a click event listener to each button(reference addEventListener)
f.The listener calls an anonymous function (see cheatsheet)
g.Inside the anonymous function: the function toggleComments is called with the
event and postId as parameters
h.Return the button elements which were selected
i.You may want to define an empty toggleComments function for now.Not all tests
will pass for addButtonListeners until toggleComments exists.I recommend
waiting on the logic inside the toggleComments function until we get there.
*/

function addButtonListeners()
{
    let btnElm;

    return btnElm;
}

/*
7. removeButtonListeners
a.Selects all buttons nested inside the main element
b.Loops through the NodeList of buttons
c.Gets the postId from button.dataset.id
d.Removes the click event listener from each button(reference
removeEventListener)
e.Refer to the addButtonListeners function as this should be nearly identical
f.Return the button elements which were selected
*/
function removeButtonListeners()
{
    let btnElm;

    return btnElm;
}


/*
8. createComments
a.Depends on the createElemWithText function we created
b.Receives JSON comments data as a parameter
c.Creates a fragment element with document.createDocumentFragment()
d.Loop through the comments
e.For each comment do the following:
f.Create an article element with document.createElement()
g.Create an h3 element with createElemWithText('h3', comment.name)
h.Create an paragraph element with createElemWithText('p', comment.body)
i.Create an paragraph element with createElemWithText('p', `From: ${comment.email}`)
j.Append the h3 and paragraphs to the article element(see cheatsheet)
k.Append the article element to the fragment
l.Return the fragment element
*/

//READ FIRST
function createComments(JsonData)
{
    let fragElm;

    return fragElm;
}


/*
9. populateSelectMenu
a.Depends on the createSelectOptions function we created
b.Receives the users JSON data as a parameter
c.Selects the #selectMenu element by id
d.Passes the users JSON data to createSelectOptions()
e.Receives an array of option elements from createSelectOptions
f.Loops through the options elements and appends each option element to the
select menu
g.Return the selectMenu element
*/

//READ FIRST
function populateSelectMenu(JsonData)
{

    return selectMenu;
}


/*
10. getUsers
a.Fetches users data from: https://jsonplaceholder.typicode.com/ (look at
Resources section)
b.Should be an async function
    c.Should utilize a try / catch block
d.Uses the fetch API to request all users
e.Await the users data response
f.Return the JSON data
*/

async function getUsers() {
    try
    {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json();
        return users;
    } catch (err)
    {
        console.error(err);
    }
}


/*
11. getUserPosts
a.Receives a user id as a parameter
b.Fetches post data for a specific user id from:
https://jsonplaceholder.typicode.com/ (look at Routes section)
c.Should be an async function
    d.Should utilize a try / catch block
e.Uses the fetch API to request all users
f.Await the users data response
g.Return the JSON data
*/

async function getUserPosts(userID) {
    try {
        if (userID === undefined) { return }
        const response = await fetch("https://jsonplaceholder.typicode.com/users/"+ userID +"/posts")
        const users = await response.json();
        return users;
    } catch (err) {
        console.error(err);
    }
}


/*
12. getUser
a.Receives a user id as a parameter
b.Fetches data for a specific user id from: https://jsonplaceholder.typicode.com/
(look at Routes section)
c.Should be an async function
    d.Should utilize a try / catch block
e.Uses the fetch API to request the user
f.Await the user data response
g.Return the JSON data
*/

async function getUser(userID) {
    try {
        if (userID === undefined) { return }
        const response = await fetch("https://jsonplaceholder.typicode.com/users/" + userID)
        const user = await response.json();
        return user;
    } catch (err) {
        console.error(err);
    }
}


/*
13. getPostComments
a.Receives a post id as a parameter
b.Fetches comments for a specific post id from:
https://jsonplaceholder.typicode.com/ (look at Routes section)
c.Should be an async function
    d.Should utilize a try / catch block
e.Uses the fetch API to request all users
f.Await the users data response
g.Return the JSON data
*/

async function getPostComments(postID) {
    try {
        if (postID === undefined) { return }
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + postID + "/comments")
        const user = await response.json();
        return user;
    } catch (err) {
        console.error(err);
    }
}


/*
14. displayComments
a.Dependencies: getPostComments, createComments
b.Is an async function
    c.Receives a postId as a parameter
d.Creates a section element with document.createElement()
e.Sets an attribute on the section element with section.dataset.postId
f.Adds the classes 'comments' and 'hide' to the section element
g.Creates a variable comments equal to the result of await
getPostComments(postId);
h.Creates a variable named fragment equal to createComments(comments)
i.Append the fragment to the section
j.Return the section element
*/

function displayComments(postId)
{

    return;
}


/*
15. createPosts
a.Dependencies: createElemWithText, getUser, displayComments
b.Is an async function
    c.Receives posts JSON data as a parameter
d.Create a fragment element with document.createDocumentFragment()
e.Loops through the posts data
f.For each post do the following:
g.Create an article element with document.createElement()
h.Create an h2 element with the post title
i.Create an p element with the post body
j.Create another p element with text of`Post ID: ${post.id}`
k.Define an author variable equal to the result of await getUser(post.userId)
l.Create another p element with text of`Author: ${author.name} with
${author.company.name}`
m.Create another p element with the author’s company catch phrase.
    n.Create a button with the text 'Show Comments'
o.Set an attribute on the button with button.dataset.postId = post.id
p.Append the h2, paragraphs, button, and section elements you have created to
the article element.
    q.Create a variable named section equal to the result of await
displayComments(post.id);
r.Append the section element to the article element
s.After the loop completes, append the article element to the fragment
t.Return the fragment element
*/

function createPosts(JsonData)
{

    return;
}


/*
16. displayPosts
a.Dependencies: createPosts, createElemWithText
b.Is an async function
    c.Receives posts data as a parameter
d.Selects the main element
e.Defines a variable named element that is equal to:
i.IF posts exist: the element returned from await createPosts(posts)
ii.IF post data does not exist: create a paragraph element that is identical to
the default paragraph found in the html file.
    iii.Optional suggestion: use a ternary for this conditional
f.Appends the element to the main element
g.Returns the element variable
*/

function displayPosts(postData)
{
    return;
}


/*
17. toggleComments
a.Dependencies: toggleCommentSection, toggleCommentButton
b.Receives 2 parameters: (see addButtonListeners function description)
i.The event from the click event listener is the 1st param
ii.Receives a postId as the 2nd parameter
c.Sets event.target.listener = true(I need this for testing to be accurate)
d.Passes the postId parameter to toggleCommentSection()
e.toggleCommentSection result is a section element
f.Passes the postId parameter to toggleCommentButton()
g.toggleCommentButton result is a button
h.Return an array containing the section element returned from
toggleCommentSection and the button element returned from
toggleCommentButton: [section, button]
*/

function toggleComments()
{
    return;
}

/*
18. refreshPosts
a.Dependencies: removeButtonListeners, deleteChildElements, displayPosts,
    addButtonListeners
b.Is an async function
    c.Receives posts JSON data as a parameter
d.Call removeButtonListeners
e.Result of removeButtonListeners is the buttons returned from this function
    f.Call deleteChildElements with the main element passed in as the parameter
g.Result of deleteChildElements is the return of the main element
h.Passes posts JSON data to displayPosts and awaits completion
i.Result of displayPosts is a document fragment
j.Call addButtonListeners
k.Result of addButtonListeners is the buttons returned from this function
    l.Return an array of the results from the functions called: [removeButtons, main,
        fragment, addButtons]
*/

function refreshPosts()
{
    return;
}

/*
19. selectMenuChangeEventHandler
a.Dependencies: getUserPosts, refreshPosts
b.Should be an async function
    c.Automatically receives the event as a parameter(see cheatsheet)
d.Defines userId = event.target.value || 1; (see cheatsheet)
e.Passes the userId parameter to await getUserPosts
f.Result is the posts JSON data
g.Passes the posts JSON data to await refreshPosts
h.Result is the refreshPostsArray
i.Return an array with the userId, posts and the array returned from refreshPosts:
[userId, posts, refreshPostsArray]
*/

function selectMenuChangeEventHandler()
{
    return;
}

/*
20. initPage
a.Dependencies: getUsers, populateSelectMenu
b.Should be an async function
    c.No parameters.
        d.Call await getUsers
e.Result is the users JSON data
f.Passes the users JSON data to the populateSelectMenu function
    g.Result is the select element returned from populateSelectMenu
h.Return an array with users JSON data from getUsers and the select element
result from populateSelectMenu: [users, select]
*/

function initPage()
{
    return;
}

/*
21. initApp
a.Dependencies: initPage, selectMenuChangeEventHandler
b.Call the initPage() function.
c.Select the #selectMenu element by id
d.Add an event listener to the #selectMenu for the “change” event
e.The event listener should call selectMenuChangeEventHandler when the change
event fires for the #selectMenu
f.NOTE: All of the above needs to be correct for you app to function correctly.
However, I can only test if the initApp function exists.It does not return anything.
*/

function initApp()
{
    return;
}

