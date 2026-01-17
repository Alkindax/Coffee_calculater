function togglePriceInputMethod() {
const method = document.getElementById(‘priceInputMethod’).value;
if (method === ‘perKg’) {
document.getElementById(‘perKgInput’).style.display = ‘block’;
document.getElementById(‘totalBagInput’).style.display = ‘none’;
} else {
document.getElementById(‘perKgInput’).style.display = ‘none’;
document.getElementById(‘totalBagInput’).style.display = ‘block’;
}
}

function calculatePricePerKg() {
const bagPrice = parseFloat(document.getElementById(‘bagTotalPrice’).value);
const bagWeight = parseFloat(document.getElementById(‘bagTotalWeight’).value);

```
if (bagPrice && bagWeight && bagWeight > 0) {
    const pricePerKg = (bagPrice / bagWeight) * 1000;
    document.getElementById('pricePerKgValue').textContent = pricePerKg.toFixed(2);
    document.getElementById('calculatedPricePerKg').style.display = 'block';
} else {
    document.getElementById('calculatedPricePerKg').style.display = 'none';
}
```

}

function togglePricingOption() {
const option = document.getElementById(‘pricingOption’).value;
if (option === ‘profitMargin’) {
document.getElementById(‘profitMarginInput’).style.display = ‘block’;
document.getElementById(‘fixedPriceInput’).style.display = ‘none’;
} else {
document.getElementById(‘profitMarginInput’).style.display = ‘none’;
document.getElementById(‘fixedPriceInput’).style.display = ‘block’;
}
}

function calculatePrice() {
let greenCoffeePrice;

```
// Determine which input method is being used
const inputMethod = document.getElementById('priceInputMethod').value;

if (inputMethod === 'perKg') {
    greenCoffeePrice = parseFloat(document.getElementById('greenCoffeePrice').value);
} else {
    // Calculate from total bag price and weight
    const bagPrice = parseFloat(document.getElementById('bagTotalPrice').value);
    const bagWeight = parseFloat(document.getElementById('bagTotalWeight').value);
    
    if (!bagPrice || !bagWeight || bagWeight <= 0) {
        alert('Please enter valid bag price and weight');
        return;
    }
    
    greenCoffeePrice = (bagPrice / bagWeight) * 1000;
}

// Get other input values
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
```

}

function resetForm() {
document.querySelector(‘form’).reset();
document.getElementById(‘baseCost’).textContent = “0.00 OMR”;
document.getElementById(‘sellingPrice’).textContent = “0.00 OMR”;
document.getElementById(‘calculatedProfitMargin’).textContent = “0.00%”;
document.getElementById(‘profitBeforeDiscount’).textContent = “0.00 OMR”;
document.getElementById(‘discountAmount’).textContent = “0.00 OMR”;
document.getElementById(‘finalPrice’).textContent = “0.00 OMR”;
document.getElementById(‘profitAfterDiscount’).textContent = “0.00 OMR”;
document.getElementById(‘calculatedPricePerKg’).style.display = ‘none’;
togglePricingOption();
togglePriceInputMethod();
}

function copyResults() {
const coffeeName = document.getElementById(‘coffeeName’).value || ‘Not specified’;
const inputMethod = document.getElementById(‘priceInputMethod’).value;
let priceInput = ‘’;

```
if (inputMethod === 'perKg') {
    priceInput = `Green Coffee Price per kg: ${document.getElementById('greenCoffeePrice').value || '0'} OMR`;
} else {
    const bagPrice = document.getElementById('bagTotalPrice').value || '0';
    const bagWeight = document.getElementById('bagTotalWeight').value || '0';
    const calculatedPrice = document.getElementById('pricePerKgValue').textContent || '0.00';
    priceInput = `Total Bag Price: ${bagPrice} OMR
```

Total Bag Weight: ${bagWeight} grams
Calculated Price per kg: ${calculatedPrice} OMR`;
}

```
const roastLoss = document.getElementById('roastLoss').value || '0';
const packageWeight = document.getElementById('packageWeight').value || '0';
const packagingCost = document.getElementById('packagingCost').value || '0';
const pricingOption = document.getElementById('pricingOption').value;
const discount = document.getElementById('discount').value || '0';

let pricingDetails = '';
if (pricingOption === 'profitMargin') {
    pricingDetails = `Profit Margin: ${document.getElementById('profitMargin').value || '0'}%`;
} else {
    pricingDetails = `Fixed Selling Price: ${document.getElementById('fixedPrice').value || '0'} OMR`;
}

const inputs = `═══════════════════════════════════
```

COFFEE PRICE CALCULATOR - INPUTS
═══════════════════════════════════

Coffee Name/Type: ${coffeeName}

Coffee Price Input Method: ${inputMethod === ‘perKg’ ? ‘Price per kg’ : ‘Total bag price & weight’}
${priceInput}

Roast Loss Percentage: ${roastLoss}%
Package Weight: ${packageWeight} grams
Packaging & Handling Cost: ${packagingCost} OMR

Pricing Option: ${pricingOption === ‘profitMargin’ ? ‘Profit Margin’ : ‘Fixed Selling Price’}
${pricingDetails}
Discount: ${discount}%`;

```
const results = `
```

═══════════════════════════════════
CALCULATION RESULTS
═══════════════════════════════════

Base Cost per Package: ${document.getElementById(‘baseCost’).textContent}
Selling Price Before Discount: ${document.getElementById(‘sellingPrice’).textContent}
Profit Margin: ${document.getElementById(‘calculatedProfitMargin’).textContent}
Profit Before Discount: ${document.getElementById(‘profitBeforeDiscount’).textContent}
Discount Amount: ${document.getElementById(‘discountAmount’).textContent}
Final Price After Discount: ${document.getElementById(‘finalPrice’).textContent}
Profit After Discount: ${document.getElementById(‘profitAfterDiscount’).textContent}

═══════════════════════════════════`;

```
const fullCopyText = inputs + "\n" + results;

navigator.clipboard.writeText(fullCopyText).then(() => {
    alert('Results copied to clipboard!');
}).catch(err => {
    alert('Failed to copy results. Please try again.');
    console.error('Copy failed:', err);
});
```

}