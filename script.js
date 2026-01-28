function calculateRate() {
    const distance = document.getElementById("distance").value;
    const weight = document.getElementById("weight").value;

    if (distance === "" || weight === "") {
        document.getElementById("result").innerText = "Please enter all values";
        return;
    }

    // Simple rate logic
    const rate = (distance * 2) + (weight * 5);

    document.getElementById("result").innerText =
        "Estimated Shipping Cost: ₹" + rate;
}
