import React from "react";
import { Card, Typography , Tooltip  } from "antd"; // Import Ant Design Components

import { CheckCircleTwoTone, ExclamationCircleTwoTone, DeleteOutlined } from '@ant-design/icons';
import axios from "axios";
import {  toast } from "react-toastify";

const { Title, Text } = Typography;

const CustomCardDel = ({
  property_name,
  acre,
  acre_price,
  item,
  available

}) => {

  const url = "https://finalbackend111.pythonanywhere.com/api/"
  console.log(available)

    const handledelete = async(id) => {

      try {
               
      const res = await axios.delete(`${url}property/${id}/`)
     if(res.status === 204){
        showInfoToast("Successfully Deleted")
     }
      window.location.reload()

        
      } catch (error) {
        console.log(error)
      }

    }


      const showInfoToast = (message) => {
          toast.info(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          });
        };
    
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
              onClick={() => handledelete(item)}
            />
          </Tooltip>
        </div>
      }
     
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
     
{/* Verification Status */}
<div style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
  {available ? (
    <>
      <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "16px", marginRight: "6px" }} />
      <Text style={{ fontSize: "13px", color: "#52c41a", fontWeight: 500 }}>Verified</Text>
    </>
  ) : (
    <>
      <ExclamationCircleTwoTone twoToneColor="#faad14" style={{ fontSize: "16px", marginRight: "6px" }} />
      <Text style={{ fontSize: "13px", color: "#faad14", fontWeight: 500 }}>Not Verified</Text>
    </>
  )}
</div>
    </Card>
  );
};

export default CustomCardDel;
