import { AuthStateUserData } from "./typescript";


export const validAuthData = (userData: AuthStateUserData) => {
    const {username, password, email} = userData;

    const errors: Record<string, string> = {
        username: "",
        password: "",
        email: "",
    }

    if(username.length === 0) {
        return {
            ...errors, 
            username: "Ошибка: Необходимо ввести имя пользователя."
        }
    }

    if(username.length < 3 || username.length > 10) {
        return {
            ...errors, 
            username: "Ошибка: минимум 3 символов."
        }
    }

     if(password.length === 0) {
        return {
            ...errors, 
            username: "Ошибка: Вы не ввели пароль."
        }
    }

    if(password.length < 6) {
        return {
            ...errors, 
            username: "минимум 6 символов"
        }
    }

    if(email.length === 0) {
        return {
            ...errors, 
            email: "Ошибка: Необходимо ввести электронный адрес пользователя."
        }
    } else {
        const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        if (!EMAIL_REGEXP.test(email.toLowerCase())) {
            errors.email = "Ошибка: Некорректный формат email.";
    }
    }

    return errors; 

}
