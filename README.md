# simple-sharer _[by BUILDBROTHERS.COM]_
_A javascript framework to share url to social media sites like facebook, twitter, reddit, linkedin, whastapp in an easy and simple way._

_Star this project on GitHub https://github.com/Build-Brothers-NG/simple-sharer_

## Supported Javascript Frameworks:

- React
- - Next Js
- Vue
- Angular

## Features

- share url to facebook
- share url to reddit
- share url to Whatsapp
- share url to twitter
- share url to linkedin
- copy url to clipboard
- Clean String

Simple-sharer is a lightweight (<4KB) javascript framework, which makes it very easy and simple to share URL to various social media sites.
Simple-sharer is created by BuildBrothers.com

## Here is how to get started with simple-sharer.

## Installation

Install using NPM

```sh
npm i simple-sharer
```

Install using yarn

```sh
yarn add simple-sharer
```

## Example 1 with React.js

```sh
import React from "react";
import { Simplesharer } from "./simplesharer";

function App() {
  const sh = new Simplesharer();
  sh.url = "www.buildbrothers.com"; //your url
  sh.title = "Build Brothers Website"; //title for reddit, this is optional
  sh.text = "Passionate Mobile and Web Apps Development Team"; // description for twitter, not more than a hundred characters, optional.
  sh.hashtags = ["buildbrothers", "bb", "software dev team"]; // a list of hashtags for twitter,also optional

  return (
    <div>
      {/* call the share method, passing the platform name as a parameter to share. */}
      <button onClick={() => sh.share("Facebook")}>share on facebook</button>
      <button onClick={() => sh.share("tWitter")}>share on twitter</button>
      <button onClick={() => sh.share("WHATSAPP")}>share on Whatsapp</button>
      {/* // Or directly call the platform as a method */}
      <button onClick={() => sh.linkedin()}>share on linkedin</button>
      <button onClick={() => sh.reddit()}>share on reddit</button>
      <button onClick={() => sh.copy()}>copy Link</button>
    </div>
  );
}
export default App;

```
# Note:
The parameter for the share method is case insensitive, as long as it is a valid name, the function will get executed.
the valid parameters are:
facebook, twitter, reddit, linkedin, whatsapp, copy.
## Example 2 with React.js

```sh
import React from "react";
// you can directly import these methods and use it without the Simplesharer class object
import {
  facebook,
  twitter,
  reddit,
  linkedin,
  copy,
  whatsapp,
} from "./simplesharer";

function App() {
  return (
    <div>
      <button onClick={() => facebook({ url: "www.buildbrothers.com" })}>
        share on facebook
      </button>
      <button
        onClick={() =>
          twitter({
            url: "www.buildbrothers.com",
            text: "Passionate Mobile and Web Apps  Development Team",
            hashtags: ["buildbrothers", "bb", "software dev team"],
          })
        }
      >
        share on twitter
      </button>
      {/* if no url is provided, it will use the current page url. */}
      <button onClick={() => whatsapp()}>share on Whatsapp</button>
      <button onClick={() => reddit({ title: "Build Brothers Website" })}>
        share on reddit
      </button>
      <button onClick={() => copy()}>copy Link</button>
    </div>
  );
}
export default App;

```

# Note:

By default simple-sharer pop up a new window while sharing url, to use the parent window, you can change the target like this;

```sh
const sh = new Simplesharer()
sh.target = "_parent" //by default the target is _blank
```

When no url is defined, simple-sharer uses the current url of the page.

You can also clean a string, before sharing it to social media site using the cleanString function. 

# Example:
```
import React from 'react'
import { cleanString } from "simple-sharer";

function App(){
    const uncleanString = "The 'Quick'? Brown Fox Jump, Over The Lazy Dog;"
    const clean = cleanString(uncleanString) 
    //will return "the-quick-brown-fox-jump-over-the-lazt-dog"
    return (
    <div>
        <...../>
    </div>
    )
}
export default App;
```

_Star this project on GitHub https://github.com/Build-Brothers-NG/simple-sharer_
```
# License 

This program is licensed under the GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007. Please read the LICENSE.txt text document included with the source code if you would like to read the terms of the license.