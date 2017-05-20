let symbol: string = 'X';

function toggleSymbol(s: string): string {
  return s == 'X' ? 'O' : 'X';
}

function onClick(e): void {
  e.target.innerHTML = symbol;
  symbol = toggleSymbol(symbol);
}

function main(): void {
  $(document).on('click', 'td', e => onClick(e));
}

window.addEventListener("load", main);
