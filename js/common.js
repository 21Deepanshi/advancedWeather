 // Get current date, month and year
        var currentDate = new Date().getDate();
        var currentMonth = new Date().toLocaleString('default', { month: 'long' }); // Full month name
        var currentYear = new Date().getFullYear();

        // Update HTML elements with the current date and month
        document.getElementById('currentDate').textContent = currentDate;
        document.getElementById('currentMonth').textContent = currentMonth;
        document.getElementById('currentYear').textContent = currentYear;
