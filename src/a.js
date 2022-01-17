import React from 'react'
console.log('a')
import wyz from './wuyanzu'
console.log(wyz)
console.log('React')

// a.html => a.js
// b.html => b.js

// -------

// a.html => wyz.js & a.js
// b.html => ---- b.js

const c = () => {
    console.log('x')
}
c()