import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
function Main() {
  const CardData = [
    {
      id: "1",
      image: "https",
      title: "frog",
      description: "this is a best frog",
    },
    {
      id: "2",
      image: "https",
      title: "frog",
      description: "this is a best frog",
    },
    {
      id: "3",
      image: "https",
      title: "frog",
      description: "this is a best frog",
    },
    {
      id: "4",
      image: "https",
      title: "frog",
      description: "this is a best frog",
    },
    {
      id: "5",
      image: "https",
      title: "frog",
      description: "this is a best frog",
    },
    {
      id: "6",
      image: "https",
      title: "frog",
      description: "this is a best frog",
    },
    {
      id: "7",
      image: "https",
      title: "frog",
      description: "this is a best frog",
    },
    {
      id: "8",
      image: "https",
      title: "frog",
      description: "this is a best frog",
    },
    {
      id: "9",
      image: "https",
      title: "frog",
      description: "this is a best frog",
    },
  ];
  return (
    <>
      <Grid container spacing={3} justifyContent="center" sx={{ padding: 3 }}>
        {CardData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="180"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Main;
