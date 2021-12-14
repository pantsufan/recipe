---
title: Recipes
tagline: Community Driven Recipe Platform
layout: layout
# pagination:
#   data: collections.recipe
#   size: 8
#   alias: collections.recipe
#   reverse: true
---

## All Recipes

<br/>
{% for recipe in collections.recipe reversed %}

[{{ recipe.data.title }}]({{recipe.url}})
<small>{{recipe.date | date: "%a, %b %d, %y"}}</small>
{% endfor %}

<!-- <div style="display: flex;
  flex-flow: row wrap;
  justify-content: space-between;">
{%- if pagination.href.previous -%}<a href="{{pagination.href.previous}}"><button>Previous Page</button></a>{%- endif %}

{%- if pagination.href.next -%}<a href="{{pagination.href.next}}"><button>Next Page</button> </a>{%- endif -%}</div> -->
