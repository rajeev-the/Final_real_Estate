import React from "react";
import { Card, Typography } from "antd"; // Import Ant Design Components

const { Title, Text } = Typography;

const CustomCard = ({
  property_name,
  acre,
  acre_price

  }) => {
  return (
    <Card
      hoverable
      style={{
        width: 280, // Keep width the same
        border: "1px solid #d9d9d9", // Soft grey border
        borderRadius: "12px", // Smooth edges
        overflow: "hidden", // Prevent overflow
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
      }}
      cover={
        <div style={{ position: "relative" }}>
          {/* Image */}
          <img
            alt="Property Image"
            src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FwV7cHI9yRGPIcT57w6i2%2Fpub%2FauzC7uegAL4sn1cfSKP1.jpg"
            style={{
              height: "160px", // Keep size consistent
              width: "100%", // Full width
              objectFit: "cover", // Maintain aspect ratio
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          />
          {/* Subtle Overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "40px",
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0,0,0,0))",
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
          />
        </div>
      }
      bodyStyle={{ padding: "15px" }} // Adjust body padding
    >
      {/* Location Text */}
      <Text
        style={{
          fontSize: "12px",
          color: "#b48608",
          fontWeight: "600",
          letterSpacing: "0.5px",
        }}
      >
        {  property_name  ?  property_name  :" Gurugram ,Gurugram, Haryana"}
      </Text>

      {/* Title */}
      <Title level={4} style={{ margin: "8px 0", fontWeight: "bold" }}>
       {acre ? acre : 5} Acre
      </Title>

      {/* Price Info */}
      <Text
        style={{
          fontSize: "14px",
          color: "#333",
          fontWeight: "500",
        }}
      >
        💰 {acre_price ?  acre_price : 222} Cr/ Acre (Approx.)
      </Text>
    </Card>
  );
};

export default CustomCard;
