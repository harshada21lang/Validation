# JavaScript Form Validation
## About
A Client-side form validation using JavaScript.
## HTML Attributes on form elements
**Attributes and their Purposes** 
1. **required** :- Defines that this field should be validated (with JS by my implementation and not via native HTML5 browser defaults)
2. **placeholder** :- Writes some placeholder text which usually describes the fields with some example input (not supported in IE8 and below)
3. **autocomplete** :- When autocomplete is on, the browser automatically complete values based on values that the user has entered before
## Binding the validation to a form
There are two ways to validate form fields, one is on the submit event of the form itself, then all the fields are evaluated one by one. The other method is by binding the checkField function itself to each field, for events like Blur, Change or whatever event you wish.
## Main functions
**setErrorMsg** :- setErrorMsg takes the field (element) and the error message (string). It adds the "error" class to the element which adds the error styling to the input.
**setSuccessMsg** :- setSuccessMsg removes the error messages and adds the "success" class to the element which adds the green tick icon to the input.
## Technical-Information
To run the site on your local machine
1. Download or clone the repository onto your machine.
2. Extract the .zip file.
3. Open .html file in your browser.
4. Alternatively you can click on the following [Site Link](https://harshada21lang.github.io/Validation/) to view.
## Screenshots
