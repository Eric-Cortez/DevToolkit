---
sidebar_position: 7
---

# HTML Basics 

## Introduction to HTML: HyperText Markup Language
HTML (HyperText Markup Language) is a fundamental language read by browsers to render webpages. As designers and front-end developers, HTML is a crucial part of our work. It serves as the structure for content on the web.

Browsers, however, are not intelligent; they follow a set of instructions given by programmers. Following a strict set of rules called a specification is essential, and for HTML, developers adhere to the HTML specification developed and updated by the World Wide Web Consortium (W3C). Browser manufacturers like Google, Mozilla, Microsoft, Apple, and Opera implement these specifications into their products.

## HTML5
The current HTML specification is HTML5. HTML5 has introduced new elements and removed others. It is not yet a completed specification, but it is already in use. It is recommended to use the [HTML5 specification](http://www.w3.org/TR/html5/) as a reference and the ["Can I Use"](https://caniuse.com/) site to check browser compatibility.

## The `<!DOCTYPE>`
One of the most crucial elements in an HTML document is the `<!DOCTYPE>`. It informs the browser about the HTML version used in the document. For HTML5, the `<!DOCTYPE html>` declaration is used, making it simple and easy to understand.

## HTML Elements
HTML content is created using HTML elements, which consist of tags wrapped in angle brackets. Elements usually come in pairs: a start tag and an end tag. 

For example:

```html
    <p>This is the content of a paragraph element.</p>
```

Note some elements can contain text as well as child elements 

For example:
```html
    <div>
        <p>This is the content of a paragraph element.</p>
        <p>This another paragraph element.</p>
    </div
```

### Void Elements 

A void element in HTML is an element that is not intended to have any content or children. Void elements are self-closing and do not have a closing tag. They are used to embed media, create line breaks, or include other elements that don't require additional content.

Examples of void elements include:

- `<img>`: Embeds images.
- `<br>`: Represents a line break.
- `<hr>`: Represents a thematic break or horizontal rule.
- `<input>`: Represents an input control.
- `<meta>`: Provides metadata about the HTML document.

Void elements are written with a single tag and any attributes they need, without a closing tag. For example:

```html
    <img src="example.jpg" alt="Example Image">
    <br>
    <input type="text" name="username" placeholder="Enter your username">
    <meta charset="UTF-8">
```

### Attributes

HTML elements can contain attributes; these are additional values that configure the elements or adjust their behavior in various ways to meet the criteria the users want.

- **Attributes in HTML**: Provide additional information about HTML elements.
- Attributes are included in the opening tag.
- **Attribute Spacing**: HTML attributes consist of name-value pairs, where the name is followed by an equal sign (=) and the value in quotes. Avoiding spaces within double quotes is crucial to prevent unintended behavior. For example, adding a space between words inside double quotes for a class attribute can lead to it being treated as separate classes.
- Examples: `class`, `id`, `src`, `href`.

For example: 
```html
    <a href="https://www.example.com" target="_blank" class="external-link">Visit Example Website</a>
```

### Global Attributes 

- id and class: These are global attributes applicable to all HTML elements. While there are other global attributes like href or src, elements may also have specific attributes that only they understand.


## Resources 

- [W3Schools HTML Reference](https://www.w3schools.com/tags/)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
