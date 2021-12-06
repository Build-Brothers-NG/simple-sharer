# simple-sharer _[by BUILDBROTHERS.COM]_
_A javascript framework to share url to social media sites like facebook, twitter, reddit, linkedin, whastapp in an easy and simple way._

## Supported Javascript Frameworks:

- React
- - Next Js
- Vue
- Angular

## Features

- Share url to Facebook
- Share url to Reddit
- Share url to Whatsapp
- Share url to Twitter
- Share url to Linkedin
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
        // call the share method, passing the platform name as a parameter to share.
        <button onClick={()=> sh.Share('Facebook') }>Share on Facebook</button>
        <button onClick={()=> sh.Share('twitter') }>Share on Twitter</button>
        <button onClick={()=> sh.Share('WHATSAPP') }>Share on Whatsapp</button>
        // Or directly call the platform as a method
        <button onClick={()=> sh.Linkedin() }>Share on Linkedin</button>
        <button onClick={()=> sh.Reddit() }>Share on Reddit</button>
        <button onClick={()=> sh.Copy() }>Copy Link</button>
    </div>
    )
}
export default App;
```

## 2nd Example with React.js

```sh
import React from 'react'
// you can directly import these methods and use it without the simplesharer class object
import { Facebook, Twitter, Reddit, Linkedin, Copy } from "simple-sharer";

function App(){
    return (
    <div>
        <button onClick={()=> Facebook({url: 'www.buildbrothers.com'})}>Share on Facebook</button>
        <button onClick={()=> Twitter({url:'www.buildbrothers.com', text: 'Passionate Mobile and Web Apps  Development Team', hashtags: ['buildbrothers', 'bb', 'software dev team']}) }>Share on Twitter</button>
        // if no url is provided, it will use the current page url.
        <button onClick={()=> Whatsapp() }>Share on Whatsapp</button>
        <button onClick={()=> Reddit({title: 'Build Brothers Website'}) }>Share on Reddit</button>
        <button onClick={()=> Copy() }>Copy Link</button>
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

For Dynamic routing, i.e when the url pathname has to change dynamically. Example;
if you have a bunch of card components that taks you to different items and if each card has a share button, we need  an id of the item to route directly to the item incase we decide to share the url. And each item has a different id.
```
import {simplesharer, Facebook} from "simple-sharer"
function Card(props){
    const {id, name} = props.item
    const sh = new simplesharer()
    // Here is where we append the id to the url, if the url is www.buildbrothers.com, and the id is '12345' we will get www.buildbrothers.com/12345. 
    sh.append = `/${id}`
    
    return (
        <div>
            <....../>
            <div className='share'>
                <butto sh.Copy()n>Copy URL</button>
                <button Facebook({append: `${id}`})>Share on Facebook</button>
            </div>
        </div>
    )
}
```
In your app component;
```
import Card from './card'
function App(){
    const items = [
    {id: 12345, name: 'item 1'},{id: 67890, name: 'item 2'}]
    return (
        {card.map(item => {
        return <Card item={item} />
        })
    )
}
```

# License 

This program is licensed under the GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007. Please read the LICENSE.txt text document included with the source code if you would like to read the terms of the license.
