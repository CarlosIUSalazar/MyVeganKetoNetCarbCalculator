const data = [
    {
        value: 1,
        name: "Almond Flour 🥔",
        calories: 574.6,
        totalCarbs: 19.6,
        netCarbs: 8.5,
        fat: 50.4,
        sugar: 4.4,
        protein: 20.9
    },
    {
        value: 2,
        name: "Almonds Yogurt 🥔",
        calories: 90,
        totalCarbs: 8.6,
        netCarbs: 4.7,
        fat: 6,
        sugar: 4.7,
        protein: 2.4
    },
    {
        value: 3,
        name: "Almonds 🥔",
        calories: 579,
        totalCarbs: 21.6,
        netCarbs: 9.1,
        fat: 50,
        sugar: 4.2,
        protein: 21.1
    },
    {
        value: 4,
        name: "Avocado 🥑",
        calories: 156,
        totalCarbs: 8,
        netCarbs: 1.3,
        fat: 14,
        sugar: 0.7,
        protein: 2
    },
    {
        value: 5,
        name: "Blueberries 🔵",
        calories: 57,
        totalCarbs: 14.5,
        netCarbs: 12,
        fat: 0.3,
        sugar: 10,
        protein: 0.7
    },
    {
        value: 6,
        name: "Brazil Nuts 🥔",
        calories: 656,
        totalCarbs: 12.28,
        netCarbs: 4.8,
        fat: 66,
        sugar: 2.34,
        protein: 14.4
    },
    {
        value: 7,
        name: "Broccoli 🥦",
        calories: 35.2,
        totalCarbs: 7.2,
        netCarbs: 3.9,
        fat: 0.4,
        sugar: 1.4,
        protein: 2.4
    },
    {
        value: 8,
        name: "Cabbage 🥬",
        calories: 23.1,
        totalCarbs: 5.5,
        netCarbs: 3.6,
        fat: 0.1,
        sugar: 2.8,
        protein: 1.3
    },
    {
        value: 9,
        name: "Cantaloupe 🍈",
        calories: 34,
        totalCarbs: 8.2,
        netCarbs: 6.9,
        fat: 0.2,
        sugar: 7.9,
        protein: 0.8
    },
    {
        value: 10,
        name: "Cauliflower ⚪️",
        calories: 23.1,
        totalCarbs: 4.1,
        netCarbs: 1.8,
        fat: 0.5,
        sugar: 2.1,
        protein: 1.8
    },
    {
        value: 11,
        name: "Cauliflower Rice 🍚",
        calories: 23,
        totalCarbs: 4.1,
        netCarbs: 1.8,
        fat: 0.5,
        sugar: 2.1,
        protein: 1.8
    },
    {
        value: 12,
        name: "Cheese (Vegan) 🧀",
        calories: 311,
        totalCarbs: 27,
        netCarbs: 27,
        fat: 22.3,
        sugar: 0,
        protein: 0.6
    },
    {
        value: 13,
        name: "Chia Seeds 🔘",
        calories: 490,
        totalCarbs: 6.2,
        netCarbs: 6.2,
        fat: 30.8,
        sugar: 0,
        protein: 15.6
    },
    {
        value: 14,
        name: "Coconut flour 🥥",
        calories: 430.1,
        totalCarbs: 57.2,
        netCarbs: 21.4,
        fat: 14.3,
        sugar: 7.2,
        protein: 14.3
    },
    {
        value: 15,
        name: "Coconut milk 🥛",
        calories: 195.9,
        totalCarbs: 5.4,
        netCarbs: 4.5,
        fat: 20.2,
        sugar: 4.3,
        protein: 1.6
    },
    {
        value: 16,
        name: "Coconut water 🥥",
        calories: 19,
        totalCarbs: 3.7,
        netCarbs: 2.6,
        fat: 0.2,
        sugar: 2.6,
        protein: 0.7
    },
    {
        value: 17,
        name: "Cucumber 🥒",
        calories: 15,
        totalCarbs: 3.6,
        netCarbs: 2.4,
        fat: 0.1,
        sugar: 1.7,
        protein: 0.7
    },
    {
        value: 18,
        name: "Flax seeds 🤎",
        calories: 535.3,
        totalCarbs: 29,
        netCarbs: 1.6,
        fat: 42.3,
        sugar: 1.6,
        protein: 18.3
    },
    {
        value: 19,
        name: "Hemp seeds 🔘",
        calories: 554.4,
        totalCarbs: 8.7,
        netCarbs: 4.7,
        fat: 48.9,
        sugar: 1.5,
        protein: 31.6
    },
    {
        value: 20,
        name: "Honey Dew 🍈",
        calories: 36,
        totalCarbs: 9.1,
        netCarbs: 8.3,
        fat: 0.1,
        sugar: 8.1,
        protein: 0.8
    },
    {
        value: 21,
        name: "Lemon Juice 🍋",
        calories: 22,
        totalCarbs: 6.9,
        netCarbs: 6.6,
        fat: 0.2,
        sugar: 2.5,
        protein: 0.3
    },
    {
        value: 22,
        name: "Macadamias 🥜",
        calories: 719.6,
        totalCarbs: 12.9,
        netCarbs: 4.9,
        fat: 76.5,
        sugar: 4.2,
        protein: 7.8
    },
    {
        value: 23,
        name: "Nutritional Yeast 🔶",
        calories: 400,
        totalCarbs: 40,
        netCarbs: 20,
        fat: 0,
        sugar: 0,
        protein: 40
    },
    {
        value: 24,
        name: "Psyllium Husk 🟤",
        calories: 200.5,
        totalCarbs: 77.5,
        netCarbs: 0,
        fat: 0.5,
        sugar: 0,
        protein: 4.6
    },
    {
        value: 25,
        name: "Raspberries 🔴",
        calories: 52,
        totalCarbs: 11.9,
        netCarbs: 5.4,
        fat: 0.7,
        sugar: 4.4,
        protein: 1.2
    },
    {
        value: 26,
        name: "Red Cabbage 🟣",
        calories: 31,
        totalCarbs: 7.4,
        netCarbs: 5.3,
        fat: 0.2,
        sugar: 3.8,
        protein: 1.4
    },
    {
        value: 27,
        name: "Seaweed 🍃",
        calories: 503,
        totalCarbs: 25.2,
        netCarbs: 25.2,
        fat: 37.5,
        sugar: 0,
        protein: 25
    },
    {
        value: 28,
        name: "Seitan 🥖",
        calories: 14.6,
        totalCarbs: 4.7,
        netCarbs: 3.5,
        fat: 2.4,
        sugar: 2.4,
        protein: 24.8
    },
    {
        value: 29,
        name: "Sesame seed 🔘",
        calories: 548.4,
        totalCarbs: 26.1,
        netCarbs: 9.2,
        fat: 48.1,
        sugar: 6.3,
        protein: 17
    },
    {
        value: 30,
        name: "Soy Milk 🥛",
        calories: 54,
        totalCarbs: 6.3,
        netCarbs: 5.6,
        fat: 1.8,
        sugar: 4,
        protein: 3.3
    },
    {
        value: 31,
        name: "Soy Yogurt 🥣",
        calories: 47.1,
        totalCarbs: 3.5,
        netCarbs: 2.4,
        fat: 2.1,
        sugar: 1,
        protein: 3.5
    },
    {
        value: 32,
        name: "Strawberries 🍓",
        calories: 32,
        totalCarbs: 7.7,
        netCarbs: 5.5,
        fat: 0.3,
        sugar: 4.9,
        protein: 0.7
    },
    {
        value: 33,
        name: "Sunwarrior Protein Blend 🥛",
        calories: 400,
        totalCarbs: 4,
        netCarbs: 0,
        fat: 8,
        sugar: 0,
        protein: 76
    },
    {
        value: 34,
        name: "Tempeh 🥖",
        calories: 192,
        totalCarbs: 7.6,
        netCarbs: 3.8,
        fat: 10.8,
        sugar: 2.7,
        protein: 20.3
    },
    {
        value: 35,
        name: "Tofu 🍮",
        calories: 76,
        totalCarbs: 1.9,
        netCarbs: 1.6,
        fat: 4.8,
        sugar: 0,
        protein: 8
    },
    {
        value: 36,
        name: "Tomato 🍅",
        calories: 18,
        totalCarbs: 3.9,
        netCarbs: 2.7,
        fat: 2,
        sugar: 2.6,
        protein: 0.9
    },
    {
        value: 37,
        name: "Vegan Mayonaise 🍼",
        calories: 251.9,
        totalCarbs: 6.1,
        netCarbs: 3.8,
        fat: 23.3,
        sugar: 3.9,
        protein: 6.6
    },
    {
        value: 38,
        name: "Walnuts 🥜",
        calories: 655.6,
        totalCarbs: 13.7,
        netCarbs: 6.8,
        fat: 65.4,
        sugar: 2.6,
        protein: 15.3
    },
    {
        value: 39,
        name: "Watermelon 🍉",
        calories: 30,
        totalCarbs: 7.5,
        netCarbs: 7.1,
        fat: 0.1,
        sugar: 6.2,
        protein: 0.6
    },
    {
        value: 40,
        name: "Wheat gluten 🥖",
        calories: 370.9,
        totalCarbs: 13.8,
        netCarbs: 13.2,
        fat: 1.9,
        sugar: 0,
        protein: 75.3
    }
]

export default data;
