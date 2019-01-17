window.addEventListener('load', () => {
var error_box = document.querySelector('error_box');

    $('#form').validate({
        rules : {
            title : {
                required : true
            },
            description :{
                required : true
            }            
        },
        messages :{
            title : {
                required: $('#error_box').html('debes llenar algo')
            } ,
            description : {
                required: $('#error_box').html('debes llenar una descripcion')
                
            }
        }
    })
    
    

})