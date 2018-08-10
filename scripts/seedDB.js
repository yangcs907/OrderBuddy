const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://heroku_lrwsp73t:2tqkdih5fn5qn5a8mrj6q4tnph@ds111798.mlab.com:11798/heroku_lrwsp73t" || "mongodb://localhost/my_db"
  );

const itemSeed = [
{
    "category": "Kids",
    "name": "Chicken Fingers and Onion Rings",
    "image": "Images/Kids/Chicken_Fingers_and_Onion_Rings.jpg",
    "price": 10.21,
    "desc": "These crispy chicken bites are a creative take on onion rings. They're filled with onion flavor and are sure to be a kid favorite."
}, {
    "category": "Kids",
    "name": "Burger and Fries",
    "image": "Images/Kids/Burger_and_Fries.jpg",
    "price": 10.75,
    "desc": "A Gigantic Chop House Hamburger on a Toasted Brioche Bun. Served with a Slice of Grilled Onion, Lettuce, Tomato, Secret Sauce and French Fries"
}, {
    "category": "Kids",
    "name": "Koshier Hot Dog",
    "image": "Images/Kids/Koshier_Hot_Dog.jpg",
    "price": 6.17,
    "desc": "Char-grilled Hebrew National hot dog wrapped topped with mustard, freshly chopped onions, neon green relish, kosher pickle, sliced ripe red tomatoes, sport peppers, and piled onto a perfectly steamed poppy seed bun. Topped off with a sprinkle of celery salt. Served with Fries."
}, {
    "category": "Kids",
    "name": "Margherita Pizza",
    "image": "Images/Kids/Margherita_Pizza.jpg",
    "price": 7.67,
    "desc": "A thin-crust pizza pie, a pizza margherita adorned with lots of fresh mozzarella, plenty of fresh basil, and rich garlicky tomato sauce whisked together with a drizzle of olive oil and a pinch of salt."
}, {
    "category": "Kids",
    "name": "Pizza Bites and Fries",
    "image": "Images/Kids/Pizza_Bites_and_Fries.jpg",
    "price": 8.50,
    "desc": "One-of-a-kind crisp, thin cracker crust, homemade pizza sauce, with lots of fresh mozzarella and plenty of fresh basil. Served with Fries our signature homemade ketchup. "
}, {
    "category": "Kids",
    "name": "Spaghetti with Red Sauce",
    "image": "Images/Kids/Spaghetti_with_Red_Sauce.jpg",
    "price": 7.19,
    "desc": "Spaghetti with Fresh Tomato, Marinara Sauce, Fresh Basil, and a Touch of Garlic. Light and Fresh!"
}, {
    "category": "Specials",
    "name": "Alaskan King Crab Legs",
    "image": "Images/Specials/Alaskan_King_Crab_Legs.jpg",
    "price": 13.96,
    "desc": "Alaska King Crab is unmatched in flavor and texture. The succulent, mildly sweet meat is snow-white and tender, with highlights of bright red. Large stockpot with a steamer insert, add beer, lemons and garlic and bring to a boil. Serve with drawn butter."
}, {
    "category": "Specials",
    "name": "Seared Veal with Asparagus",
    "image": "Images/Specials/Veal_with_Asparagus.jpg",
    "price": 18.00,
    "desc": "8 oz. filet of USDA Veal sliced and seared in a combination of premium oils served with grilled asparagus and tomatoes."
}, {
    "category": "Specials",
    "name": "Thai Noodles",
    "image": "Images/Specials/Thai_Noodles.jpg",
    "price": 14.00,
    "desc": "A classic Oriental dish. Sauteed noodles cooked in sesame and peanut oil served with steak chunks and fried tofu mixed with bean sprouts and green onions."
}, {
    "category": "Specials",
    "name": "Artisan Burger",
    "image": "Images/Specials/Artisan_Burger.jpg",
    "price": 10.79,
    "desc": "100% Grass-fed beef on a Pacific Coast Bakery Traditional Sesame Bun. Paired with melted cheddar, crispy onion strings, juicy ripe tomatoes, mixed greens, smoked BBQ sauce, and spicy mayo. Served with Hand Battered Onion Rings."
}, {
    "category": "Specials",
    "name": "Clam and Mussel Broil",
    "image": "Images/Specials/Clam_and_Mussel_Broil.jpg",
    "price": 12.47,
    "desc": "Sauteed in melted green-flecked butter, flavored with a little Pernod, is slathered on mussels and clam on the half shell, and then broiled until the tops are brown-edged and golden. Served with a Small Side Salad."
}, {
    "category": "Specials",
    "name": "Garlic Lamb with Mashed Potatoes",
    "image": "Images/Specials/Garlic_Lamb_with_Mashed_Potatoes.jpg",
    "price": 10.40,
    "desc": "Juicy lamb chops marinated in ginger, garlic, lemon juice and special tandoori sauce cooked in clay oven. Served with Garlic-herb Potatoes."
}, {
    "category": "Specials",
    "name": "Sea Bass and New Potatoes",
    "image": "Images/Specials/Sea_Bass_and_New_Potatoes.jpg",
    "price": 12.52,
    "desc": "Spicy Sea Bass Fillets in melted butter, lemon juice, and sauté the mushrooms and onion. Seasoned with chili oil, sea salt, parsley and cracked black pepper. Served with New Potatoes."
}, {
    "category": "Specials",
    "name": "Spinach and Avacado Salad",
    "image": "Images/Specials/Spinach_and_Avacado_Salad.jpg",
    "price": 10.67,
    "desc": "Arranged lettuce, kale and spinach on a large serving plate. Top with chopped pears, raisins, tomatoes, onions, sweet peppers, feta, avocado, and toasted almonds. Tossed in Garlic Mustard Vinaigrette."
}, {
    "category": "Entrees",
    "name": "Artisan Pizza with Peppers and Sausage",
    "image": "Images/Entrees/Artisan_Pizza_with_Peppers_and_Sausage.jpg",
    "price": 9.11,
    "desc": "Artisan Pizza with sweet caramelized onions, and a spicy tomato sauce. Layered in cheese evenly over the tomatoes, seasoned with salt and pepper. Scatter roasted bell peppers and sausage with a sprinkle of oregano. "
}, {
    "category": "Entrees",
    "name": "Fried Chicken Sandwich with Red Cabbage",
    "image": "Images/Entrees/Fried_Chicken_Sandwich_with_Red_Cabbage.jpg",
    "price": 11.36,
    "desc": "Tender grilled chicken and gourmet cheese mix, fresh onions, ripe tomatoes and buffalo sauce. Topped with a red cabbage slaw and garlic. Served with Kettle Cooked Chips."
}, {
    "category": "Entrees",
    "name": "Pesto Pasta with Tomatoes",
    "image": "Images/Entrees/Pesto_Pasta_with_Tomatoes.jpg",
    "price": 12.87,
    "desc": "Roasted tomato basil pesto pasta is a simple yet satisfying meal! Sweet cherry tomatoes, walnuts, parmesan cheese and anchovies create an irresistible sauce."
}, {
    "category": "Entrees",
    "name": "Pulled Pork Sandwich",
    "image": "Images/Entrees/Pulled_Pork_Sandwich.jpg",
    "price": 9.93,
    "desc": "This moist pulled pork, slow cooked with Progresso™ chicken broth, cider vinegar and barbecue sauce, is topped with a crunchy slaw on a Sesame Seed Bun."
}, {
    "category": "Entrees",
    "name": "Salmon and Vegetables",
    "image": "Images/Entrees/Salmon_and_Vegetables.jpg",
    "price": 9.16,
    "desc": "One-pan roasted salmon, rubbed with Moroccan harissa spice, roasted with green beans, bell peppers, and cherry tomatoes. Easy and elegant!"
}, {
    "category": "Entrees",
    "name": "Steak and Broccoli",
    "image": "Images/Entrees/Steak_and_Broccoli.jpg",
    "price": 13.94,
    "desc": "Large skillet steak in classic ginger soy sauce with stir-fried broccoli and onion. Served with white rice."
}, {
    "category": "Entrees",
    "name": "Sauteed Fish Broil",
    "image": "Images/Entrees/Fish_Sautee.jpg",
    "price": 15.00,
    "desc": "Pan fried white fish (Market Selection) broiled in a wine and cream sauce with steamed greens."
}, {
    "category": "Entrees",
    "name": "Pork Chops",
    "image": "Images/Entrees/Pork_Chops.jpg",
    "price": 12.50,
    "desc": "10 oz. cut of Pork Chop slow roasted and then seared. Served with a garlic sauce and red potatoes over fresh green vegetables."    
}, {
    "category": "Appetizers",
    "name": "Caprese",
    "image": "Images/Appetizers/Caprese.jpg",
    "price": 5.72,
    "desc": "Layer alternating slices of tomatoes and mozzarella, adding a basil leaf between each, on a large, shallow platter. Drizzle the salad with extra-virgin olive oil and season with salt and pepper, to taste"
}, {
    "category": "Appetizers",
    "name": "Loaded Fries",
    "image": "Images/Appetizers/Loaded_Fries.jpg",
    "price": 7.35,
    "desc": "Loaded Fries with Bacon, Cheddar, and Ranch."
}, {
    "category": "Appetizers",
    "name": "Loaded Nachos",
    "image": "Images/Appetizers/Loaded_Nachos.jpg",
    "price": 7.64,
    "desc": "Loaded Nachos with cheese sauce, Chipotle beer shredded beef, pico de gallo and fresh guacamole!"
}, {
    "category": "Appetizers",
    "name": "Squash Soup",
    "image": "Images/Appetizers/Squash_Soup.jpg",
    "price": 7.32,
    "desc": "This is a thick, rich soup with tons of flavor. Paired with onion, celery, carrot, and potatoes."
}, {
    "category": "Appetizers",
    "name": "Steamed Dumplings",
    "image": "Images/Appetizers/Steamed_Dumplings.jpg",
    "price": 5.46,
    "desc": "Shrimp and chicken, ginger soy dressing."
}, {
    "category": "Appetizers",
    "name": "Street Tacos",
    "image": "Images/Appetizers/Street_Tacos.jpg",
    "price": 5.39,
    "desc": "Marinated chicken thighs are grilled to perfection and served with warmed corn tortillas, pico de gallo, and cilantro."
}, {
    "category": "Desserts",
    "name": "Cake Parfait",
    "image": "Images/Desserts/Cake_Parfait.jpg",
    "price": 7.81,
    "desc": "The sweet, moist cake and the luscious cream cheese frosting but bonus, there's also a layer of apricot jam. Topped with nuts and berries."
}, {
    "category": "Desserts",
    "name": "Chocolate Cake",
    "image": "Images/Desserts/Chocolate_Cake.jpg",
    "price": 5.30,
    "desc": "Chocolate Cake and Strawberries."
}, {
    "category": "Desserts",
    "name": "Cranberry Muffins",
    "image": "Images/Desserts/Cranberry_Muffins.jpg",
    "price": 6.66,
    "desc": "Buttery and moist, these cranberry orange muffins are heavy on the flavor and bursting with cranberries in each bite."
}, {
    "category": "Desserts",
    "name": "Macaroons",
    "image": "Images/Desserts/Macaroons.jpg",
    "price": 6.83,
    "desc": "Moist and dense coconut macaroon dipped in chocolate. "
}, {
    "category": "Desserts",
    "name": "Pecan Pudding",
    "image": "Images/Desserts/Pecan_Pudding.jpg",
    "price": 5.96,
    "desc": " This butterscotch pudding with a pecan-graham crumb crust, a caramel drizzle, and splash of whipped cream."
}, {
    "category": "Desserts",
    "name": "Raspberry and Chocolate Tart",
    "image": "Images/Desserts/Raspberry_and_Chocolate_Tart.jpg",
    "price": 6.98,
    "desc": "A smooth, rich chocolate ganache poured into a chocolate cookie crust and then toppped with lots of fresh red raspberries makes for a deceptively easy and decadent dessert"
}, {
    "category": "Drinks",
    "name": "Blue Ice and Lime Cocktail",
    "image": "Images/Drinks/Blue_Ice_and_Lime_Cocktail.jpg",
    "price": 2.48,
    "desc": "This tequila cocktail combines triple sec, Blue Curaçao, and fresh lime juice for a taste of that high-quality product. Plus, you get those blue ice pieces and blue sugar garnish that really help this drink to look like a magical cup."
}, {
    "category": "Drinks",
    "name": "Bottled Coke",
    "image": "Images/Drinks/Bottled_Coke.jpg",
    "price": 4.50,
    "desc": "*Coke Products"
}, {
    "category": "Drinks",
    "name": "Earl Grey Tea",
    "image": "Images/Drinks/Earl_Grey_Tea.jpg",
    "price": 3.34,
    "desc": "Earl Grey tea is a tea blend which has been flavoured with the addition of oil of bergamot. Bergamot is a variety of orange that is often grown in Italy and France."
}, {
    "category": "Drinks",
    "name": "Latte",
    "image": "Images/Drinks/Latte.jpg",
    "price": 4.64,
    "desc": "A coffee drink made with espresso and steamed milk. "
}, {
    "category": "Drinks",
    "name": "Mixed Berry Daiquiri",
    "image": "Images/Drinks/Mixed_Berry_Daiquiri.jpg",
    "price": 2.74,
    "desc": "Fresh berries, ice and rum."
}, {
    "category": "Drinks",
    "name": "Strawberry and Watermelon Slush",
    "image": "Images/Drinks/Strawberry_and_Watermelon_Slush.jpg",
    "price": 2.92,
    "desc": "Strawberry Watermelon Fruit Slush. Can be frozen or serve as a drink!"
}
];


