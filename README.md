# simple-sharer _[by BUILDBROTHERS.COM]_

_A javascript framework to share url to social media sites like facebook, twitter, reddit, whastapp in an easy and simple way._

## Supported Javascript Frameworks:

- React
- Vue
- Angular

## Features

- Share url to Facebook
- Share url to Reddit
- Share url to Whatsapp
- Share url to Twitter
- Copy url to clipboard

Simple-sharer is a lightweight javascript (<4KB) client-side framework, which makes it very easy and simple to share url to various social media sites.
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

## 1st Example with React.js

```sh
import React from 'react'
import { simplesharer } from "simple-sharer";

function App(){
    const sh = new simplesharer()
    sh.url = 'www.buildbrothers.com' //your url
    sh.title = "Build Brothers Website" //title for Reddit, this is optional
    sh.text = 'Passionate Mobile and Web Apps Development Team' // description for twitter, not more than a hundred characters, optional.
    sh.hashtags = ['buildbrothers', 'bb', 'software dev team'] // a list of hashtags for twitter,also optional

    return (
    <div>
        <button onClick={()=> sh.share('facebook') }>Share on Facebook</button>
        <button onClick={()=> sh.share('twitter') }>Share on Twitter</button>
        <button onClick={()=> sh.share('whatsapp') }>Share on Whatsapp</button>
        <button onClick={()=> sh.share('reddit') }>Share on Reddit</button>
        <button onClick={()=> sh.copy() }>Copy Link</button>
    </div>
    )
}
export default App;
```

## 2nd Example with React.js

```sh
import React from 'react'
import { simplesharer } from "simple-sharer";

function App(){
    return (
    <div>
        <button onClick={()=> simplesharer.Facebook({url: 'www.buildbrothers.com'})}>Share on Facebook</button>
        <button onClick={()=> simplesharer.Twitter({url:'www.buildbrothers.com', text: 'Passionate Mobile and Web Apps  Development Team', hashtags: ['buildbrothers', 'bb', 'software dev team']}) }>Share on Twitter</button>
        // if no url is provided, it will use the current url on the address bar.
        <button onClick={()=> simplesharer.Whatsapp() }>Share on Whatsapp</button>
        <button onClick={()=> simplesharer.Reddit({title: 'Build Brothers Website'}) }>Share on Reddit</button>
        <button onClick={()=> simplesharer.Copy() }>Copy Link</button>
    </div>
    )
}
export default App;
```

# Note:

By default simple-sharer pop up a new window while sharing url, to use the parent window, you can change the target like this;

```sh
const sh = new simplesharer()
sh.target = "_parent" //by default the target is _blank
```

When no url is defined, simple-sharer uses the current url of the page.

# License 

This program is licensed under the GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007. Please read the LICENSE.txt text document included with the source code if you would like to read the terms of the license.
