Hello, this is a test commit!

Reminders for the DataBase deliverable:
- Don't forget to add an alert if the login doesn't work.

# CS 260 Notes

## Push/Pull/Commit
It's not too difficult. Just remember to always pull when you enter VS, and you can commit using the side bar. You can push changes by using the SYNC button. If you have an issue (like a really big one, and you don't mind deleting things), you can use git reset --hard HEAD~1 to literally delete your last commit (such as if you accidently saved with your personal access token).

## Using the Internet

Packet:
- Ethernet address (6 byte)
- IP address (4 byte)
- TCP ports, tells you what to connect to on an IP (2 byte)
- HTTP url, and asks questions from the web
- DNS - domain name service, converts web url to IP address; starts by looking for the root, and then goes backward through the url

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

I think it works? 

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).
My HTTPS is active, my site is secure.

## HTML

Start with <!DOCTYPE html>

&lt;html>&lt;/html> Start of the document

&lt;head>&lt;/head> imports CSS, javascript

&lt;header>&lt;/header>

&lt;span>&lt;/span> inline css sectioning 

&lt;nav>&lt;/nav>

&lt;body>&lt;/body> everything else on the page

&lt;p>&lt;/p> are paragraph tags

&lt;ul> &lt;li>&lt;/li> &lt;/ul> writes "unordered list" and "list item" inside

&lt;tabel> &lt;tr> &lt;th>&lt;/th> &lt;/tr> &lt;tr>&lt;td>&lt;/td>&lt;/tr> &lt;/tabel> table, row, header or item

&lt;h1>&lt;/h1> Header 1 format (can be 2, 3, etc for smaller font sizes)

&lt;section>&lt;/section> can be used to section off for styling

&lt;aside>&lt;/aside>

&lt;footer>&lt;/footer>

&lt;img alt = "description" src = url />

&lt;a href = url>Text Displayed&lt;/a>

Tags generally need to be closed.

w3 schools have tutorials about html elements and such

*This was easy. I was careful to use the correct structural elements such as header, footer, main, nav, and form. The links between the three views work great using the `a` element.*

*The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.*

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. You mostly just had to install all of the packages, and then you could access your website by running "npm run dev". In the routing, you basically just replace the main part of your page with a function that will display depending on what you put in as the link. It uses NavLink to basically pretend you're on another page, but it's really just functions. The only issue I had was that you can't have a custom nav bar for each page. You also cannot contain "style" tags inside the element, it all has to be CSS.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
## Midterm 1 Review

In the following code, what does the link element do?
- link elements are used to pull in stylesheets, or bootstrap, or probably js, or the favicon

In the following code,  what does a div tag do?
- scripting, structure, grouping

In the following code, what is the difference between the #title and .grid selector?
- the # is an id, . selects a class

In the following code, what is the difference between padding and margin?
- padding is inside, margin is outside

Given this HTML and this CSS how will the images be displayed using flex?
- flex allows for the size to change in reference to something like the screen size

What does the following padding CSS do?
- padding create space inside the element, moves the edges of the box away from the text

What does the following code using arrow syntax function declaration do?
- ex: const add = (a, b) => a + b;
- (a, b) defines the input
- => shows what the function is doing, with the default as return
- Additionally, you could define => const result = a + b ; return result

What does the following code using map with an array output?
- map creates a new array, with each element transformed with the specified function
- numbers.map(num => num * num) will return a new array, with each element squared
  - [1,2,3,4] --> [1,4,9,16]
 
What does the following code output using getElementByID and addEventListener?
- getElementByID returns the element with that ID
   - use .innerHTML to change the inner text
- addEventListener listens for an event, and then specifies the function to do when it hears the event
  - events can include click, keydown, mouseover
  
What does the following line of Javascript do using a # selector?
- Reminder - a # selector looks for something with that id

Which of the following are true? (mark all that are true about the DOM)
- Document Object Model
- tree of objects - html --> (head, body) ; body --> (header, main) ; main --> (h1, p, a)
- lets JS get, change, add, or delete any html or css
- properties, methods, events

By default, the HTML span element has a default CSS display property value of:
- span is an inline element

How would you use CSS to change all the div elements to have a background color of red?
- div { background-color: red; }

How would you display an image with a hyperlink in HTML?
- img src within <> or </>

In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
- content - padding - border - margin

Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
- use spans, id or class selectors

What will the following code output when executed using a for loop and console.log?
- we love for loops!

How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
- document.getElementById("byu").style.color = "green"

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
- See above notes about HTML tags

How do you declare the document type to be html?
- !DOCTYPE html inside <>
- Directs the browser to use relevant specifications when rendering the HTML

What is valid javascript syntax for if, else, for, while, switch statements?
- if (condition) {thing;} else if (condition) {thing;} else {thing}
- for (init; condition; increment) {thing}
- while (condition) {thing;}
- let fruit = "apple" ; switch (fruit) {
  case "banana":
    console.log("Bananas are yellow.");
    break;
  case "apple":
    console.log("Apples are red or green.");
    break;
  case "orange":
    console.log("Oranges are orange.");
    break;
  default:
    console.log("Unknown fruit.");
}

