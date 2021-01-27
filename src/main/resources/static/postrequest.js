$(document).ready(
    function (){
        $("#personForm").submit(function(event){
            event.preventDefault();
            ajaxPost();
        });

        function ajaxPost(){
            var formData = {
                personId : $("#personId").val(),
                personName : $("#personName").val(),
            }

            $.ajax({
                type : "POST",
                contentType : "application/json",
                url : "/savePerson",
                data : JSON.stringify(formData),
                dataType : 'json',
                success : function(result){
                    alert(result.data.personName + " registrato nell'Arraylist!");
                    console.log(result)
                },
                error : function (e){
                    alert("Error");
                    console.log("error",e);
                }
            });
        }
    }
)