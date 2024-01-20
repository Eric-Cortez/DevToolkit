---
sidebar_position: 8
---

# CSS Basics

CSS (Cascading Style Sheets) is a styling language used to control the presentation of web documents. It enhances the look and feel of HTML elements. Here are some fundamental concepts:

## Selectors

Selectors are patterns used to select and style HTML elements. Three main types:

- **Tags/Elements:**
  ```css
  h1 {
     font-size: 24px;
     color: #333;
  }
  ```

### Applying Styles


Styles can be applied within an HTML document using the `<style>` tag or in an external stylesheet using the `<link>`. It is best practice to use an external style sheet. 

Example: 
```
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

- **Content:** Actual content of the box.
- **Padding:** Space between content and border.
- **Border:** Border around the padding.
- **Margin:** Space outside the border.

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

