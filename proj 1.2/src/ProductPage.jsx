import { useState } from 'react'

import bp1 from './assets/img/blue-panjabi1.jpg'
import bp2 from './assets/img/blue-panjabi2.jpg'
import bp3 from './assets/img/blue-panjabi3.jpg'
import bp4 from './assets/img/blue-panjabi4.jpg'

function ProductPage() {

  const [formData, setFormData] = useState({
    size: "",
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  // Handle form submission
  const handleOrderSubmit = async () => {
    try {
      const response = await fetch("https://api.example.com/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Order placed successfully!");
      } else {
        alert("Failed to place order.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <>
      <div className="flex flex-row gap-5  m-5">
        <div className="imgs flex flex-wrap gap-2 w-[60vw]">
          <img className="w-90 shadow" src={bp1}></img>
          <img className="w-90 shadow" src={bp2}></img>
          <img className="w-90 shadow" src={bp3}></img>
          <img className="w-90 shadow" src={bp4}></img>
        </div>
        
        <div className="details flex flex-col gap-5 text-center">
          <h1 className="text-4xl">Blue Premium Panjabi</h1>
          <p>Product Code :09133</p>
          <p>Preice: 3000Taka</p>
              <form className="flex flex-col gap-3 p-4">
          <select name="size" className="text-white bg-black p-2 shadow cursor-pointer" onChange={handleChange}>
            <option value="">Select Size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <input name="name" className="border p-1" type="text" placeholder="Name" onChange={handleChange} />
          <input name="address" className="border p-1" type="text" placeholder="Address" onChange={handleChange} />
          <input name="phone" className="border p-1" type="number" placeholder="Phone Number" onChange={handleChange} />
          <input name="email" className="border p-1" type="email" placeholder="Mail" onChange={handleChange} />
          <span className="text-center border p-2 shadow cursor-pointer bg-blue-500 text-white" onClick={handleOrderSubmit}>
            Order now
          </span>
        </form>
            <div className="mt-10">
            <h1 className="text-left text-xl font-semibold">Details</h1>
            <ul className="text-left list-disc">
              <li>Striking black design with vivid red embroidery accents</li>
              <li>Rich contrasted collar, placket, and cuffs</li>
              <li>Solid black backdrop adds depth to the expression</li>
              <li>Ultra-fine cotton for year-round comfort</li>
              <li>Relaxed fit for effortless wear</li>
            </ul>
            </div>
            <div className="mt-10">
            <h1 className="text-left text-xl font-semibold">Care</h1>
            <ul className="text-left list-disc">
              <li>Do not bleach</li>
              <li>Dry clean only</li>
              <li>Do not iron over the label or the buttons</li>
              <li>Do not iron over any embroidered areas</li>
              <li>Iron inside out with low to medium heat</li>
            </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage