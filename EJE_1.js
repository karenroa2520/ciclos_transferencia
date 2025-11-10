
for (let n = 2; n <= 50; n++) {
    let es_primo = true;

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            es_primo = false; 
            break;         
        }
    }
    if (es_primo) {
        alert(n);
    }
}