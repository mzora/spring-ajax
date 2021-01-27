$(document).ready(
    function (){
        $("#getAllPersons").click(function (event){
            event.preventDefault();
            ajaxGet();
        });

        function ajaxGet(){
            $.ajax({
                type : "GET",
                url : "/getAllPersons",
                success : function(result){
                    if(result.status == "success"){
                        $('#getResultDiv ul').empty();
                        $.each(result.data, function(i, person){
                            let utente = "ID: "+person.personId+" Nome:"+person.personName+"<br>";
                            $('#getResultDiv .list-group').append(utente)
                        });
                        console.log("Success: ", result);
                    }else{
                        $("#getResultDiv").html("<strong>Error</strong>");
                        console.log("Fail: ", result);
                    }
                },
                error : function(e){
                    $("#getResultDiv").html("<strong>Error</strong>");
                    console.log("Error: ", e);
                }
            });
        }
    }
)