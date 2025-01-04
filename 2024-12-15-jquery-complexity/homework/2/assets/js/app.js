
$(() => {
    
    $('#button1').click(function() {
        const firstName = $('#firstName').val()
        $('#cell1').append(firstName)
        document.getElementById('firstName').remove('firstName')
    });

    $('#button2').click(function() {
        const lastName = $('#lastName').val()
        $('#cell2').append(lastName)
        document.getElementById('lastName').remove('lastName')
    });

    

});

    