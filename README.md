# Personal Blog ⚡️ [![Actions Status: deployment](https://github.com/samiurprapon/blog/actions/workflows/deploy.yml/badge.svg) ](https://github.com/samiurprapon/blog/actions?query=workflow%3A"deployment")

Multipurpose blog to share my views on technology, research, innovations and what I will explore in the near future.

## :link: Live Demo

Here's a [live demo](https://samiurprapon.github.io/blog/)

Github [Issues / Blogs](https://github.com/samiurprapon/blog/issues)

<br>

# Getting Started 🚀

## Development Environment

- node.js 14.X
- yarn 1.22.X

## Installing & Configuration

### 0. Clone this repository

```bash
$ git clone https://github.com/samiurprapon/blog.git
```

### 1. Go into the repository

```bash
$ cd blog
```

### 2. Install dependencies

```bash
$ yarn install
```

### 3. **Generate a Github Personal Access Token.**

Generate a Github personal access token using these [Instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) or simply go and generate from [here](https://github.com/settings/tokens).

**`Make sure you don't select any scope just generate a simple token without any scope`**

After that copy your generated token and then encode your token into base 64 using this [Website](http://www.utilities-online.info/base64/)

`Copy your base64 converted token`

### 4. **Change `/src/config.js`.**

Go to your cloned repository and make the following changes in `/src/config.js`

```javascript
const config = {
  // Github Converted Token (User, repo) from -> https://www.utilities-online.info/base64
  githubConvertedToken: "Your access token here",

  // Github UserName
  githubUserName: "Your github username here",

  // Github Repo Name
  githubRepo: "Your repo's name here",

  // Personal Blog Title
  title: "Title of your blog",

  // Personal Blog Subtitle
  subtitle: "Subtitle of your blog",
};
```

### 5. **Write A Blog.**

After doing following changes now you just need to write a blog on repository issues that you have mentioned in your `config.js`

- Open your repository [github issues](https://github.com/samiurprapon/blog/issues)
- Create a new issue with categorical labels
- Now write your blog in github issue in markdown. You can also use [slack edit](https://stackedit.io/app#) to write your markdown
- Add a label `blog` on your github issue to make it different from other standard issues. Keep in mind `blog` label is mandatory otherwise it won't show on your website.

### 6. **Deploy**

0. Build webpage

```bash
$ yarn run build
```

1. Deploy on github

```bash
$ yarn run deploy
```

2. Go to `https://github.com/<your-username>/<your-repo-name>/settings/secrets/actions` , click `New repository secret` and add a secret named as `ACCESS_TOKEN` and paste your previously generated Github Personal Access Token as `value`.
3. **Change `.github/workflows/deploy.yml`.**

```yml
git config --global user.email "your-github-mail-address"
git config --global user.name "your-github-username"
git remote set-url origin https://${{secrets.ACCESS_TOKEN}}@github.com/<your-github-username>/<your-repo-name>.git
```

---

# Contribution

I highly encourage the community to step forward and improve this project further. You can fix any reported bug, propose or implement new features, write tests, etc.

Pull requests are welcome! See the [contributor guidelines](https://github.com/samiurprapon/blog/blob/main/.github/CONTRIBUTING.md) for more details.

# License [![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

```
Copyright 2021 Samiur Prapon

Licensed under the GNU General Public License, Version 2.0 (the "License");
You may obtain a copy of the License at

   https://github.com/samiurprapon/blog/blob/main/LICENSE

Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

```
