import React from "react";
import { Card, Typography , Tooltip  } from "antd"; // Import Ant Design Components
import { DeleteOutlined } from "@ant-design/icons"; // Import delete icon

const { Title, Text } = Typography;

const CustomCardDel = ({
  property_name,
  acre,
  acre_price

  }) => {
  return (
    <Card
      hoverable
      style={{
        width: 280,
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        position: "relative",
      }}
      cover={
        <div style={{ position: "relative" }}>
          {/* Property Image */}
          <img
            alt="Property"
            src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FwV7cHI9yRGPIcT57w6i2%2Fpub%2FauzC7uegAL4sn1cfSKP1.jpg"
            style={{
              height: "160px",
              width: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          />
          {/* Overlay Effect */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "40px",
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0,0,0,0))",
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
          />
          {/* Delete Icon */}
          <Tooltip title="Delete">
            <DeleteOutlined
              // Call delete function
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                fontSize: "18px",
                color: "#ff4d4f",
                cursor: "pointer",
                background: "rgba(255, 255, 255, 0.8)",
                padding: "5px",
                borderRadius: "50%",
                transition: "0.3s",
              }}
            />
          </Tooltip>
        </div>
      }
      bodyStyle={{ padding: "15px" }}
    >
      {/* Property Location */}
      <Text
        style={{
          fontSize: "12px",
          color: "#b48608",
          fontWeight: "600",
          letterSpacing: "0.5px",
        }}
      >
        {property_name || "Gurugram, Haryana"}
      </Text>

      {/* Acre Info */}
      <Title level={4} style={{ margin: "8px 0", fontWeight: "bold" }}>
        {acre || 5} Acre
      </Title>

      {/* Price Info */}
      <Text
        style={{
          fontSize: "14px",
          color: "#333",
          fontWeight: "500",
        }}
      >
        💰 {acre_price || 222} Cr/ Acre (Approx.)
      </Text>
    </Card>
  );
};

export default CustomCardDel;
