gistploy (WIP)
=====

gistploy lets you deploy a static homepage free and anonymously on github from your terminal.

It takes a index.html, inline all the css, js and images, and then create a gist anonymously on
github.

it then uses rawgit.io to to solve the issue of github returning all it's raw content with content-type:'text' headers.
gistploy finally uses git.io to generate a short url for you by doing some magic.

##Installation
```bash
npm install -g gistploy
```

##Usage
```bash
gistploy --help
Usage:   gistploy              -- deploy index.html from current directory and returns a short-url.
         gistploy --public     -- make the gist public
         gistploy --help --h   -- shows this help
```