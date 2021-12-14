
//code start in home file
/*
1. createElemWithText
a. Receives up to 3 parameters
b. 1st parameter is the HTML element string name to be created (h1, p, button, etc)
c. Set a default value for the 1st parameter to “p”
d. 2nd parameter is the textContent of the element to be created
e. Default value of the 2nd parameter is “”
f. 3rd parameter is a className if one is to be applied (optional)
g. Use document.createElement() to create the requested HTML element
h. Set the other desired element attributes.
i. Return the created element.
*/

//a. Receives up to 3 parameters
//b. 1st parameter is the HTML element string name to be created(h1, p, button, etc)
//c.Set a default value for the 1st parameter to “p”
//d. 2nd parameter is the textContent of the element to be created
//e.Default value of the 2nd parameter is “”
//f. 3rd parameter is a className if one is to be applied(optional)
function createElemWithText(elmStrName = "p", textCont = "", className)
{
    //g. Use document.createElement() to create the requested HTML element
    const elem = document.createElement(elmStrName);
    //h. Set the other desired element attributes.
    elem.textContent = textCont;
    //if className exists add classname
    if (className)
        elem.classList.add(className);
    //i.Return the created element.
    return elem
}

//2. createSelectOptions
//a.Test users JSON data available here: https://jsonplaceholder.typicode.com/users
//b.For testing(not in function) you may want to define users with the test data.
//c.Receives users JSON data as a parameter
//d.Returns undefined if no parameter received
//e.Loops through the users data
//f.Creates an option element for each user with document.createElement()
//g.Assigns the user.id to the option.value
//h.Assigns the user.name to the option.textContent
//i.Return an array of options elements

//a.Test users JSON data available here: https://jsonplaceholder.typicode.com/users
//b.For testing(not in function) you may want to define users with the test data.
//c.Receives users JSON data as a parameter
function createSelectOptions(users) {
    //d. Returns undefined if no parameter received
    if (!users) { return undefined; }

    //create array to return
    let options = [];
    //e. Loops through the users data
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        //f. Creates an option element for each user with document.createElement()
        let option = document.createElement("option");
        //g. Assigns the user.id to the option.value
        option.value = user.id;
        //h. Assigns the user.name to the option.textContent
        option.textContent = user.name;
        //add var to return array
        options.push(option);
    }
    //i. Return an array of options elements
    return options;

}

/*
3.toggleCommentSection
a.Receives a postId as the parameter
b.Selects the section element with the data - post - id attribute equal to the postId received as a parameter
c.Use code to verify the section exists before attempting to access the classList property
d.At this point in your code, the section will not exist.You can create one to test if desired.
e.Toggles the class 'hide' on the section element
f.Return the section element
*/
//a.Receives a postId as the parameter
function toggleCommentSection(postID) {

    // if postId not exist return undef
    if (!postID) { return undefined; }
    //b.Selects the section element with the data - post - id attribute equal to the postId received as a parameter
    //this took forever to figure out
    const section = document.querySelector(`section[data-post-id = "${postID}"`);
    //c.Use code to verify the section exists before attempting to access the classList property
    if (section != null) {
        //d.At this point in your code, the section will not exist.You can create one to test if desired.
        //e.Toggles the class 'hide' on the section element
        section.classList.toggle('hide');
    }
    //f.Return the section element
    return section;
}


/*
4. toggleCommentButton
a. Receives a postId as the parameter
b. Selects the button with the data-post-id attribute equal to the postId received as a parameter
c. If the button textContent is 'Show Comments' switch textContent to 'Hide Comments'
d. If the button textContent is 'Hide Comments' switch textContent to 'Show Comments'
e. Suggestion (not required) for above: try a ternary statement
f. Return the button element
*/
//a. Receives a postId as the parameter
function toggleCommentButton(postID) {
    // if postId not exist return undef
    if (!postID) { return undefined; }
    //b.Selects the button with the data - post - id attribute equal to the postId received as a parameter
    const btn = document.querySelector(`button[data-post-id = "${postID}"`);
    if (btn != null) {
        //c. If the button textContent is 'Show Comments' switch textContent to 'Hide Comments'
        //d.If the button textContent is 'Hide Comments' switch textContent to 'Show Comments'
        //e.Suggestion(not required) for above: try a ternary statement
        btn.textContent === "Show Comments" ? (btn.textContent = "Hide Comments") : (btn.textContent = "Show Comments");
    }
    //f.Return the button element
    return btn;
}


