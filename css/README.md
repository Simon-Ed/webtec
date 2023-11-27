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

### Text
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

## Contrast
The amount of contrast between text and background is important, because of accessibility. This is especially true for those with visual impairments, color blindness, bad monitors and those using a screen outside. 

# Layout

## Positioning

### Relative