import $ from 'jquery';
import 'jquery-validation';
import 'jquery-mask-plugin';
import { Company, Client} from './classes';

    $("#inputForCompany").hide();    
    const urlParams = new URLSearchParams(location.search);
    if(urlParams.has("id")) {
        const id = urlParams.get("id");
        if(clients[id] instanceof Company) {
            $("#inputForCompany").show();
            $("#clientCompanyName").val(clients[id].companyName);
            $("#personPosition").val(clients[id].position);
            $("#isCompanyRadio").attr('checked', true);
        }
        $("#clientSurname").val(clients[id].surname);
        $("#clientName").val(clients[id].name);
        $("#clientOtch").val(clients[id].otch);
        $("#clientEmail").val(clients[id].email);
        $("#clientPhone").val(clients[id].phone.substr(2));
        $("#clientAvatar").attr("src", clients[id].avatar);
        $("#savebtn").prop("disabled", true);
    }
    else {
        $("#clientAvatar").attr("src", "./img/default.png");
        
    }
    $("input[type=radio][name=formradio]").change(function(){
        $("#inputForCompany").toggle();
    });

    $("#clientPhone").mask("(000)-000-00-00");
    $.validator.addMethod("validate_email", function(value, element) {

        if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)) {
            return true;
        } else {
            return false;
        }
    }, "Введите email в формате email@example.com");
    $("#clientInfo").validate({
        rules: {
            clientSurname: { //это name, а не id
              required: true,
                minlength: 4,
                maxlength: 30
            },
            clientName: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            clientEmail: {
                required: true,
                validate_email: true
            },
            clientPhone: "required",
            clientCompanyName: {
                required: {
                    depends: function (element) {
                        return $("input[type='radio'][name='formradio'][value='company']").is(":checked");
                    }
                }
            },
            personPosition: {
                required: {
                    depends: function (element) {
                        return $("input[type='radio'][name='formradio'][value='company']").is(":checked");
                    }
                }
            }
        },
        messages: {
            clientSurname: {
                required: "Введите имя"
            },
            clientName: {
                required: "Введите фамилию"
            },
            clientEmail: {
                required: "Введите email"
            },
            clientPhone: {
                required: "Введите телефон"
            },
            clientCompanyName: {
                required: "Введите название компании"
            },
            personPosition: "Введите должность представителя компании"
        },
        errorElement: "span",
        errorPlacement: function ( error, element ) {
            error.addClass('invalid-feedback');
            element.closest('.form-group').append(error);
        },
        highlight: function ( element, errorClass, validClass ) {
            $(element).removeClass('is-valid').addClass('is-invalid');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass('is-invalid').addClass('is-valid');
        },
        submitHandler: function(form) {
            
            //form.submit();
        }
    });


