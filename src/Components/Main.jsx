import React from "react";

import { Grid, Typography, CardMedia, CardContent, Card, Container } from "@mui/material";

function Main() {
  const cardData = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?cs=srgb&dl=pexels-pixabay-70083.jpg&fm=jpg",
      title: "Frog",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?cs=srgb&dl=pexels-pixabay-70083.jpg&fm=jpg",
      title: "Cat",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?cs=srgb&dl=pexels-pixabay-70083.jpg&fm=jpg",
      title: "Dog",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?cs=srgb&dl=pexels-pixabay-70083.jpg&fm=jpg",
      title: "Frog",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?cs=srgb&dl=pexels-pixabay-70083.jpg&fm=jpg",
      title: "Cat",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?cs=srgb&dl=pexels-pixabay-70083.jpg&fm=jpg",
      title: "Dog",
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?cs=srgb&dl=pexels-pixabay-70083.jpg&fm=jpg",
      title: "Frog",
    },
    {
      id: 8,
      image:
        "https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?cs=srgb&dl=pexels-pixabay-70083.jpg&fm=jpg",
      title: "Cat",
    },
    {
      id: 9,
      image:
        "https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?cs=srgb&dl=pexels-pixabay-70083.jpg&fm=jpg",
      title: "Dog",
    },
    {
      id: 10,
      image:
        "https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?cs=srgb&dl=pexels-pixabay-70083.jpg&fm=jpg",
      title: "Dog",
    },
    {
      id: 11,
      image:
        "https://images.pexels.com/photos/70083/frog-macro-amphibian-green-70083.jpeg?cs=srgb&dl=pexels-pixabay-70083.jpg&fm=jpg",
      title: "Dog",
    },
  ];

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="stretch">
  {cardData.map((item, index) => (
    <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
      <Card sx={{ width: "100%" }}>
        <CardMedia
          component="img"
          height="180"
          image={item.image}
          alt={item.title}
        />
        <CardContent>
          <Typography variant="h6">{item.title}</Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

  );
}

export default Main;
