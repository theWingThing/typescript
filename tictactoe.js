var symbol = 'X';
function toggleSymbol(s) {
    return s == 'X' ? 'O' : 'X';
}
function onClick(e) {
    e.target.innerHTML = symbol;
    symbol = toggleSymbol(symbol);
}
function main() {
    $(document).on('click', 'td', function (e) { return onClick(e); });
}
window.addEventListener("load", main);
