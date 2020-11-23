export class Oggetto {

    public nome: string;
    public età: number;

}

export class Auto {

    [key: string]: any;
    public nome: string;
}

const oggetto: Oggetto = new Oggetto;
const auto: Auto = new Auto;

auto['nome'] = 'AAA';
oggetto.nome = 'AAA';
console.log(auto.nome);