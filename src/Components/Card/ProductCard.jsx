import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

const ProductCard = ({ image, description }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [image]);

  const cardStyle3 = {
    background:
      "linear-gradient(to right, hsl(210, 60%, 95%), hsl(0, 60%, 95%), hsl(60, 100%, 95%))",
  };

  return (
    <Card>
      <CardHeader>
        <div className="relative group">
          <img
            src={image}
            alt="Product Image"
            className={`h-64 w-full object-cover transition duration-300 ease-in-out transform hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={cardStyle3}
            onLoad={() => setImageLoaded(true)}
          />
          <div
            className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white text-center transition duration-300 ${
              imageLoaded ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            <Typography color="blue-gray" className="font-medium">
              {description}
            </Typography>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProductCard;
