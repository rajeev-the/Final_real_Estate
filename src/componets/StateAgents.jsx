import React from 'react'

import { Avatar, Card } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons"; // Import WhatsApp icon
const { Meta } = Card;

const StateAgents = () => {
  return (
    <Card
    style={{
      width: 320,
      borderRadius: "12px",
      boxShadow: "0px 10px 20px rgba(130, 108, 176, 0.2)", 
      transition: "transform 0.3s ease-in-out",
    }}
    cover={
      <img
        alt="example"
        src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FwV7cHI9yRGPIcT57w6i2%2Fpub%2FauzC7uegAL4sn1cfSKP1.jpg"
        style={{
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          height:"220px",
          objectFit:"cover"
        }}
      />
    }
    actions={[
      <div
        key="whatsapp"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          borderRadius: "60%",
          backgroundColor: "#25D366", 
          color: "white",
          fontSize: "22px",
          cursor: "pointer",
          transition: "transform 0.3s ease-in-out",
          margin: "auto",  // Ensures centering
          boxShadow: "0px 4px 10px rgba(37, 211, 102, 0.4)", 
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.2)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <WhatsAppOutlined />
      </div>,
    ]}
    hoverable
  >
    <Meta
      avatar={
        <Avatar
          src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
          size={50}
          style={{
            boxShadow: "0px 4px 10px rgba(130, 108, 176, 0.3)", 
          }}
        />
      }
      title={<span style={{ fontSize: "18px", fontWeight: "bold", color: "#4B306D" }}> Rajeev Ranjan </span>}
      description={
        <span style={{ color: "#6D597A", fontSize: "14px" }}>
         Gurugram ,Gurugram, Haryana
        </span>
      }
    />
  </Card>
  )
}

export default StateAgents