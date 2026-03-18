function togglePriceInputMethod() {
    const method = document.getElementById('priceInputMethod').value;
    document.getElementById('perKgInput').style.display =
        method === 'perKg' ? 'block' : 'none';
    document.getElementById('totalBagInput').style.display =
        method === 'totalBag' ? 'block' : 'none';
}

function calculatePricePerKg() {
    const bagPrice = parseFloat(document.getElementById('bagTotalPrice').value);
    const bagWeight = parseFloat(document.getElementById('bagTotalWeight').value);

    if (bagPrice > 0 && bagWeight > 0) {
        const pricePerKg = (bagPrice / bagWeight) * 1000;
        document.getElementById('pricePerKgValue').textContent = pricePerKg.toFixed(2);
        document.getElementById('calculatedPricePerKg').style.display = 'block';
    } else {
        document.getElementById('calculatedPricePerKg').style.display = 'none';
    }
}

function togglePricingOption() {
    const option = document.getElementById('pricingOption').value;
    document.getElementById('profitMarginInput').style.display =
        option === 'profitMargin' ? 'block' : 'none';
    document.getElementById('fixedPriceInput').style.display =
        option === 'fixedPrice' ? 'block' : 'none';
}

function calculatePrice() {
    let greenCoffeePrice;
    const inputMethod = document.getElementById('priceInputMethod').value;

    if (inputMethod === 'perKg') {
        greenCoffeePrice = parseFloat(document.getElementById('greenCoffeePrice').value);
    } else {
        const bagPrice = parseFloat(document.getElementById('bagTotalPrice').value);
        const bagWeight = parseFloat(document.getElementById('bagTotalWeight').value);

        if (!(bagPrice > 0 && bagWeight > 0)) {
            alert('Enter valid bag price and weight');
            return;
        }

        greenCoffeePrice = (bagPrice / bagWeight) * 1000;
    }

    let roastLoss = parseFloat(document.getElementById('roastLoss').value) || 0;
    let packageWeight = parseFloat(document.getElementById('packageWeight').value) || 0;
    let packagingCost = parseFloat(document.getElementById('packagingCost').value) || 0;
    let discount = parseFloat(document.getElementById('discount').value) || 0;
    let pricingOption = document.getElementById('pricingOption').value;

    if (roastLoss >= 100) {
        alert('Roast loss must be less than 100%');
        return;
    }

    let packageWeightKg = packageWeight / 1000;
    let roastedPricePerKg = greenCoffeePrice / (1 - roastLoss / 100);
    let baseCost = (roastedPricePerKg * packageWeightKg) + packagingCost;

    let sellingPrice, profitMargin;

    if (pricingOption === 'profitMargin') {
        profitMargin = parseFloat(document.getElementById('profitMargin').value) || 0;
        sellingPrice = baseCost * (1 + profitMargin / 100);
    } else {
        sellingPrice = parseFloat(document.getElementById('fixedPrice').value) || 0;
        profitMargin = ((sellingPrice - baseCost) / baseCost) * 100;
    }

    let finalPrice = sellingPrice * (1 - discount / 100);
    let profitBeforeDiscount = sellingPrice - baseCost;
    let profitAfterDiscount = finalPrice - baseCost;
    let discountAmount = sellingPrice - finalPrice;

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

    ['baseCost','sellingPrice','profitBeforeDiscount','discountAmount','finalPrice','profitAfterDiscount']
        .forEach(id => document.getElementById(id).textContent = "0.00 OMR");

    document.getElementById('calculatedProfitMargin').textContent = "0.00%";
    document.getElementById('calculatedPricePerKg').style.display = 'none';

    togglePricingOption();
    togglePriceInputMethod();
}

function copyResults() {
    const text = `
Coffee Calculator Results

Base Cost: ${document.getElementById('baseCost').textContent}
Selling Price: ${document.getElementById('sellingPrice').textContent}
Profit Margin: ${document.getElementById('calculatedProfitMargin').textContent}
Profit Before Discount: ${document.getElementById('profitBeforeDiscount').textContent}
Discount: ${document.getElementById('discountAmount').textContent}
Final Price: ${document.getElementById('finalPrice').textContent}
Profit After Discount: ${document.getElementById('profitAfterDiscount').textContent}
`;

    navigator.clipboard.writeText(text);
    alert("Copied!");
}