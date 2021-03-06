const pizzas = [{

    "name": "PEPPER BARBECUE CHICKEN",
    "varients": [
        "small",
        "medium",
        "large"
    ],
    "prices": [
        {
            "small": 200,
            "medium": 350,
            "large": 400
        }
    ],
    "category": "nonveg",
    "image": "https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg",
    "description": "Pepper Barbecue Chicken I Cheese"
}, {

    "name": "Non Veg Supreme",
    "varients": [
        "small",
        "medium",
        "large"
    ],
    "prices": [
        {
            "small": 200,
            "medium": 350,
            "large": 400
        }
    ],
    "category": "nonveg",
    "image": "https://www.dominos.co.in/files/items/Non-Veg_Supreme.jpg",
    "description": "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers"
}, {

    "name": "Golden Corn Pizza",
    "varients": [
        "small",
        "medium",
        "large"
    ],
    "prices": [
        {
            "small": 180,
            "medium": 250,
            "large": 360
        }
    ],
    "category": "veg",
    "description": "Corn over the base makes it look beautiful. It is served with tomato sauce and chili flakes are sprinkled over the topping according the taste. After mixing all the ingredients, it is baked by adding cheese and corn for added flavor to pizza. Corn adds health and sweet taste to the pizza.",
    "image": "https://www.dominos.co.in//files/items/Corn_&_Cheese.jpg"
}, {

    "name": "Jalapeno & Red Paprika Pizza",
    "varients": [
        "small",
        "medium",
        "large"
    ],
    "prices": [
        {
            "small": 200,
            "medium": 300,
            "large": 420
        }
    ],
    "category": "veg",
    "image": "data:image/jpeg;base64,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",
    "description": "This pizza is amazing and can become more delicious if we will add some more cheese in it. Ingredients are yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding Jalapeno and Paprika with corns over the cheese layer. The base is made crunchy to give it best taste. It can be made more tasty by sprinkling chili flakes and Oregano as per the taste."
}, {

    "name": "Margerita",
    "varients": [
        "small",
        "medium",
        "large"
    ],
    "prices": [
        {
            "small": 150,
            "medium": 220,
            "large": 300
        }
    ],
    "category": "veg",
    "image": "https://cdn.loveandlemons.com/wp-content/uploads/2019/09/margherita-pizza-500x500.jpg",
    "description": "The pizza base is made by mixing yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding single layer of cheese over it. It is mouth-watering pizza for cheese lovers."
}, {

    "name": "Double Cheese Margherita Pizza",
    "varients": [
        "small",
        "medium",
        "large"
    ],
    "prices": [
        {
            "small": 250,
            "medium": 380,
        "large": 500
        }
    ],
    "category": "veg",
    "image": "https://www.dominos.co.in//files/items/Double_Cheese_Margherita.jpg",
    "description": "This is a plain pizza which have cheese on it which is margherita and is delicious because of the loads of cheese. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding double layer of cheese over it"
}]
export default pizzas;