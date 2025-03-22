import React,{useState} from 'react'

import { useNavigate } from "react-router-dom";
import { Input, Select, Button, Card } from "antd";

const LandAdd = () => {
    const [state, setEstate] = useState("");
    const [value, setValue] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [Available, setAvailable] = useState("");
    const [AcrePrice, setAcrePrice] = useState("");
    const [Acre, setAcre] = useState("");
    const [Image, setImage] = useState("");
    const [Road, setRoad] = useState("");
    const [property, setProperty] = useState("");
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card
        className="w-full max-w-3xl shadow-lg rounded-xl bg-white p-8"
        bordered={false}
      >
        {/* Title */}
        <h3 className="text-center font-bold text-3xl text-gray-800 mb-6">
          Create Estate
        </h3>

        <form className="space-y-5">
          {/* Property Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Property Name
            </label>
            <Input
              value={property}
              onChange={(e) => setProperty(e.target.value)}
              placeholder="Enter property name"
              size="large"
              className="rounded-lg"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Image URL
            </label>
            <Input
              value={Image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter image URL"
              size="large"
              className="rounded-lg"
            />
          </div>

          {/* Acre Price & Road Width (Side by Side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Acre Price
              </label>
              <Input
                type="number"
                value={AcrePrice}
                onChange={(e) => setAcrePrice(e.target.value)}
                placeholder="Enter acre price"
                size="large"
                className="rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Road Width
              </label>
              <Input
                type="number"
                value={Road}
                onChange={(e) => setRoad(e.target.value)}
                placeholder="Enter road width"
                size="large"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Acre */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Acre
            </label>
            <Input
              type="number"
              value={Acre}
              onChange={(e) => setAcre(e.target.value)}
              placeholder="Enter acre"
              size="large"
              className="rounded-lg"
            />
          </div>

          {/* State Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select State
            </label>
            <Select
              value={selectedState}
              onChange={(value) => setSelectedState(value)}
              placeholder="Select a state"
              className="w-full"
              size="large"
            >
              {value?.map((e) => (
                <Option key={e.id} value={e.id}>
                  {e.name}
                </Option>
              ))}
            </Select>
          </div>

          {/* Availability Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Availability
            </label>
            <Select
              value={Available}
              onChange={(value) => setAvailable(value)}
              placeholder="Is the property available?"
              className="w-full"
              size="large"
            >
              <Option value="true">Yes</Option>
              <Option value="false">No</Option>
            </Select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
            style={{
                backgroundColor: "#4a5568",
              
              
            }}
              type="primary"
              size="large"
              className="w-full md:w-auto px-6 rounded-lg   hover:bg-gray-600  transform hover:scale-105 transition-transform duration-300"
            >
              Create Property
            </Button>
          </div>
        </form>
      </Card>
    </div>
  
  )
}

export default LandAdd