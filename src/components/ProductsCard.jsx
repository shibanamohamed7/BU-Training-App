import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import defaultImage from "../assets/images/beamerxuserflow BG.png";

export default function ProductsCard({
  image = defaultImage,
  title,
  description,
  Doclink,
  Tryoutlink,
}) {
  const buttonStyles = {
    border: "1px solid #1a57e6",
    padding: "auto 10px",
    textTransform: "none",
    marginRight: ".5rem",
    "&:hover": {
      borderRadius: "2rem",
      transition: "ease-in-out 0.2s",
    },
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: ".4rem",
        boxShadow:
          "-7px 6px 20px 0 rgba(19, 43, 57, .25), 1px 4px 24px -4px rgba(19, 43, 57, .1)",
      }}
    >
      <CardMedia
        sx={{ height: 0, paddingTop: "56.25%", backgroundSize: "cover" }}
        image={image}
        title={title}
      />
      <CardContent sx={{ padding: "10px 15px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "10px 15px 15px" }}>
        <Button
          href={Doclink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ ...buttonStyles, marginRight: ".5rem" }}
          size="small"
        >
          Docs
        </Button>
        <Button
          href={Tryoutlink}
          target="_blank"
          rel="noopener noreferrer"
          sx={buttonStyles}
          size="small"
        >
          Try out
        </Button>
      </CardActions>
    </Card>
  );
}
