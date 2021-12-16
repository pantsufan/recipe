---
title: About
layout: layout
tagline: Get To Know The Project
---

## Info

Recipes is a community driven website, were users are free to share their favouirte receipes to the world, without the bloated mess such as unwanted JavaScript code and advertisments.

## How To Share

Sharing your recipes is simple and easy, just follow the steps listed below

#### Requiremnts

- PC or even phone if your dedicated enough
- GitHub Account (with some knowledge of git)
- Knowledge of Markdown ( Don't know? lookup for markdown cheatsheet)
- Text Editor

#### Steps

- Git clone this website's repo using
  `git clone https://github.com/pantsufan/recipe`
  If you don't know, lookup on the internet there are tons of guides.
- Open the project in any code editor of choice (for advance users), for new users don't do anything, just open up your text editor and get ready for the next step.
- Now we would create a markdown file, whose extension is `.md` with file-name of your recipe, for example `Cake.md`
- In markdown file, we first need to enter the meta-data which would tell the site what is our recipe name and date of publish, for that simply copy the below section into your markdown file, making the necessary changes.

```
---
title: Cake
date: 2021-08-13
---
```

- Now simple write your recipe with proper steps using markdown syntax (for ingredients use markdown table)
- Great, you made your first recipe post, now the only thing which is left is to share it with the world (new users copy the recipe file into the project's sub-folder called recipe/2021 or create a new folder if year is not present).
- Open terminal or git bash in project folder and commit your changes `git commit -m 'Added cake recipe'` and the `git push` and then make a pull request.
- Within few hours your pull request would be merged and your recipe would be live on the website.

#### Credits

A huge thanks for all the contributors for sharing their recipes with us
