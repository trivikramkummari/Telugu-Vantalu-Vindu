// Menu Items List
const menuItems = [
    {
        name: "Pulihora",
        tagline: "Tangy delight in every bite!",
        description: "Pulihora is a popular rice dish made with cooked rice mixed with a flavorful paste made from tamarind pulp, spices, and tempered with mustard seeds, curry leaves, peanuts, and red chilies. It's tangy, spicy, and aromatic, making it a favorite for festivals and special occasions.",
        price: "₹100"
    },
    {
        name: "Hyderabad Biryani",
        tagline: "A regal blend of flavors from the City of Pearls!",
        description: "Hyderabad Biryani is a fragrant rice dish cooked with marinated meat (usually chicken or mutton), basmati rice, caramelized onions, saffron, and a blend of aromatic spices. It's traditionally cooked in layers, sealing the pot with dough to trap the steam, resulting in tender, flavorful meat and perfectly cooked rice.",
        price: "₹180"
    },
    {
        name: "Gongura Pachadi",
        tagline: "Tangy greens, a taste of home!",
        description: "Gongura Pachadi is a tangy and spicy chutney made from gongura leaves (sorrel leaves), red chilies, garlic, and other spices. The leaves are sautéed and ground to a coarse paste, giving it a unique texture and flavor. It's often served with steamed rice or roti and adds a refreshing zing to the meal.",
        price: "₹120"
    },
    {
        name: "Ariselu",
        tagline: "Sweet memories, sweet bites!",
        description: "Ariselu are traditional sweets made with rice flour, jaggery (or sugar), sesame seeds, and sometimes flavored with cardamom. The dough is flattened into thin discs and deep-fried until golden brown, resulting in a crispy exterior and a sweet, chewy interior. It's a staple during festivals like Sankranti and weddings.",
        price: "₹200"
    },
    {
        name: "Pesarattu",
        tagline: "A green twist to your breakfast!",
        description: "Pesarattu is a savory pancake made from green gram (moong dal) batter blended with green chilies, ginger, and cumin seeds. It's typically served with ginger chutney or allam pachadi (ginger pickle) and is a nutritious and delicious breakfast option, especially in Telangana.",
        price: "₹80"
    },
    {
        name: "Mirchi Bajji",
        tagline: "Spicy indulgence, bite after bite!",
        description: "Mirchi Bajji is a popular street food snack made by stuffing large green chilies with a spiced mashed potato mixture, dipping them in chickpea flour batter, and deep-frying until crispy and golden. It's often served with tamarind chutney or mint chutney and is a favorite during rainy days or as an evening snack.",
        price: "₹150"
    },
    {
        name: "Pesarapappu Payasam",
        tagline: "A creamy delight straight from grandma's kitchen!",
        description: "Pesarapappu Payasam is a creamy and indulgent dessert made from moong dal (split green gram), jaggery (or sugar), coconut milk, cardamom, and ghee. The dal is cooked until soft, then simmered with jaggery and coconut milk until it reaches a thick consistency. It's garnished with roasted nuts and raisins, making it a comforting and delicious sweet treat.",
        price: "₹150"
    },
    {
        name: "Royyala Iguru",
        tagline: "Savor the flavors of the sea in every bite!",
        description: "Royyala Iguru is a spicy and tangy prawn curry cooked with onions, tomatoes, tamarind, and a blend of aromatic spices. The prawns are marinated in a mixture of spices and then simmered in the flavorful gravy until they're tender and infused with all the delicious flavors. It's typically served with steamed rice or roti and is a favorite among seafood lovers.",
        price: "₹220"
    },
    {
        name: "Kodi Vepudu",
        tagline: "Crispy, spicy, and utterly irresistible!",
        description: "Kodi Vepudu is a classic Andhra-style chicken fry made by marinating chicken pieces with a blend of spices, ginger-garlic paste, and lemon juice, and then shallow-frying until crispy and golden brown. The addition of curry leaves, green chilies, and red chili powder gives it a fiery flavor that pairs perfectly with steamed rice or roti.",
        price: "₹190"
    },
    {
        name: "Garijalu",
        tagline: "A sweet surprise in every bite!",
        description: "Garijalu are traditional sweet empanadas filled with a mixture of jaggery, grated coconut, cardamom, and nuts. The dough is made from a mixture of all-purpose flour, semolina, and ghee, rolled out into circles, filled with the sweet mixture, sealed, and then deep-fried until crispy and golden. They're often enjoyed as a festive treat during special occasions and celebrations.",
        price: "₹120"
    },
    {
        name: "Kakarakaya Pulusu",
        tagline: "A tangy twist to bitter goodness!",
        description: "Kakarakaya Pulusu is a sour and spicy stew made with bitter gourd, tamarind extract, onions, tomatoes, and a blend of spices. The bitterness of the gourd is balanced by the tanginess of the tamarind and the warmth of the spices, creating a flavorful dish that is often served with steamed rice or roti.",
        price: "₹130"
    },
    {
        name: "Sakinalu",
        tagline: "Crunch your way to happiness!",
        description: "Sakinalu are crunchy rice crackers made from a batter of rice flour, sesame seeds, cumin seeds, ajwain, and salt. The batter is shaped into intricate circular patterns using a special mold and then deep-fried until crispy and golden brown. Sakinalu are a popular snack during festivals like Sankranti and are often enjoyed with spicy chutneys or pickles.",
        price: "₹100"
    },
    {
        name: "Ulavacharu",
        tagline: "A hearty stew to warm your soul!",
        description: "Ulavacharu is a nutritious stew made from horsegram (ulavalu), onions, tomatoes, garlic, and a blend of spices. The horsegram is soaked overnight and then cooked until soft, resulting in a thick and hearty stew that is packed with protein and flavor. Ulavacharu is typically served with steamed rice or ragi sankati (millet balls) for a wholesome meal.",
        price: "₹140"
    },
    {
        name: "Kobbari Annam",
        tagline: "A taste of the tropics in every bite!",
        description: "Kobbari Annam is a simple and flavorful rice dish made with cooked rice, freshly grated coconut, mustard seeds, curry leaves, green chilies, and a pinch of turmeric. The coconut adds a rich and aromatic flavor to the rice, making it a delicious accompaniment to a variety of curries and side dishes.",
        price: "₹110"
    },
    {
        name: "Bobbatlu",
        tagline: "Sweet indulgence, wrapped in love!",
        description: "Bobbatlu, also known as Puran Poli, is a sweet flatbread made from a dough of all-purpose flour, ghee, and water, filled with a sweet mixture of cooked lentils (usually chana dal), jaggery, cardamom, and grated coconut. The filled dough is rolled out into thin circles, cooked on a griddle with ghee until golden brown, and served warm. Bobbatlu are often enjoyed during festivals and special occasions as a delightful dessert.",
        price: "₹160"
    },
    {
        name: "Chepala Pulusu",
        tagline: "A taste of the coast in every spoonful!",
        description: "Chepala Pulusu is a tangy and spicy fish curry made with a variety of local fish, tamarind extract, onions, tomatoes, garlic, and a blend of aromatic spices. The fish is simmered in the flavorful gravy until it absorbs all the delicious flavors, resulting in a dish that pairs perfectly with steamed rice or dosa.",
        price: "₹200"
    },
    {
        name: "Mamidikaya Pulihora",
        tagline: "A burst of tangy goodness with every bite!",
        description: "Mamidikaya Pulihora is a tangy rice dish made with cooked rice mixed with a spicy paste made from grated raw mango, tamarind, green chilies, and tempering of mustard seeds, curry leaves, and peanuts. The raw mango lends a refreshing tartness to the rice, making it a popular choice during the summer months.",
        price: "₹140"
    },
    {
        name: "Jonna Rotte",
        tagline: "A rustic delight straight from the countryside!",
        description: "Jonna Rotte is a traditional flatbread made from jowar (sorghum) flour, water, and salt. The dough is flattened into thin circles and cooked on a hot griddle until golden brown and cooked through. Jonna Rotte is often enjoyed with spicy chutneys, curries, or a dollop of ghee, and is a staple food in many rural households.",
        price: "₹90"
    },
    {
        name: "Kakarakaya Vepudu",
        tagline: "Bitterness meets bliss in every bite!",
        description: "Kakarakaya Vepudu is a simple yet flavorful stir-fry made with thinly sliced bitter gourd, onions, green chilies, and a sprinkle of spices. The bitterness of the gourd is balanced by the sweetness of the onions and the heat of the chilies, resulting in a delicious and nutritious side dish that pairs well with rice or roti.",
        price: "₹110"
    },
    {
        name: "Perugu Pachadi",
        tagline: "Cool and creamy, a perfect palate cleanser!",
        description: "Perugu Pachadi is a traditional yogurt-based chutney made with whisked yogurt, grated cucumber, tempered mustard seeds, curry leaves, green chilies, and a pinch of salt. It's a refreshing accompaniment to spicy main dishes and acts as a palate cleanser between bites.",
        price: "₹80"
    }
];

// Item name, tagline, description, price
function populateMenu() {
    const menuContainer = document.getElementById('menu');
    menuItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <h2>${item.name}</h2>
            <p class="tagline">${item.tagline}</p>
            <p>${item.description}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <button onclick="orderItem(${index})">Order Now</button>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// Order Item Message
function orderItem(index) {
    const itemName = menuItems[index].name;
    alert(`Successfully ordered ${itemName}!`);
}

window.onload = populateMenu;