$(document).ready(function(){

    $('#login_submit').click(function(e){
        e.preventDefault();
        // собираем данные с формы
        let login_name    = $('#login_name').val();
        let login_password   = $('#login_password').val();
        // отправляем данные
        console.log(login_name, login_password);
        // $.ajax({
        //     url: "/login", // куда отправляем
        //     type: "post", // метод передачи
        //     cache: false,
        //     dataType: "json", // тип передачи данных
        //     data: { // что отправляем
        //         "login_name": login_name,
        //         "login_password": login_password,
        //     },
        //
        //     success: function(data){
        //         console.log(login_password);
        //     }
        // });
    });
});