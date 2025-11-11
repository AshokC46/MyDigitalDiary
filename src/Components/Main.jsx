import React from "react";
// 🚨 Import Container component
import {
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Container, // <--- Add this
} from "@mui/material";

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
    // 💡 Use Container as the outermost wrapper
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {cardData.map((item, index) => (
          // This line is now CORRECT: 3 cards per row (12/4=3) from medium screens up
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
            <Card > {/* Added height: "100%" for consistent card height */}
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
    </Container>
  );
}

export default Main;