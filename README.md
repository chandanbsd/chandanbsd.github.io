# My personal website

## Technology Stack

<ul>
<li>React.js</li>
<li>JavaScript</li>
<li>HTML</li>
<li>CSS</li>
</ul>

## Live Website Links

[chandanbsd.com](https://www.chandanbsd.com)

## Instructions to build website locally

Feel free to use the source code as per your needs.

I have setup 3 custom scripts within the package.json file to build and publish my source code to the web server.

<code>npm run predeploy</code>: This script builds the react code and generates the files need for production onto the build folder. This is the only script your need to run.

<code>npm run deploygh</code>: This script is for my personal use-case which uses the files compiled by <code>predeploy</code> and adds a CNAME file for my personal domain and publishes it to github pages at <a href="https://www.chandanbsd.tech" title="chandanbsd.tech">chandanbsd.tech</a>

<code>npm run deploynetlify</code>: This script is for my personal use-case which uses the files compiled by <code>predeploy</code> and publishes it to netlify at <a href="https://www.chandanbsd.com" title="chandanbsd.com">chandanbsd.com</a>
