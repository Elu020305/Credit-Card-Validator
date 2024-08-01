document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('creditCardForm');
    const result = document.getElementById('result');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        let str = document.getElementById('creditCardNumber').value;
        let sum = 0;
        let a = "";
        let b = [];
        let c = [];

        // Validate and filter input
        for (let i = 0; i < str.length; i++) {
            if (str[i] >= '0' && str[i] <= '9') {
                a += str[i];
            } else {
                result.textContent = "Invalid Number";
                return;
            }
        }

        // Convert string to array of integers
        for (let i = 0; i < a.length; i++) {
            b.push(parseInt(a[i], 10));
        }

        // Process the digits
        for (let i = 0; i < b.length; i++) {
            if (i % 2 === 0) {
                let x = b[i] * 2;
                if (x > 9) {
                    x = check(x);
                }
                c.push(x);
            } else {
                c.push(b[i]);
            }
        }

        // Calculate sum of the processed digits
        for (let i = 0; i < c.length; i++) {
            sum += c[i];
        }

        // Validate the credit card number
        if (sum % 10 === 0 && str[0]=='4') {
            result.textContent = "Valid Credit Number And Visa";
        }
        else if (sum % 10 === 0 && str[0]=='3') {
            result.textContent = "Valid Credit Number And Amex";
        }
        else if (sum % 10 === 0 && (str[0]=='5' || str[0]=='6')) {
            result.textContent = "Valid Credit Number And Master Card";
        } else {
            result.textContent = "Not A Valid Credit Number";
        }
    });

    function check(n) {
        while (n >= 10) {
            let sum = 0;
            while (n > 0) {
                sum += n % 10;
                n = Math.floor(n / 10);
            }
            n = sum;
        }
        return n;
    }
});
