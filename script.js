function togglePricingOption() {
    const option = document.getElementById('pricingOption').value;
    if (option === 'profitMargin') {
        document.getElementById('profitMarginInput').style.display = 'block';
        document.getElementById('fixedPriceInput').style.display = 'none';
    } else {
        document.getElementById('profitMarginInput').style.display = 'none';
        document.getElementById('fixedPriceInput').style.display = 'block';
    }
}

function calculatePrice() {
    // Get input values
    let greenCoffeePrice = parseFloat(document.getElementById('greenCoffeePrice').value);
    let roastLoss = parseFloat(document.getElementById('roastLoss').value);
    let packageWeight = parseFloat(document.getElementById('packageWeight').value);
    let packagingCost = parseFloat(document.getElementById('packagingCost').value);
    let discount = parseFloat(document.getElementById('discount').value);
    let pricingOption = document.getElementById('pricingOption').value;

    let baseCost, sellingPrice, profitMargin, profitBeforeDiscount, finalPrice, profitAfterDiscount, discountAmount;

    // Convert package weight to kg for calculations
    let packageWeightKg = packageWeight / 1000;

    // Calculate the roasted coffee price per kg
    let adjustedRoastedCoffeePricePerKg = greenCoffeePrice / (1 - roastLoss / 100);

    // Calculate the base cost for the given package weight
    baseCost = (adjustedRoastedCoffeePricePerKg * packageWeightKg) + packagingCost;

    if (pricingOption === 'profitMargin') {
        profitMargin = parseFloat(document.getElementById('profitMargin').value);
        sellingPrice = baseCost * (1 + profitMargin / 100);
        finalPrice = sellingPrice * (1 - discount / 100);
    } else {
        sellingPrice = parseFloat(document.getElementById('fixedPrice').value);
        profitMargin = ((sellingPrice - baseCost) / baseCost) * 100;
        finalPrice = sellingPrice * (1 - discount / 100);
    }

    // Calculate profits and discount amount
    profitBeforeDiscount = sellingPrice - baseCost;
    profitAfterDiscount = finalPrice - baseCost;
    discountAmount = sellingPrice - finalPrice;

    // Display the results
    document.getElementById('baseCost').textContent = baseCost.toFixed(2) + " OMR";
    document.getElementById('sellingPrice').textContent = sellingPrice.toFixed(2) + " OMR";
    document.getElementById('calculatedProfitMargin').textContent = profitMargin.toFixed(2) + "%";
    document.getElementById('profitBeforeDiscount').textContent = profitBeforeDiscount.toFixed(2) + " OMR";
    document.getElementById('discountAmount').textContent = discountAmount.toFixed(2) + " OMR";
    document.getElementById('finalPrice').textContent = finalPrice.toFixed(2) + " OMR";
    document.getElementById('profitAfterDiscount').textContent = profitAfterDiscount.toFixed(2) + " OMR";
}

function resetForm() {
    document.querySelector('form').reset();
    document.getElementById('baseCost').textContent = "0.00 OMR";
    document.getElementById('sellingPrice').textContent = "0.00 OMR";
    document.getElementById('calculatedProfitMargin').textContent = "0.00%";
    document.getElementById('profitBeforeDiscount').textContent = "0.00 OMR";
    document.getElementById('discountAmount').textContent = "0.00 OMR";
    document.getElementById('finalPrice').textContent = "0.00 OMR";
    document.getElementById('profitAfterDiscount').textContent = "0.00 OMR";
    togglePricingOption(); // To reset the pricing option fields
}

function copyResults() {
    const results = `
Base Cost per Package: ${document.getElementById('baseCost').textContent}
Selling Price Before Discount: ${document.getElementById('sellingPrice').textContent}
Profit Margin: ${document.getElementById('calculatedProfitMargin').textContent}
Profit Before Discount: ${document.getElementById('profitBeforeDiscount').textContent}
Discount Amount: ${document.getElementById('discountAmount').textContent}
Final Price After Discount: ${document.getElementById('finalPrice').textContent}
Profit After Discount: ${document.getElementById('profitAfterDiscount').textContent}`;

    // Copy the results to the clipboard
    navigator.clipboard.writeText(results).then(() => {
        alert('Results copied to clipboard!');
    });
}