/*
5.deleteChildElements
a.Receives a parentElement as a parameter
b.Define a child variable as parentElement.lastElementChild
c.While the child exists…(use a while loop)
d.Use parentElement.removeChild to remove the child in the loop
e.Reassign child to parentElement.lastElementChild in the loop
f.Return the parentElement
*/

//if (parentElement == undefined || html_element == '') {return undefined;}


//a.Receives a parentElement as a parameter
function deleteChildElements(parentElement)
{
    if (!parentElement?.tagName) {
        // return normal html
        return undefined;
    }
    //b.Define a child variable as parentElement.lastElementChild
    let child = parentElement.lastElementChild;
    //c.While the child exists…(use a while loop)
    while (child) {
        //d.Use parentElement.removeChild to remove the child in the loop
        parentElement.removeChild(child);
        //e.Reassign child to parentElement.lastElementChild in the loop
        child = parentElement.lastElementChild;
    }
    //f.Return the parentElement
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
will pass for addButtonListeners until toggleComments exists.I
waiting on the logic inside the toggleComments function until we get there. recommend
*/


function addButtonListeners()
{
    //a.Selects all buttons nested inside the main element
    let btns = document.querySelectorAll("main button");
    //if no buttons return undef
    if (!btns) { return undefined; }
    //b.If buttons exist:
    else {
        //c.Loop through the NodeList of buttons
        for (let i = 0; i < btns.length; i++) {
            let button = btns[i];
            //d.Gets the postId from button.dataset.id
            let postId = button.dataset.postId;
            //e.Adds a click event listener to each button(reference addEventListener)
            //f.The listener calls an anonymous function (see cheatsheet)
            //g.Inside the anonymous function: the function toggleComments is called with the event and postId as parameters
            btns[i].addEventListener("click", function(e) {toggleComments(e, postId)}, true);
        }
        //after looping though all buttons
        //h.Return the button elements which were selected
        return btns;
    }
    //spare return incase of faliar
    return btns;
}


/*
7. removeButtonListeners
a.Selects all buttons nested inside the main element
b.Loops through the NodeList of buttons
c.Gets the postId from button.dataset.id
d.Removes the click event listener from each button(reference removeEventListener)
e.Refer to the addButtonListeners function as this should be nearly identical
f.Return the button elements which were selected
*/

function removeButtonListeners() {
    //a.Selects all buttons nested inside the main element
    let btns = document.querySelectorAll("main button");
    //if no buttons return undef
    if (!btns) { return undefined; }
    else {
        //b.Loops through the NodeList of buttons
        for (let i = 0; i < btns.length; i++) {
            let button = btns[i];
            //c.Gets the postId from button.dataset.id
            let postId = button.dataset.postId;
            //d.Removes the click event listener from each button(reference removeEventListener)
            //e.Refer to the addButtonListeners function as this should be nearly identical
            btns[i].removeEventListener("click", function (e) { toggleComments(e, postId) }, false);
        }
        //f.Return the button elements which were selected
        return btns;
    }
    return btns;
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

//a.Depends on the createElemWithText function we created
//b.Receives JSON comments data as a parameter
function createComments(comments)
{
    if (!comments) { return undefined; }

    //c.Creates a fragment element with document.createDocumentFragment()
    let fragment = document.createDocumentFragment();

    //d.Loop through the comments
    
    for (let i = 0; i < comments.length; i++)
    {
        // e. For each comment do the following:
        // f. Create an article element with document.createElement()
        let article = document.createElement("a");
        // g. create an h3 element with createElemWithText('h3',comment.name)
        let h3 = createElemWithText('h3', comments[i].name);
        // h. Create an paragraph element with createElemWithText('p', comment.body)
        let p1 = createElemWithText('p', comments[i].body);
        // i. Create an paragraph element with createElemWithText('p', `From: ${comment.email}`)
        let p2 = createElemWithText('p', `From: ${comments[i].email}`);
        // j.Append the h3 and paragraphs to the article element (see cheatsheet)

        //this works
        article.append(h3, p1, p2);

        //The function createComments should create and append one article element to the fragment for each comment.
        // k. Append the article element to the fragment

        //this does not?????
        fragment.append(article);
    }
    //l.Return the fragment element
    return fragment;
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

//a.Depends on the createSelectOptions function we created
//b. Receives the users JSON data as a parameter
function populateSelectMenu(users)
{
    //if users does not exist return undef
    if (!users) { return undefined; }
    //c. Selects the #selectMenu element by id
    let selectMenu = document.getElementById("selectMenu");
    //d. Passes the users JSON data to createSelectOptions()
    //e. Receives an array of option elements from createSelectOptions
    let options = createSelectOptions(users);
    //f. Loops through the options elements and appends each option element to the select menu
    for (let i = 0; i < options.length; i++)
    {
        selectMenu.append(options[i]);
    }
    //  g. Return the selectMenu element
    return selectMenu;
}


/*
10. getUsers
a.Fetches users data from: https://jsonplaceholder.typicode.com/ (look at Resources section)
b.Should be an async function
c.Should utilize a try / catch block
d.Uses the fetch API to request all users
e.Await the users data response
f.Return the JSON data
*/

//b.Should be an async function
const getUsers = async () => {
    //c.Should utilize a try / catch block
    try
    {
        //a.Fetches users data from: https://jsonplaceholder.typicode.com/ (look at Resources section)
        //d.Uses the fetch API to request all users
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        //e.Await the users data response
        const users = await response.json();
        //f.Return the JSON data
        return users;
    } catch (err)
    {
        console.error(err);
    }
}
//return setUser;


/*
11. getUserPosts
a.Receives a user id as a parameter
b.Fetches post data for a specific user id from:https://jsonplaceholder.typicode.com/ (look at Routes section)
c.Should be an async function
d.Should utilize a try / catch block
e.Uses the fetch API to request all users
f.Await the users data response
g.Return the JSON data
*/

//a.Receives a user id as a parameter
//c.Should be an async function
const getUserPosts = async (userID) => {
    //d.Should utilize a try / catch block
    try {
        if (!userID) { return undefined; }
        //b.Fetches post data for a specific user id from:https://jsonplaceholder.typicode.com/ (look at Routes section)
        const response = await fetch("https://jsonplaceholder.typicode.com/users/" + userID + "/posts");
        //f.Await the users data response
        const user = await response.json();
        //g.Return the JSON data
        return user;
    } catch (err)
    {
        console.error(err);
    }
}


/*
12. getUser
a.Receives a user id as a parameter
b.Fetches data for a specific user id from: https://jsonplaceholder.typicode.com/(look at Routes section)
c.Should be an async function
d.Should utilize a try / catch block
e.Uses the fetch API to request the user
f.Await the user data response
g.Return the JSON data
*/
//a.Receives a user id as a parameter
//c.Should be an async function
const getUser = async (userID) => {
    //d.Should utilize a try / catch block
    try {
        if (!userID) { return undefined; }
        //e.Uses the fetch API to request the user
        const response = await fetch("https://jsonplaceholder.typicode.com/users/" + userID);
        //f.Await the user data response
        const user = await response.json();
        //g.Return the JSON data
        return user;
    } catch (err)
    {
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
//a.Receives a post id as a parameter
//c.Should be an async function
const getPostComments = async (postID) => {
    //d.Should utilize a try / catch block
    try {
        if (!postID) { return undefined; }
        //b.Fetches comments for a specific post id from:
        //e.Uses the fetch API to request all users
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + postID + "/comments");
        //f.Await the users data response
        const user = await response.json();
        //g.Return the JSON data
        return user;
    } catch (err)
    {
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
g.Creates a variable comments equal to the result of await getPostComments(postId);
h.Creates a variable named fragment equal to createComments(comments)
i.Append the fragment to the section
j.Return the section element
*/

//const section = document.querySelector(`section[data-post-id = "${postID}"`);

//a.Dependencies: getPostComments, createComments
//b.Is an async function
//c.Receives a postId as a parameter
const displayComments = async (postId) => {
    //return undef if no postID
    if (!postId) { return undefined; }
    //d.Creates a section element with document.createElement()
    section = document.createElement('section');
    //e.Sets an attribute on the section element with section.dataset.postId
    section.dataset.postId = postId;

    //The function displayComments should create and return a section element with the correct attributes and classes.
    //The function displayComments should create and return a section element with all comments for the given post ID appended.

    //f.Adds the classes 'comments' and 'hide' to the section element
    //element.classList.add("newClass");
    section.classList.add("hide");
    section.classList.add("comments");

    //g.Creates a variable comments equal to the result of await getPostComments(postId);
    let comments = await getPostComments(postId);

    //h.Creates a variable named fragment equal to createComments(comments)
    //not working because create comment not working 
    let fragment = createComments(comments);

    //i.Append the fragment to the section
    section.append(fragment);
    //j.Return the section element
    return section;
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

//a.Dependencies: createElemWithText, getUser, displayComments
//b.Is an async function
//c.Receives posts JSON data as a parameter
const createPosts = async (posts) => {
    //if posts not exist return undef
    if (!posts) { return undefined; }

    //d.Create a fragment element with document.createDocumentFragment()
    let fragment = document.createDocumentFragment();

    
    //e.Loops through the posts data
    for (let i = 0; i < posts; i++)
    {
        //The function createPosts should create an h2, 4 paragraphs, a button, and a section element
        //, and then append each element to the parent article element in that specific order.
        //The function createPosts should create an h2, 4 paragraphs, a button, and a section element and assign 
        //the desired textContent and attributes per the project instructions.
        //createElemWithText('p', `From: ${comments[i].email}`);

        //f.For each post do the following:
        let post = posts[i];
        //g.Create an article element with document.createElement()
        let article = document.createElement("a");
        //h.Create an h2 element with the post title
        let h2 = createElemWithText('h2', post.title);
        //i.Create an p element with the post body
        let p1 = createElemWithText('p', post.body);
        //j.Create another p element with text of`Post ID: ${post.id}`
        let p2 = createElemWithText('p', `Post ID: ${post.id}`);
        //k.Define an author variable equal to the result of await getUser(post.userId)
        let author = await getUser(post.userId);
        //l.Create another p element with text of`Author: ${author.name} with ${author.company.name}`
        let p3 = createElemWithText('p', `Author: ${author.name} with ${author.company.name}`);

        //?????????????????????
        //have no idea how I am suposed to get this
        //m.Create another p element with the author’s company catch phrase.
        let p4 = createElemWithText('p', `${author.company.phrase}`);


        //n.Create a button with the text 'Show Comments'
        let button = createElemWithText('button', 'show comments');
        //o.Set an attribute on the button with button.dataset.postId = post.id
        button.dataset.postId = post.id;
        //p.Append the h2, paragraphs, button, and section elements you have created to the article element.
        //h2, 4 paragraphs, a button, and a section element
        article.append(h2, p1, p2, p3, p4, button);


        //q.Create a variable named section equal to the result of await displayComments(post.id);
        //not working because createComments not working--displayCommnets not working
        var section = await displayComments(post.id);

        //r.Append the section element to the article element
        article.append(section);

        //s.After the loop completes, append the article element to the fragment
        //was not entirely sure where this went
        fragment.append(article);
    }
    //t.Return the fragment element
    return fragment;
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

//a.Dependencies: createPosts, createElemWithText
//b.Is an async function
//c.Receives posts data as a parameter
const displayPosts = async (posts) => {
    
    //d.Selects the main element
    let main = document.querySelector("main");

    //e.Defines a variable named element that is equal to:
    //i.IF posts exist: the element returned from await createPosts(posts)
    //ii.IF post data does not exist: create a paragraph element that is identical to the default paragraph found in the html file.
    //iii.Optional suggestion: use a ternary for this conditional
    //not workiing bacuse createPosts not working
    let element = (posts) ? await createPosts(posts) : document.querySelector("main p");

    //f.Appends the element to the main element
    main.append(element);
    //g.Returns the element variable
    return element;
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

//a.Dependencies: toggleCommentSection, toggleCommentButton
//b.Receives 2 parameters: (see addButtonListeners function description)
//i.The event from the click event listener is the 1st param
//ii.Receives a postId as the 2nd parameter
function toggleComments(event, postId) {
    //if neither exist return undef
    if (!event || !postId) { return undefined; }
    //c.Sets event.target.listener = true(I need this for testing to be accurate)
    event.target.listener = true;
    //d.Passes the postId parameter to toggleCommentSection()
    //e.toggleCommentSection result is a section element
    let section = toggleCommentSection(postId);
    //f.Passes the postId parameter to toggleCommentButton()
    //g.toggleCommentButton result is a button
    let button = toggleCommentButton(postId);
    //h.Return an array containing the section element returned from
    //toggleCommentSection and the button element returned from
    //toggleCommentButton: [section, button]

    return [section, button];
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
//a.Dependencies: removeButtonListeners, deleteChildElements, displayPosts, addButtonListeners
//b.Is an async function
//c.Receives posts JSON data as a parameter
const refreshPosts = async (posts) => {
    //if posts not exist return undef
    if (!posts) { return undefined; }
    //d.Call removeButtonListeners
    //e.Result of removeButtonListeners is the buttons returned from this function
    let removeButtons = removeButtonListeners();
    //f.Call deleteChildElements with the main element passed in as the parameter
    let main = deleteChildElements(document.querySelector("main"));

    //h.Passes posts JSON data to displayPosts and awaits completion
    //i.Result of displayPosts is a document fragment
    //not working because displayPosts-createComments not working
    let fragment = await displayPosts(posts);
    //j.Call addButtonListener
    //k.Result of addButtonListeners is the buttons returned from this function
    let addButtons = addButtonListeners();
    //l.Return an array of the results from the functions called: [removeButtons, main, fragment, addButtons]
    return [removeButtons, main, fragment, addButtons];
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

//a.Dependencies: getUserPosts, refreshPosts
//b.Should be an async function
//c.Automatically receives the event as a parameter(see cheatsheet)
const selectMenuChangeEventHandler = async (e) => {
    //d.Defines userId = event.target.value || 1; (see cheatsheet)
    //i think
    let userId = e?.target?.value || 1;
    //e.Passes the userId parameter to await getUserPosts
    //f.Result is the posts JSON data
    let posts = await getUserPosts(userId);
    //g.Passes the posts JSON data to await refreshPosts
    //h.Result is the refreshPostsArray
    //not working becasue refrechPosts not working--createComments not working
    let refreshPostsArray = await refreshPosts(posts);
    //i.Return an array with the userId, posts and the array returned from refreshPosts:[userId, posts, refreshPostsArray]
    return [userId, posts, refreshPostsArray];
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

//a.Dependencies: getUsers, populateSelectMenu
//b.Should be an async function
//c.No parameters.
const initPage = async () => {
    //d.Call await getUsers
    //e.Result is the users JSON data
    let users = await getUsers();
    //f.Passes the users JSON data to the populateSelectMenu function
    //g.Result is the select element returned from populateSelectMenu
    let select = populateSelectMenu(users);
    //h.Return an array with users JSON data from getUsers and the select element result from populateSelectMenu: [users, select]
    return [users, select];
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

//a.Dependencies: initPage, selectMenuChangeEventHandler
function initApp() {
    //b.Call the initPage() function.
    initPage();
    //c.Select the #selectMenu element by id
    let selectMenu = document.getElementById("selectMenu");

    //d.Add an event listener to the #selectMenu for the “change” event fires for the #selectMenu
    //e.The event listener should call selectMenuChangeEventHandler when the change event fires for the #selectMenu
    //not workong becasue selectMenuChangeEventHandler--createComments not working
    selectMenu.addEventListener("change", selectMenuChangeEventHandler, false);

    //NOTE: All of the above needs to be correct for you app to function correctly.
    //However, I can only test if the initApp function exists.It does not return anything.
}

//*** This must be underneath the definition of initApp in your file.
//1. Add an event listener to the document.
//2. Listen for the “DOMContentLoaded” event.
//3. Put initApp in the listener as the event handler function.
//4. This will call initApp after the DOM content has loaded and your app will be started.
// true or false-----i have false

document.addEventListener("DOMContentLoaded", initApp, false);



