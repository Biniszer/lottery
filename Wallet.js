class Wallet {
    constructor(money) {
        let _money = money;
        //Pobieranie aktualnej zawartości portfela
        this.getWalletValue = () =>_money;

        //Sprawdzanie czy użytkownik ma odpowiedniąilość środków
        this.checkCanPlay = value => {
            if(_money >= value) return true;
            return false;
        }

        //Zmiana zawartości portfela
        this.changeWallet = (value, type = "+") => {
            if(typeof value === "number" && !isNaN(value)) {
                if(type === "+") {
                    return _money += value;
                } else if(type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("nieprawidłowy typ działania")
                }
            }else {
                console.log(typeof value);
                throw new Error("nieprawidłowy typ działania");
            }
        }
    }

}

// const wallet = new Wallet(200);