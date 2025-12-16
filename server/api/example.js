export default defineEventHandler(() => {
  return {
    pizza: [
      {
        id: 1,
        type: "2",
        name: "Margherita",
        img: "/images/pizza1.png",
        tonkoe: {
          sm: 10,
          md: 20,
          lg: 30,
        },
        tolstoe: {
          sm: 15,
          md: 25,
          lg: 40,
        },
      },
      {
        id: 2,
        type: "2",
        name: "Pepperoni",
        img: "/images/pizza2.png",
        tonkoe: {
          sm: 10,
          md: 20,
          lg: 30,
        },
        tolstoe: {
          sm: 15,
          md: 25,
          lg: 40,
        },
      },
      {
        id: 3,
        name: "BBQ Chicken",
        img: "/images/pizza1.png",
        tonkoe: {
          sm: 210,
          md: 120,
          lg: 30,
        },
        tolstoe: {
          sm: 15,
          md: 125,
          lg: 40,
        },
      },
      {
        id: 4,
        name: "Veggie",
        img: "/images/pizza2.png",
        tonkoe: {
          sm: 10,
          md: 20,
          lg: 30,
        },
        tolstoe: {
          sm: 45,
          md: 65,
          lg: 40,
        },
      },
    ],
  };
});
