import React from "react";
import { Card, Typography  ,Divider} from "antd"; // Import Ant Design Components

const { Title, Text } = Typography;

const CustomCard = ({
  property_name,
  acre,
  acre_price,img,
  

  }) => {
  return (
   
   <Card
    hoverable
    style={{
      width: 300,
      border: "1px solid #e8e8e8",
      borderRadius: "16px",
      overflow: "hidden",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      background: "#ffffff",
    }}
    cover={
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          alt="Property Image"
          src={img }
          style={{
            height: "200px",
            width: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
          className="hover:scale-105"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
          }}
        />
  
      </div>
    }
  
  >
    <div style={{ marginBottom: "16px" }}>
      <Text
        style={{
          fontSize: "12px",
          color: "#D97706", // Amber-600
          fontWeight: "600",
          letterSpacing: "1px",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}
      >
        {property_name || "NaN"}
      </Text>
      
      <Title 
        level={4} 
        style={{ 
          margin: "0 0 12px 0", 
          fontWeight: "600",
          fontFamily: "'Playfair Display', serif",
          color: "#1a1a1a",
          fontSize: "20px"
        }}
      >
        {acre || 5} Acre Estate
      </Title>
  
      <Divider style={{ margin: "12px 0", backgroundColor: "#f0f0f0" }} />
  
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{
          background: "#D97706", // Amber-600
          color: "white",
          borderRadius: "4px",
          padding: "4px 8px",
          fontSize: "12px",
          fontWeight: "500"
        }}>
          Price Guide
        </span>
        <Text
          style={{
            fontSize: "16px",
            color: "#1a1a1a",
            fontWeight: "600",
            letterSpacing: "0.5px"
          }}
        >
          ₹{acre_price ||  0} Cr
        </Text>
      </div>
  
      <Text
        style={{
          fontSize: "12px",
          color: "#666666",
          marginTop: "8px",
          fontWeight: "400"
        }}
      >
        Per Acre (Approximate)
      </Text>
    </div>
  </Card>
  );
};

export default CustomCard;
 