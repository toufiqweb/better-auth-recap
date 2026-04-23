const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    brand: "SoundPulse",
    price: 49.99,
    currency: "USD",
    rating: 4.5,
    stock: 120,
    features: ["Noise Cancelling", "20h Battery Life", "Bluetooth 5.2"],
  },
  {
    id: 2,
    name: "Gaming Mechanical Keyboard",
    category: "Electronics",
    brand: "KeyMaster",
    price: 79.99,
    currency: "USD",
    rating: 4.7,
    stock: 80,
    features: ["RGB Backlight", "Blue Switches", "Anti-Ghosting"],
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Fashion",
    brand: "RunFast",
    price: 59.99,
    currency: "USD",
    rating: 4.3,
    stock: 200,
    sizes: [7, 8, 9, 10, 11],
    features: ["Lightweight", "Breathable Material", "Shock Absorption"],
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    brand: "TechTime",
    price: 99.99,
    currency: "USD",
    rating: 4.6,
    stock: 60,
    features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant"],
  },
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home Appliances",
    brand: "BrewMaster",
    price: 39.99,
    currency: "USD",
    rating: 4.2,
    stock: 150,
    features: ["Auto Shut-off", "1.5L Capacity", "Fast Brewing"],
  },
];

export const getProducts = () => {

  return products
}