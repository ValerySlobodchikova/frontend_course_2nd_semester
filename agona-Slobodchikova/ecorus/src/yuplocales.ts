import {setLocale} from "yup"

export const yupRuLocale = () => {
    setLocale({
            mixed: {
                required: "Поле обязательно для заполнения",
            },
            string: {
                min: 'Нужно ввести не менее ${min} символов',
                email: 'Неправильный формат почты',
            }
        }
    )
}