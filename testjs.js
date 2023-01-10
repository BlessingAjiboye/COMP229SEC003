function FillBilling(f) {
    if (f.billingtoo.checked == true) {
        f.billingFirstName.value = f.shippingFirstName.value;
        f.billingLastName.value = f.shippingLastName.value;
        f.billingstreetAddress.value = f.shippingstreetAddress.value;
        f.billingcity.value = f.shippingcity.value;
        f.billingZip.value = f.shippingZip.value;
        f.billingPhone.value = f.shippingPhone.value;

    }
}



var fname = document.getElementbyId("firstName");
if (fname.valueMissing) {
    setCustomValidity("Please fill out this field.");
}
