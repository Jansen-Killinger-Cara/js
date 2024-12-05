export class Principal{
    #nome;
    #num1;
    #num2;
    constructor(nome, num1, num2){
        this.#nome = nome;
        this.#num1 = num1;
        this.#num2 = num2;

    }
    getNome(){
        return this.#nome;
    }
    getNum1(){
        return this.#num1;
    }
    getNum2(){
        return this.#num2;
    }

}