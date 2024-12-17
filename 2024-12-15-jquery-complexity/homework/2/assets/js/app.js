// jQuery will run the callback once the DOM is ready to be manipulated
$(() => {
    // When the button with id="button1" is clicked
    $('#button1').click(function() {
        // Get the value from the input field with id="inputValue"
        var inputValue = $('#inputValue').val();
        
        // Check if the input is not empty
        if (inputValue !== "") {
            // Add the input value to the specific cell with id="cell1"
            $('#cell1').text(inputValue);
            
            // Clear the input field (optional, depending on if you want to keep it)
            $('#inputValue').val('');
            
            // Optionally, remove the input field after adding the value
            $('#inputValue').remove();
        } else {
            alert('Please enter a value!');
        }
    });
});

    