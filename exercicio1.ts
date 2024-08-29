class Item {
  private nome: string;
  private quantidade: number;
  private precoUnitario: number;

  constructor(nome: string, quantidade: number, precoUnitario: number) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.precoUnitario = precoUnitario;
  }

  public getPrecoUnitario(): number {
    return this.precoUnitario;
  }
  public getQuantidade(): number {
    return this.quantidade;
  }
  public getNome(): string {
    return this.nome;
  }
}

class Fatura {
  //atributos
  private itens: Item[] = [];
  private nome?: string;
  private cpf?: string;

  //metodos
  public obterPreco(): number {
    let precoTotal: number = 0;
    this.itens.forEach((item) => {
      precoTotal += item.getPrecoUnitario() * item.getQuantidade();
    });
    return precoTotal;
  }

  public adicionarItem(item: Item): void {
    this.itens.push(item);
  }
  public obterItensFatura(): Item[] {
    return this.itens;
  }
}

const fatura = new Fatura();
fatura.adicionarItem(new Item("Coca cola", 4, 7.0));
fatura.adicionarItem(new Item("Pepsi", 3, 6.0));
fatura.adicionarItem(new Item("Coxinha", 8, 4.5));
fatura.adicionarItem(new Item("BigMac", 4, 13.99));

console.log(fatura.obterItensFatura());

console.log(`Preço da fatura: ${fatura.obterPreco().toFixed(2)}`);

// console.log(typeof(fatura.itens));
