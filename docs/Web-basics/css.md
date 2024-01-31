---
sidebar_position: 8
---

# CSS Basics

CSS (Cascading Style Sheets) is a styling language used to control the presentation of web documents. It enhances the look and feel of HTML elements. Here are some fundamental concepts:

## Selectors

Selectors are patterns used to select and style HTML elements. Three main types:

- **Tags/Elements:** HTML elements (tags) act as selectors, enabling CSS rules to modify their appearances. Styles can enhance or completely transform the default look. For instance, the following css rule styles all `<p>` element with a font size of 24px and a color of #333.
  ```css
  p {
     font-size: 24px;
     color: #333;
  }
  ```
  
- **Classes:** When class attribute is added to an HTML tag, it modifies the tag's appearance, offering a versatile styling option for multiple tags. The class selector, identified by a period, can be used multiple times on a page. Example of a class declaration:

  ```css
    .highlight {
        background-color: yellow;
    }
  ```

- **IDs:** An ID selector uniquely identifies an element in an HTML document, naming and styling a specific part of the page layout. It is used only once on a page and starts with a pound sign (#).Example of an id declaration:
  ```css
    #header {
    border-bottom: 1px solid #ccc;
    }
  ```
  
## CSS Declaration Block

A declaration block, enclosed by curly braces {}, is a set of property-value pairs that style HTML elements. Each declaration ends with a semicolon ;. Below is an example CSS rule for a paragraph:

```css
p {
  background-color: blue;
}
```
In this instance, we alter the background color of the HTML paragraph element.

### Applying Styles

Styles can be applied inline, within an HTML document using the `<style>` tag, or in an external stylesheet using the `<link>`. It is best practice to use an external style sheet as shown below. 

Example: 
```html
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>My Page</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <!-- Your HTML content here -->
        </body>
    </html>
```

## Common Properties

Some commonly used CSS properties include:

- **color:** Sets the text color.
- **font-size:** Sets the font size.
- **margin:** Sets the margin space.
- **padding:** Sets the padding space.
- **border:** Sets the border properties.
- **background-color:** Sets the background color.

## Box Model

All HTML elements can be considered as boxes. The CSS box model consists of:
- **Margin:** An area around the border of an element. It is always transparent, with no background color.
- **Border:** The actual border that wraps the padding area. It can have styles set, and its background color is influenced by the background color of the element.
- **Padding:** An area around the content (value) of an element. The background color of the padding is influenced by the background color of the element.
- **Content:** The content or value of the element. This is where text, images, or other data appears. In the figure below, it is the blue shaded area.

Understanding an element's total width is crucial. It includes content, padding, border, and margin. Assuming the width is solely the content, a common error, can lead to site development issues. Using the box-sizing: border-box; property can prevent such problems.

Using box-sizing: border-box; in CSS ensures that an element's width includes padding and border widths, preventing layout issues. This property helps maintain a more predictable and consistent box sizing in web development.

[![Boxmodell-detail.png](https://upload.wikimedia.org/wikipedia/commons/7/7a/Boxmodell-detail.png)](https://commons.wikimedia.org/wiki/File:Boxmodell-detail.png#/media/File:Boxmodell-detail.png)

By [Matthias Apsel](//commons.wikimedia.org/wiki/User:G%C3%BCnther_M._Apsel) - Own work, [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en), [Link](https://commons.wikimedia.org/w/index.php?curid=34932417)

## Flexbox and Grid Layout

Flexbox and Grid Layout are powerful CSS features that facilitate the creation of flexible and responsive designs.

### Flexbox

Flexbox is a one-dimensional layout method for laying out items in rows or columns. It provides an efficient way to distribute space and align items within a container.

Example:

```css
.container {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.item {
   flex: 1;
   margin: 10px;
}
```
### Grid Layout

Grid Layout is a two-dimensional layout system for the web. It allows you to design complex layouts with rows and columns, providing precise control over the placement and sizing of elements.

```css
    .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  .item {
    grid-column: span 2;
  }

```
These layouts offer flexibility and responsiveness, making them essential tools for modern web design.

## Responsive Design

CSS allows for the creation of responsive designs that adapt to different screen sizes. Using techniques like media queries, styles can be adjusted based on the device's characteristics.

```css
@media only screen and (max-width: 600px) {
   body {
      font-size: 14px;
   }
}
```

Note: These are just the basics of CSS. As you delve deeper, you'll discover more advanced features and techniques to create stunning web designs.

## Resources 

- [W3 CSS Specifications](https://www.w3.org/Style/CSS/)
- [MDN CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)

### Quiz
- [W3Schools CSS Quiz](https://www.w3schools.com/css/css_quiz.asp)