What is the correct syntax for creating a javascript object?
- const varname = { key: "value", key: "value" }
- you can also add properties later
- const varname = new Object({dic})
- use a function like a class init method and then call new

Is it possible to add new properties to javascript objects?
- yes - varname.propertyname = "value"

If you want to include JavaScript on an HTML page, which tag do you use?
- script <> </>

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
- use span, or replace innerHTML with mostly the same

Which of the following correctly describes JSON?
- JavaScript Object Notation

What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
- chmod - change file permissions - option mode file
- pwd - gets current directory
- cd - change directory
- ls - lists files in the direcotry
- vim - opens new text file in vim
- nano - text editor through the terminal
- mkdir - create new directory
- mv - move or rename file
- rm - remove files
- man - manual?
- ssh - establish secure connection to remote server
- ps - process status
- wget - get files from the web
- sudo - superuser do, run with root-level permissions

Which of the following console command creates a remote shell session?
- ssh

Which of the following is true when the -la parameter is specified for the ls console command?
- long listing (details), all files (including hidden)

Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
- TLD - .click
- domain - bozo.click
- subdomain - banana.fruit.bozo.click

Is a web certificate is necessary to use HTTPS.
- Yes

Can a DNS A record can point to an IP address or another A record.
- an A record stands for "addres" - it maps a domain name to an IP address
- it doesn't seem to be that an A record can point to another A record
- you can use CNAME to point to another A record, like an alias for the website

Port 443, 80, 22 is reserved for which protocol?
- 443 - SSH or HTTPS
- 80 - HTTP
- 22 - remote desktop protocol

What will the following code using Promises output when executed?
- Promises run asynchronously, so they may get done later
- If you await the promise before moving on, then it will execute first



## Midterm 2 Review


What is the default port for HTTP/HTTPS/SSH? 
- Default ports are when you connect to a website, this will be the port that your computer will default to going to
- HTTP - 80
- HTTPS - 443
- SSH - 22

What does an HTTP status code in the range of 300/400/500 indicate?
- 200 - good response
- 500 - server error, something wrong on the server end
- 400 - client side error, page not found, unauthorized
- 300 - redirects

What does the HTTP header content-type allow you to do?
- what content type we are sending or expecting to receive when we do a get/put type request
- application, json, image
- content type of the request body

What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do?
https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
- storing cookies for authentication
- expiration times
- session cookies will expire when the session ends
- secure cookies get encrypted
- http-only can't be accessed by javascript, prevents client from reading or writing the cookie
- same site determines whether cookies can get passed by third parties

Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document?
- Post - creating or setting information in a resource
- Get - get the resource
- Delete - delete resource
- Put - updating resource
- Only calls the next function in the list if you do next()

Given the following Express service code: What does the following front end JavaScript that performs a fetch return?
- Could send an error or success code (200/300/400/500)
- Could set information into the local storage
- Sending information to the next function

Given the following MongoDB query, select all of the matching documents {name:Mark}
- Selects any objects that have the attribute name == Mark
- { $gte: } and $lt denote greater than or equal or less than
- can use regular expressions in query
- $or: [this, that]

How should user passwords be stored?
- Using a secure hash!
- You don't ever need to read the user password, just match it

Assuming the following node.js websocket code in the back end, and the following front end websocket code, what will the front end log to the console?
- The websocket is a class that provides packaging around the ws instance
- It has ways to listen for and send messages
- onmessage, onclose, onopen, recieveEvent, send

What is the websocket protocol intended to provide?
- Real time communication between users online
- Don't have to refresh the page to get new information

What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM
- JSX - Java Script with XML
- AWS - Amazon web services
- NPM - node package manager
- NVM - Node version manager

Assuming an HTML document with a body element. What text content will the following React component generate?  The react component will use parameters.
- Index.js will find the root and render the app
- app.jsx will have different functions that will display pages based on the input given
- functions will either be given an object props, or { specific thing }

Given a set of React components that include each other, what will be generated?
- 

What does a React component with React.useState do?
- Creates a variable that will reload the page anytime the variable gets changed

What are React Hooks used for?
- updating components when they change
- rendering components
- You don't have to refresh the page for information to update
- useState, useEffect

What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do? https://react.dev/reference/react/hooks
- see useState above
- Effect - set conditions for when to execute code (such as when a state variable updates, or just the first time)

Given React Router code, select statements that are true.
- Routes call functions that return html page data
- Can pass elements to the function

What does the package.json file do?
- When you do node projects, that will install the dependencies
- defining packages like "npm run dev"
- extensions, versions

What does the fetch function do?
- Calls a 'website' to make an http request
- backend apis, other apis

What does node.js do?
- Allows us to run the backend code
- runs javascript code outside of an internet browser

What does pm2 do?
- A daemon that handles running your deployed server

What does Vite do?
- Bundles react code or other types of code
- Building jsx into javascript
- Debugging and running 

