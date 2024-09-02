function form(form) {

        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                tel: "required",
                email: {
                    required: true,
                    email: true
                },
                title: "required",
                terms: "required"
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите минимум {0} символа!")
                },
                tel: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                },
                title: {
                    required: "Пожалуйста, введите заголовок"
                },
                terms: {
                    required: "Пожалуйста, подтвердите свое согласие"
                }
            }
        });

    $('input[name=tel]').mask('+7 (999) 999-99-99');
}

export default form;