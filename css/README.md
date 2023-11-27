# CSS theory

## Selectors and declarations
Selectors &#8594; tell which elements to be styled
Declarations &#8594; tell how the element should be styled

Declarations consist of property and value. F.ex 'color' is a property and '#121212' is the value.

| Selector |  Meaning | Example |
|---|---|---|
| Universal selector | Applies to all elements in the document. | * {} |
| Type selector | Matches element names | h1, h2, p, a etc. |
| Class selector | Matches with applied class name | .selector-name {} |
| Id selector | Matches with id attribute | #selector-id |
| Child selector | Matches element that is direct child of another | li>a {} |

### Pseudo-* selectors
Pseudo-elements are attached at the end of an element selector with a double colon "::". F.ex ::first-letter, ::first-line, ::before, ::after etc.

Pseudo-classes can be used to style an element based on its state. F.ex  :visited, :hover, :focus and :active.

### Cascading
The browsers interprets the css rules in a specific top-down order. All matching rules for a particular selector will be applied, except for where they conflict with each other:
- the last rule to be declared is applied
- the more specific one, e.g., p#introduction is more specific than p
- !important &#8594; take precedence over all other rules that apply to the same element

# Generic styling
## Color
Properties:
- ```color``` is simply used to give color to text.
- ```background-color``` sets the background color inside a box.
Values:
- ```rgb(100, 90, 90)```
- ```rgba(100, 90, 90, 0.3)```
- Hex codes &#8594; ```#323232```
- Predefined color names may also be used, f.ex ```red``` or ```darkcyan```

## Contrast
The amount of contrast between text and background is important, because of accessibility. This is especially true for those with visual impairments, color blindness, bad monitors and those using a screen outside. 


## Text
```font-family``` can be set the typeface to be used for text. The installed typefaces users have differ between OS.

## Boxes
CSS treats HTML elements as boxes, which can have dimensions, borders, space around/inside them etc.

### Dimensions
Dimensions of a box is specified with:
- width / height
- min/max-width/height

```min-*``` and ```max-*``` are used to make sure boxes are not too narrow or too wide. This is important in order to adapt to different screen sizes. The overflowing content can be *hidden* or *scrolled* with ```overflow``` property.

The ```display``` allows us to change a block-level element to an inline-level element, and vice versa.

Boxes can be hidden with the property ```visiblity```, which is often usen to toggle the visibility of an element.


### margin and padding
Margin is the space outside box. Padding is the space inside a box. Multivalue syntax:
```
margin: 10px; /* value applied to all edges */
margin: 10px 5%; /* top/bottom left/right */
margin: 10px 15px 20px; /* top left/right bottom */
margin: 10px 14px 10px 12px; /* top right bottom left */
```
# Styling lists, tables and forms
## Lists
- ```list-style-type``` property sets the marker (disc, character, or custom counter) of a list item element.
- ```list-style-image``` property sets an image to be used as the list item marker.
- ```list-style-position``` property sets the position of the marker relative to a list item (inside or outside)

The pseudo-element ::marker selects the marker box of an list item. It can be used to f.ex set the color of the marker.

## Tables
Since tables contain a lot of information it is good practice to:
- give cells padding
- distinguish headings (e.g. ```text-transform: uppercase```)
- use *"zebra stripes"*, ```tbody tr:nth-child(even) {background-color: gray}```
- right-align numerals, ```text-align: right```
- add interaction, e.g. changing color of row when hovering mouse over it
- use precentages to size the table and columns to make it responsive
- +++

Tables have several unique properties that allow neat styling of the. The following are properties of the table:
- ```border-spacing``` controls the gap between adjacent cells, which can be nice.
- ```border-collapse``` should in my opinion be set to *collapse* to have a decent looking table (*separate* is the other value).
- ```empty-cells``` allows to hide empty cells
- ```table-layout``` can be set to auto or fixed. However *auto* might produce strange results, since the witdh of the table and cells are adjusted to fit the content. Therefore *fixed* is most times better since the column widths are determined by the width of the heading &lt;th&gt;.

## Forms
A form can quickly grow and contain a lot of user inputs. Here it's important to give a lot of user feedback in through the use of f.ex psudo-classes like :focus and :hover. Also consider just using a library like Material Design.

# Images
## &lt;img&gt;
The size of an image is controller through normal ```height``` and ```width``` properties.

#### Aligning images
Images are inline elements and can be aligned with float. Another solution is to convert them to block-level elements and use ```margin: 0 auto;```.

#### Background images
- The ```background-image``` property is used for placing an image as backgrond for a box
- The ```background-repeat``` property is used to repeat an image. It can have the following values:
    - `repeat` makes the background image repeat both horizontally and vertically
    - `repeat-x` repeats the image horizontally only
    - `repeat-y` repeats the image vertically only
    - `no-repeat` makes the image only show once
    - `round` scales images to fit
    - `space` evenly distributes images from end to end
- `background-attachment` specifies whether an image should stay in position or move as the user scrolls the page
    - `fixed` makes the background image stay in the same position on the page
    - `scroll` makes the image move with the scroll
- `background-position` kinda works the same as normal position. It is used when the image is not being repeated.

# Layout
Elements have a *normal flow*, which means they are:
- placed one after another,
- below on a new line if *block-level* element
- continuing on the same line if they are *inline-elements*

These elements can also be grouped together. A &lt;div&gt; will make it's content a *block-level* containter, while a &lt;span&gt; will make it's content a *inline-level* container. They are usually referred to as the *parent element*, or alternativly *containing element*. Normal flow can be changed with the *relative*, *absolute*, *fixed* and *sticky*, using the `position` prop. The position property of normal flow is `position: static`.

## Positioning

#### Relative
Relative positioning moves an element in relation to where it would have been in normal flow. The position of the surrounding element would not be affected, since the space on the container itself is the same as if position were static.

#### Absolute
Absolute positioning removes the element from the normal flow. It is positioned relative to its closest *ancestor (parent element)*.

#### Fixed
Similarly to position absolute the fixed element is removed from the normal flow of the document. The difference is that the fixed element is positioned relative to the browser window. The huge advantage of this is that the element stays in position even while scrolling.

#### Sticky
This is a hybrid of relative and fixed positioning. What we mean by this is that it is treated as relative *until* the user starts scrolling.

## Floating elements
The `float` property places an element to the far left or right side of it's container. This is because the floated element becomes a block-level element and the other content will thus flow around it. They are f.ex good for wrapping text around images. However their use is usually limited for layout in smaller components, since we have flexbox and grid for the bigger stuff.

## Fixed vs. liquid layouts
The fixed layouts will not adapt to screen size, because the width of elements are constant (f.ex px). Example: [https://htmlandcssbook.com/code-samples/chapter-15/fixed-width-layout.html](https://htmlandcssbook.com/code-samples/chapter-15/fixed-width-layout.html)

The liquid layouts *will* adapt to screen size, because the width of their elements are set with %. In addition properties such as min/max can be used to set boundaries. Example: [https://htmlandcssbook.com/code-samples/chapter-15/liquid-layout.html](https://htmlandcssbook.com/code-samples/chapter-15/liquid-layout.html)

