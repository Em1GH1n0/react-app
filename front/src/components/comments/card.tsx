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
        width: 250, // Ancho fijo en px
        height: 300, // Alto fijo en px
        display: "flex",
        flexDirection: "column", // Para mantener una distribución de columna dentro del card
        overflow: "hidden", // Asegura que el contenido no se desborde
      }}
    >
      <CardContent sx={{ flexGrow: 1, maxHeight: 200, overflow: "auto" }}>
        {/* Usamos un div para el título */}
        <div style={{ color: "white", fontSize: 14 }}>{title}</div>
        {/* Usamos un div para el subtítulo */}
        <div style={{ fontSize: 20, fontWeight: "bold" }}>{subtitle}</div>
        {/* Usamos un div para la descripción con un control de desbordamiento */}
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
