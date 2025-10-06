Hello, this is a test commit!

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
