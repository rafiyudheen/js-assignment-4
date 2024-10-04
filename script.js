
  $(document).ready(function(event) {
    //debugger
    
    $('#reg-form').validate({
        rules: {
            Name: {
                required: true,
                minlength: 3,
                maxlength: 50
              },
              Email: {
                required: true,
                email:true
              },
              Phone:{
                    required:true,
                    minlength:10,
                    maxlength:14
              },
              Age:{
                required: true,
                range: [18, 120] 
              },
              Gender:{
                required:true,
                minlength:4,
                maxlength:15
              },
              Address:{
                required:false,
                maxlength:50
              }

            },
        messages:{
            Name: {
                required: "Please Enter Your Name",
                minlength: "length should be minimum 3 letters",
                maxlength: "length more than 50 letters not allowed"
              },
              Email: {
                required: "Required",
                email:"E-mail Not Valied Format"
              },
              Phone:{
                    required:"Required",
                    minlength:"Min 10 Letters required",
                    maxlength: "Limit Exceede (15)"
              },
              Age:{
                required: "Required",
                range: "Age must in Between 18 and 120" 
              },
              Gender:{
                required:"Required",
                minlength:"min 4 charcters required",
                maxlength:"Maximum 15 charchters"
              },
              Address:{
                required:false,
                maxlength:"Maximum 50 charchters"
              }

        },
        
        submitHandler: function(form) {
            // If validation is successful, call your JavaScript function here
            return true
        },
        invalidHandler: function(event, validator) {
            // document.getElementById("resultDiv").classList.replace("resultDiv-block","resultDiv-none")
            
        //    return false
                        
        }
    })})
