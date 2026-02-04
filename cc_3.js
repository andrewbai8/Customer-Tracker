// Customer Records Epic Games // 
let customers = [
{
    name: "Andrew Wang",
    email: "andrewwang123@yahoo.com",
    purchases: ["Fortnite 1000 VBucks", "Fortnite 5000 VBucks"],

},
{
    name: "Alan Chen",
    email: "alanchen@yahoo.com",
    purchases: ["Fortnite Battle Pass"]

},
{
    name: "Ryan Smith",
    email: "RyanSmith123@gmail.com",
    purchases: ["Fortnite 10000 VBucks", "Fortnite 1000 VBucks"]

}]
// Add and removed data // 
// added customer // 
customers.push({
name: "Hendrick Wong",
email: "HendrickWong222@gmail.com",
purchases: ["Rocket League Game", "Fortnite 2500 VBucks"]

})
// removed customer // 
customers.shift();


// Step 4 
customers[0].email="alanchen_updated123@gmail.com";
customers[0].purchases.push("Fortnite STW");


    

// 
console.log(customers);
console.log(customers.email);
let purchases = ["Fortnite 10000 VBucks","Fortnite 2500 VBucks","Rocket League Game", "Fortnite 1000 VBucks","Fortnite Battle Pass", "Fortnite 5000 VBucks"]
console.log(purchases);