const orderSeed = [
{
  "forWho": 14,
  "date": new Date(Date.now()),
  "items": [{
    "category": "Entrees",
    "name": "Artisan Pizza with Peppers and Sausage",
    "image": "Artisan_Pizza_with_Peppers_and_Sausage.jpg",
    "price": 10.93
  }, {
    "category": "Entrees",
    "name": "Fried Chicken Sandwich with Red Cabbage",
    "image": "Fried_Chicken_Sandwich_with_Red_Cabbage.jpg",
    "price": 14.39
  }, {
    "category": "Entrees",
    "name": "Pesto Pasta with Tomatoes",
    "image": "Pesto_Pasta_with_Tomatoes.jpg",
    "price": 13.46
  },{
    "category": "Drinks",
    "name": "Latte",
    "image": "Latte.jpg",
    "price": 3.80
  }, {
    "category": "Drinks",
    "name": "Latte",
    "image": "Latte.jpg",
    "price": 3.80
  }, {
    "category": "Drinks",
    "name": "Latte",
    "image": "Latte.jpg",
    "price": 3.80
  }]
},
{
  "forWho": 14,
  "date": new Date(Date.now()),
  "items": [{
    "category": "Appetizers",
    "name": "Squash Soup",
    "image": "Squash_Soup.jpg",
    "price": 6.42
  }, {
    "category": "Appetizers",
    "name": "Steamed Dumplings",
    "image": "Steamed_Dumplings.jpg",
    "price": 6.20
  }]
},
{
  "forWho": 14,
  "date": new Date(Date.now()),
  "items": [ {
    "category": "Kids",
    "name": "Spaghetti with Red Sauce",
    "image": "Spaghetti_with_Red_Sauce.jpg",
    "price": 9.28
  }, {
    "category": "Specials",
    "name": "Alaskan King Crab Legs",
    "image": "Alaskan_King_Crab_Legs.jpg",
    "price": 9.18
  }, {
    "category": "Specials",
    "name": "Artisan Burger",
    "image": "Artisan_Burger.jpg",
    "price": 11.77
  }]
},
{
  "forWho": 12,
  "date": new Date(Date.now()),
  "items": [{
    "category": "Drinks",
    "name": "Earl Grey Tea",
    "image": "Earl_Grey_Tea.jpg",
    "price": 3.80
  }, {
    "category": "Drinks",
    "name": "Latte",
    "image": "Latte.jpg",
    "price": 3.80
  },{
    "category": "Entrees",
    "name": "Salmon and Vegetables",
    "image": "Salmon_and_Vegetables.jpg",
    "price": 9.82
  }, {
    "category": "Entrees",
    "name": "Steak and Broccoli",
    "image": "Steak_and_Broccoli.jpg",
    "price": 14.70
  }]
},
{
  "forWho": 12,
  "date": new Date(Date.now()),
  "items": [{
    "category": "Drinks",
    "name": "Blue Ice and Lime Cocktail",
    "image": "Blue_Ice_and_Lime_Cocktail.jpg",
    "price": 3.27
  }]
},
{
  "forWho": 13,
  "date": new Date(Date.now()),
  "items": [{
    "category": "Appetizers",
    "name": "Street Tacos",
    "image": "Street_Tacos.jpg",
    "price": 6.44
  }, {
    "category": "Desserts",
    "name": "Cake Parfait",
    "image": "Cake_Parfait.jpg",
    "price": 7.58
  }, {
    "category": "Entrees",
    "name": "Fried Chicken Sandwich with Red Cabbage",
    "image": "Fried_Chicken_Sandwich_with_Red_Cabbage.jpg",
    "price": 14.39
  }, {
    "category": "Entrees",
    "name": "Pesto Pasta with Tomatoes",
    "image": "Pesto_Pasta_with_Tomatoes.jpg",
    "price": 13.46
  }]
}
];


db.Item
.remove({})
.then(() => db.Item.collection.insertMany(itemSeed))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  console.log(data);
  // process.exit(0);
})
.catch(err => {
  console.error(err);
  // process.exit(1);
});

db.Order
.remove({})
.then(() => db.Order.collection.insertMany(orderSeed))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  console.log(data);
  // process.exit(0);
})
.catch(err => {
  console.error(err);
  // process.exit(1);
});
