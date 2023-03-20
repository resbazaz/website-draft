# Arizona Research Bazaar website

### Technologies used:

- [Node.js](https://nodejs.org/)
- [Eleventy](https://www.11ty.dev/)
- [Alpine.js](https://github.com/alpinejs/alpine)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### 1\. Install Node.js

The easiest way to do this is usually via (NVM)[https://github.com/nvm-sh/nvm#install--update-script].

(TODO: add Linux, Windows examples)

On Mac OS X, these commands should work:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

source ~/.zshrc

nvm install node

nvm use node

# If everything worked correctly, this should output the node version that was installed:

node --version
```

### 2\. Clone this Repository

```
git clone https://github.com/resbazaz/website.git
```

### 3\. Navigate to the directory

```
cd website
```

### 4\. Install dependencies

```
npm install
```

### 5\. Build the project to generate the first CSS

This step is only required the very first time.

```
npm run build
```

### 6\. Run the local server

```
npm run start
```

This will start a web server running just on your local machine; if you open a browser to [http://localhost:8080](http://localhost:8080), you should see your local copy of the ResBaz website.

## How to contribute

### Saving and pushing changes

TODO: basic git fork + commit + PR flow

### Editing page contents

TODO: where to find markdown

### Updating page elements

TODO: where to find HTML, how includes and \_data work

### Customizing styles

TODO: Alpine, Tailwind stuff

### Changing how Github builds and deploys the site

TODO: `build.yml`

### Reconfiguring the site's infrastructure

TODO: `.eleventy.js`
