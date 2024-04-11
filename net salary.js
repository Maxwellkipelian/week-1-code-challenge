function calculateNetSalary(basicSalary, benefits) {
    // Tax rates and deductions
    const taxRates = [
        { lowerBound: 0, upperBound: 24000, rate: 10 },
        { lowerBound: 24001, upperBound: 32333, rate: 15 },
        { lowerBound: 32334, upperBound: 40385, rate: 20 },
        { lowerBound: 40386, upperBound: 48334, rate: 25 },
        { lowerBound: 48335, upperBound: Infinity, rate: 30 }
    ];

    const nhifRate = 1.5; // NHIF rate is 1.5% of gross salary
    const nssfRate = 6; // NSSF rate is 6% of basic salary

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (tax)
    let tax = 0;
    let taxableIncome = grossSalary - (nhifRate / 100 * grossSalary) - (nssfRate / 100 * basicSalary);
    for (const rate of taxRates) {
        if (taxableIncome > rate.lowerBound) {
            tax += Math.min(taxableIncome - rate.lowerBound, rate.upperBound - rate.lowerBound) * rate.rate / 100;
        } else {
            break;
        }
    }

    // Calculate NHIF deductions
    const nhifDeductions = nhifRate / 100 * grossSalary;

    // Calculate NSSF deductions
    const nssfDeductions = nssfRate / 100 * basicSalary;

    // Calculate net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    // Return all calculated values
    return {
        grossSalary: grossSalary,
        tax: tax,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}

