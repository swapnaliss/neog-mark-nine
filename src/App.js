import React from "react";
import "./styles.css";
import ReactStars from "react-rating-stars-component";

export default function App() {
  const [category, setCategory] = React.useState("Indian");
  const Food = {
    Indian: [
      {
        name: "Misal Pav",
        description:
          "Misal pav is a popular Maharashtrian street food of usal (sprouts curry) topped with onions, tomatoes, farsan (fried savory mixture), lemon juice, coriander leaves and served with a side of soft pav (Indian dinner rolls). The sprouts curry is made from moth bean sprouts. This misal recipe is a tasty and filling vegan dish that can be served as breakfast, lunch or brunch.",
        rating: 3
      },
      {
        name: "Vada Pav",
        description:
          "Vada pav is a savory dinner roll stuffed with fried mashed and spiced potato fritters. It is a popular vegan street food snack eaten in Mumbai and rest of Maharashtra. This dish is full of flavors and various textures!",
        rating: 3
      },
      {
        name: "Masala Dosa",
        description:
          "Masala Dosa / dosey / dosai is a variation of the popular South Indian dosa which has its origins in Tuluva Udupi cuisine of Karnataka. It is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar. It is popular in South India.",
        rating: 3
      }
    ],
    Chinese: [
      {
        name: "Noodles",
        description:
          "Chinese noodles vary widely according to the region of production, ingredients, shape or width, and manner of preparation. Noodles were invented in China, and are an essential ingredient and staple in Chinese cuisine. They are an important part of most regional cuisines within China, and other countries with sizable overseas Chinese populations.",
        rating: 4
      },
      {
        name: "chilly chicken ",
        description:
          "Chilli chicken is a popular Indo-Chinese dish of chicken of Hakka Chinese heritage. In India, this may include a variety of dry chicken preparations.",
        rating: 5
      },

      {
        name: "Manchurian",
        description:
          "Veg Manchurian is a tasty Indo Chinese dish of fried veggie balls in a spicy, sweet and tangy sauce. ",
        rating: 3
      }
    ],
    Italian: [
      {
        name: "Pizza",
        description:
          "Though a slab of flat bread served with oil and spices was around long before the unification Italy, there’s perhaps no dish that is as common or as representative of the country as the humble pizza.",
        rating: 3
      },
      {
        name: "Pasta",
        description:
          "pasta, any of several starchy food preparations (pasta alimentaria) frequently associated with Italian cuisine and made from semolina, the granular product obtained from the endosperm of a type of wheat called durum, and containing a large proportion of gluten (elastic protein).",
        rating: 4
      },
      {
        name: "Lasagna",
        description:
          "Lasagna is a wide, flat pasta noodle, usually baked in layers in the oven. Like most Italian dishes, its origins are hotly contested, but we can at least say that’s its stronghold is in the region of Emilia-Romagna, where it transformed from a poor man’s food to a rich meal filled with the ragù, or meat sauce.",
        rating: 5
      }
    ]
  };
  const handleChangeButton = (cat) => {
    setCategory(cat);
  };
  return (
    <div className="App">
      <h1>
        <img
          className="logo"
          src="data:image/png;base64,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"
          alt="Good Food"
        />
        Good Food
      </h1>
      <p>Checkout my Favourite food items here ...</p>
      <div className="btn-container">
        {Object.keys(Food).map((cat, i) => (
          <button
            key={i}
            className={category === cat ? "active" : ""}
            onClick={() => handleChangeButton(cat)}
          >
            {cat}{" "}
          </button>
        ))}
      </div>
      <h2>List</h2>
      <div className="list-container">
        {Food[category].map((foodie, i) => (
          <div className="list-item" key={i}>
            <h2>{foodie.name}</h2>
            <div className="rating">
              <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                value={foodie.rating}
              />
            </div>
            <h5>{foodie.description}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
