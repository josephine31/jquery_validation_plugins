$(document).ready(function(){
    $('#submit').click(function(){
        $("#vital_from").valid();
    });

    $.validator.setDefaults({ 
        ignore: [] // DON'T IGNORE PLUGIN HIDDEN SELECTS, CHECKBOXES AND RADIOS!!!
    });

    $.validator.addMethod("selectDay", function(value, element, arg){
        return arg !== value;
       }, "Select Day");

    $.validator.addMethod("selectMonth", function(value, element, arg){
        return arg !== value;
       }, "Select Month");  

    $.validator.addMethod("selectYear", function(value, element, arg){
        return arg !== value;
       }, "Select Year"); 

    $('#vital_from').validate({
        rules:{
            firstname:{
                required:true
            },
            lastname:{
                required:true
            },
            phone:{
                 required:true,
                 digits:true,
                 rangelength:[10,10]
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                rangelength:[6,8]
            },
            confirm_password:{
                required:true,
                rangelength:[6,8],
                equalTo:'#password',
            },
            feedback:{
                required:true,
                rangelength:[5,500]
            },
            gender:{
                required:true
            },
            "interest[]":{
                required:true,
                minlength: 1
            },
            "gender[]":{
                required:true
            },
            day:{
                selectDay: "Select Day"
            },
            month:{
                selectMonth: "Select Month"
            },
            year:{
                selectYear: "Select Year"
            }
            
        },
        messages:{
            firstname:"First Name is required",
            lastname: "Last Name is required",
            phone:{
                required:"Phone Number is required",
                rangelength:"Phone Number must be 10digits"
            },
            email:"Email is required",
            password:{
                required:"Password is required",
                rangelength:"Password must contain 6-8 characters",
            },
            confirm_password:{
            required:"Confirm Password is required",
            rangelength:"Password must contain 6-8 characters",
            equalTo:"Enter same as above",
            },
            feedback:"Your Feedback is required",
            "gender[]":"Select your Gender",
            'interest[]':"Select atleast one",
            day: {
                valueNotEquals: "Select Day"
            },
            month: {
                valueNotEquals:"Select Month"
            },
            year:{
                valueNotEquals:"Select Year"
            }
        },
        onfocusout: function(element) {
            this.element(element);  
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "interest[]")
                error.appendTo('.checkbox_error');
            else if  (element.attr("name") == "gender[]"){
                error.appendTo('.radio_error');
            }
            else if  (element.attr("name") == "day"){
                error.appendTo('.select_error');
            } 
            else if(element.attr("name") == "month") {
                error.appendTo(".select_error");
            } 
            else if(element.attr("name") == "year") {
                error.appendTo(".select_error");
            }  
 
            else
                error.insertAfter(element);
        }
    });
});