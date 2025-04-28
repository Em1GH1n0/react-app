import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

interface CardData {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

interface CardProps {
  data: CardData;
}

const BasicCard: React.FC<CardProps> = ({
  data: { title, subtitle, description, buttonText },
}) => {
  return (
    <Card
      sx={{
        width: 300, // Ancho fijo en px
        height: 300, // Alto fijo en px
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ flexGrow: 1, maxHeight: 200, overflow: "auto" }}>
        <div style={{ color: "white", fontSize: 14 }}>{title}</div>
        <div style={{ fontSize: 20, fontWeight: "bold" }}>{subtitle}</div>
        <div
          style={{
            marginTop: 16,
            wordBreak: "break-word", // Rompe las palabras largas
            overflowWrap: "break-word", // Rompe las palabras largas
            whiteSpace: "normal", // Permite que el texto se ajuste a las líneas
            maxHeight: 120, // Limita la altura del contenedor
            overflowY: "auto", // Permite un scroll vertical si el contenido es demasiado largo
          }}
        >
          {description}
        </div>
      </CardContent>
      <CardActions sx={{ mt: "auto" }}>
        <Button size="small">{buttonText}</Button>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
