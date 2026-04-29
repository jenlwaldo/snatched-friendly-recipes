// Add a new recipe by appending a new object to this array.
// Required fields: slug, title, serves, nutrition, sections, instructions
// Optional fields: notes, tags, description

const recipes = [
  {
    slug: "lemon-bars",
    title: "Snatched-Friendly Lemon Bars",
    category: "Baking",
    serves: 12,
    nutrition: { calories: 117, protein: 11, fat: 7, carbs: 6 },
    sections: [
      {
        name: "For the crust",
        ingredients: [
          "1/2 cup vanilla protein powder (I used Designer Wellness French Vanilla. The protein powder you use makes a major difference in flavor!)",
          "1/2 cup almond flour",
          "1/2 tsp. baking soda",
          "1/2 tsp. salt",
          "3 tbsp. unsalted butter (room temp)",
          "1-2 tbsp. water as needed"
        ]
      },
      {
        name: "For the filling",
        ingredients: [
          "1/2 cup vanilla protein powder",
          "1 cup monk fruit sweetener (I used Lakanto. Not sure this matters. You could probably use anything that can be substituted 1:1 for sugar.)",
          "1 5.3 oz container nonfat plain Greek yogurt (I used Chobani. Don't think it matters which brand.)",
          "3 eggs",
          "1/3-1/2 cup lemon juice (whatever you get out of your lemons)",
          "1-2 tbsp. lemon zest (depending on how lemony you want it)",
          "1/2 tsp. vanilla extract"
        ]
      }
    ],
    instructions: [
      "Preheat oven to 325°F.",
      "Combine ingredients for crust until it is crumbly, but stays together when pressed. Use up to 2 tbsp. of water to get it to the right consistency. (I used my hands for this. Much easier to tell when it is right.)",
      "Line a 12-serving muffin tin with liners (or you could grease the tin) if you want individual servings, or you could line an 8\"x8\" baking dish with parchment or grease the dish.",
      "Press the crust mixture into the bottom.",
      "Bake crust for 5 minutes.",
      "In a blender, combine yogurt, eggs, sweetener, protein powder, lemon juice, lemon zest, and vanilla extract. (You could probably do this in a bowl, but a blender is super quick.)",
      "Pour filling mixture over pre-baked crust and return to oven. For individual cups, bake for 20-ish minutes, for an 8x8 pan, bake for 30-ish minutes. It should be just set in the middle.",
      "Remove from oven and let cool.",
      "Chill in fridge for at least an hour, then, if desired, sprinkle with powdered sugar or sweetener."
    ]
  },
  {
    slug: "brownies",
    title: "Snatched-Friendly Brownies",
    category: "Baking",
    serves: 12,
    nutrition: { calories: 93, protein: 5, fat: 2, carbs: 15 },
    sections: [
      {
        name: "Ingredients",
        ingredients: [
          "1 cup cooked black beans (drained and rinsed)",
          "1/3 cup maple syrup",
          "1/4 cup cocoa powder",
          "3/4 tablespoon freeze-dried coffee",
          "2 teaspoons vanilla extract",
          "1/2 teaspoon baking powder",
          "Pinch of salt",
          "1/2 cup chocolate protein powder",
          "1/3 cup chocolate chips (optional)",
          "Milk of choice (as needed)"
        ]
      }
    ],
    instructions: [
      "Preheat your oven to 350°F (175°C) and line a muffin tin with cupcake liners (you could do this in a 9x9 pan, but it is kind of hard to get it out).",
      "In a blender, blend the black beans, maple syrup, cocoa powder, vanilla extract, coffee, baking powder, and salt until very smooth. This takes a while.",
      "Add the protein powder to the mixture and blend until well combined. The mixture is going to be thick. You can add a teaspoon of milk at a time to try to get the mixture moving in the blender, but do not let it become liquid-y.",
      "Spoon the batter into the cupcake liners. (This should make 12.)",
      "Top with chocolate chips.",
      "Bake in the preheated oven for 20-25 minutes, or until a toothpick inserted into the center comes out kind of clean. It won't be perfectly clean.",
      "Remove from the oven and let cool COMPLETELY before eating. Seriously, they will fall apart if they are not cooled."
    ],
    notes: "If I made this again, I would try adding peanut butter or PB2 and folding in chopped dark chocolate (60%ish) instead of using chocolate chips on top. I would also see if Designer Wellness makes a chocolate protein powder, because theirs is definitely the best vanilla version for baking."
  },
  {
    slug: "blondies",
    title: "Snatched-Friendly Blondies",
    category: "Baking",
    serves: 16,
    nutrition: { calories: 75, protein: 4, fat: 5, carbs: 4 },
    sections: [
      {
        name: "Ingredients",
        ingredients: [
          "1/4 cup vanilla protein powder (I used Designer Wellness French Vanilla.)",
          "1/2 cup almond flour",
          "1/4 cup monk fruit sweetener",
          "1/2 tsp baking powder",
          "1/2 tsp vanilla extract",
          "2 tbsp butter, melted",
          "1/4 cup light cream cheese, softened",
          "1/4 cup almond milk",
          "2 eggs",
          "1/4 cup mini chocolate chips (optional)"
        ]
      }
    ],
    instructions: [
      "Preheat oven to 350°F and grease a 9x9-inch baking pan or line with parchment paper.",
      "In a bowl, whisk together vanilla protein powder, almond flour, monk fruit sweetener, and baking powder.",
      "In a separate bowl, mix melted butter, softened cream cheese, almond milk, eggs, and vanilla extract until smooth.",
      "Fold the wet ingredients into the dry until fully combined.",
      "Stir in mini chocolate chips if using.",
      "Spread the batter evenly into the prepared pan.",
      "Bake for 20-25 minutes, or until a toothpick comes out mostly clean.",
      "Let cool completely before slicing into 16 bars."
    ]
  }
];
