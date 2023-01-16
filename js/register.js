$(document).ready(function(){

    $('#register_submit').click(function(e){
        e.preventDefault();
        // собираем данные с формы
        let register_email    = $('#register_email').val();
        let register_name   = $('#register_name').val();
        let register_password   = $('#register_password').val();
        // отправляем данные
        console.log(register_email, register_name, register_password);
        // $.ajax({
        //     url: "/register", // куда отправляем
        //     type: "post", // метод передачи
        //     cache: false,
        //     dataType: "json", // тип передачи данных
        //     data: { // что отправляем
        //         "register_email": register_email,
        //         "register_name": register_name,
        //         "register_password": register_password,
        //     },
        //
        //     success: function(data){
        //         console.log(login_password);
        //     }
        // });
    });
});
