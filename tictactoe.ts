let symbol: string = 'X';

function toggleSymbol(s: string): string {
  return s == 'X' ? 'O' : 'X';
}

function onClick(e): void {
  if(e.target.innerHTML == "") {
    e.target.innerHTML = symbol;
    symbol = toggleSymbol(symbol);
  }
}

function main(): void {
  $(document).on('click', 'td', e => onClick(e));
}

window.addEventListener("load", main);
