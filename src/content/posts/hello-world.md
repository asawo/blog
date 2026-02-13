---
title: Hello World
date: 2026-02-13
description: A style reference showing all available markdown formatting.
---

This is a style reference post. Every markdown element the blog supports is demonstrated below.

## Headings

### This is an h3

Regular paragraph text follows headings. The body uses monospace typography at 0.95rem with 1.6 line-height.

## Text formatting

This is **bold text** and this is *italic text*. You can also use ***bold italic*** together. Here is ~~strikethrough~~ text.

## Links

Here is a [link to Astro](https://astro.build) and here is another [link to GitHub](https://github.com). Links use the accent color and transition on hover.

## Lists

Unordered list:

- First item
- Second item
- Third item with a longer description that might wrap to the next line depending on viewport width

Ordered list:

1. First step
2. Second step
3. Third step

## Blockquotes

> This is a blockquote. It uses a left border and muted text color to visually separate quoted content from the surrounding text.

## Code

Inline code looks like `const x = 42` within a sentence.

A fenced code block:

```js
function greet(name) {
  return `hello, ${name}`;
}

console.log(greet('world'));
```

## Horizontal rules

Content above the rule.

---

Content below the rule.

## Images

![Placeholder image](https://picsum.photos/600/200)

## Tables

| Feature | Status |
|---------|--------|
| Light mode | Done |
| Dark mode | Done |
| Theme toggle | Done |

## Nested content

> A blockquote containing **bold**, *italic*, and `inline code`.
>
> - And a list inside a blockquote
> - With multiple items

1. An ordered list with:
   - A nested unordered list
   - With two items
2. Back to the outer list
