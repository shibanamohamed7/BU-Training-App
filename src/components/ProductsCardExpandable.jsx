import * as React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import defaultImage from "../assets/images/beamerxuserflow BG.png";

const ExpandMore = styled(IconButton)(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductsCardExpandable({
  image = defaultImage,
  title,
  description,
  subProducts = [],
  Doclink,
  Tryoutlink,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const buttonStyles = {
    border: "1px solid #1a57e6",
    padding: "auto 10px",
    textTransform: "none",
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
        boxShadow: "-7px 6px 20px 0 rgba(19, 43, 57, .25), 1px 4px 24px -4px rgba(19, 43, 57, .1)",
      }}
    >
      <CardMedia
        sx={{ height: 0, paddingTop: "56.25%" }}
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
      <CardActions
        sx={{ padding: "10px 15px 15px", justifyContent: "space-between" }}
      >
        <Box>
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
        </Box>
        {subProducts.length > 0 && (
          <ExpandMore
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <ExpandMoreIcon sx={{ fill: "#1a57e6" }} />
          </ExpandMore>
        )}
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {subProducts.map(({ id, title, description, Doclink }) => (
            <Card
              key={id}
              sx={{
                padding: "1rem",
                borderRadius: "0.5rem",
                boxShadow: 3,
                marginBottom: "1rem",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                <a
                  href={Doclink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline", color: "black" }}
                >
                  {title}
                </a>
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "normal" }}>
                {description}
              </Typography>
            </Card>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}
