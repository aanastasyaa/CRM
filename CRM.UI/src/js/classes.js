export class Client {
    
    constructor(id, surname, name, otch, phone, email, avatar) {
        this.id = id; 
        this.surname = surname;
        this.name = name;
        this.otch = otch;
        this.phone = phone;
        this.email = email;
        this.avatar = avatar;
    }

    getFullName() {
        return this.surname + " " + this.name + " " + (this.otch ? this.otch : "");
    }

    toJSON() {
        let {id, surname, name, otch, phone, email, avatar} = this;
        return {id, surname, name, otch, phone, email, avatar};
    }

}

export class Company extends Client { //представитель компании
    constructor(id, surname, name, otch, phone, email, avatar, personPosition, companyName) {
        super(id, surname, name, otch, phone, email, avatar);
        this.personPosition = personPosition;
        this.companyName = companyName;
    }

    toJSON() {
        let {id, surname, name, otch, phone, email, avatar, personPosition, companyName} = this;
        return {id, surname, name, otch, phone, email, avatar, personPosition, companyName};
    }

}

export default ([new Client(null,"Эйнштейн", "Альберт", "Германович", "+79270000105", "einstein@email.com", "./img/professor.png"),
                 new Client(null,"Ивасаки", "Минэко", "", "+79870045474", "ivasaki@gmail.com", "./img/geisha.png"),
                 new Company(null,"Красько", "Иван", "Дмитриевич", "+79085547441", "krasko@ufnc.com", "./img/man.png", "Зам. гендиректора", "УФНЦ")
               ]);

