const sampleListings = [
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d", // Sample ObjectId for the User
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    address: "123 Ocean Drive, Cancun, Mexico",
    category: ["Beach", "Luxury", "Vacation Rental"],
    perks: ["Ocean View", "Private Pool", "Free Wi-Fi", "Air Conditioning"],
    maxGuests: 6,
    geometry: {
      type: "Point",
      coordinates: [-86.8515, 21.1619], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    address: "Serengeti National Park, Tanzania",
    category: ["Safari", "Adventure", "Lodge"],
    perks: ["Guided Tours", "Wildlife Viewing", "Luxury Accommodation"],
    maxGuests: 4,
    geometry: {
      type: "Point",
      coordinates: [34.8385, -2.3333], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    address: "456 Mountain Rd, Aspen, CO, USA",
    category: ["Mountain", "Cabin", "Nature"],
    perks: ["Hiking Trails", "Fireplace", "Scenic Views"],
    maxGuests: 4,
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    address: "789 Vineyard Ln, Florence, Italy",
    category: ["Historic", "Villa", "Wine Country"],
    perks: ["Wine Tasting", "Private Garden", "Historic Architecture"],
    maxGuests: 8,
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    address: "101 Forest Rd, Portland, OR, USA",
    category: ["Treehouse", "Nature", "Secluded"],
    perks: ["Eco-Friendly", "Nature Trails", "Stunning Views"],
    maxGuests: 2,
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    address: "234 Ocean Ave, Malibu, CA, USA",
    category: ["Beach", "Cottage", "Vacation Rental"],
    perks: ["Ocean View", "Private Beach Access", "Fire Pit"],
    maxGuests: 4,
    geometry: {
      type: "Point",
      coordinates: [-118.7815, 34.0259], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    address: "345 Lakeview Dr, Lake Tahoe, CA, USA",
    category: ["Lake", "Cabin", "Nature"],
    perks: ["Lake Access", "Kayaking", "Fireplace"],
    maxGuests: 6,
    geometry: {
      type: "Point",
      coordinates: [-120.0314, 38.9394], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    address: "789 Skyline Blvd, Los Angeles, CA, USA",
    category: ["Luxury", "City", "Apartment"],
    perks: ["City Views", "Rooftop Pool", "Gym Access"],
    maxGuests: 4,
    geometry: {
      type: "Point",
      coordinates: [-118.2437, 34.0522], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    address: "101 Alpine Rd, Verbier, Switzerland",
    category: ["Ski", "Chalet", "Mountain"],
    perks: ["Ski Access", "Hot Tub", "Fireplace"],
    maxGuests: 8,
    geometry: {
      type: "Point",
      coordinates: [7.2145, 46.0988], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    address: "456 Broadway, New York, NY, USA",
    category: ["City", "Loft", "Modern"],
    perks: ["Central Location", "Modern Design", "Gym Access"],
    maxGuests: 4,
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Historic Castle in Scotland",
    description:
      "Step back in time and enjoy the grandeur of this historic castle. Perfect for a regal experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1569494602-dac4e7f2e6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhc3RsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    address: "1 Castle Rd, Edinburgh, Scotland",
    category: ["Historic", "Castle", "Luxury"],
    perks: ["Historic Architecture", "Grand Hall", "Scenic Views"],
    maxGuests: 10,
    geometry: {
      type: "Point",
      coordinates: [-3.1883, 55.9533], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Private Island Retreat",
    description:
      "Escape to your own private island paradise. Enjoy exclusive access to pristine beaches and crystal-clear waters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1568008387-e36e6b7d5602?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcmxpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    address: "Private Island, Maldives",
    category: ["Private Island", "Luxury", "Beach"],
    perks: ["Private Beach", "Infinity Pool", "Butler Service"],
    maxGuests: 8,
    geometry: {
      type: "Point",
      coordinates: [73.2207, 3.2028], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    address: "12 Thatched Ln, Cotswolds, UK",
    category: ["Cottage", "Historic", "Countryside"],
    perks: ["Thatched Roof", "Garden", "Fireplace"],
    maxGuests: 4,
    geometry: {
      type: "Point",
      coordinates: [-1.8216, 51.8467], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    address: "34 Beacon St, Boston, MA, USA",
    category: ["Historic", "Brownstone", "City"],
    perks: ["Historic Charm", "Central Location", "Modern Amenities"],
    maxGuests: 6,
    geometry: {
      type: "Point",
      coordinates: [-71.0589, 42.3601], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    address: "56 Beach Rd, Bali, Indonesia",
    category: ["Beach", "Bungalow", "Tropical"],
    perks: ["Private Pool", "Beach Access", "Ocean View"],
    maxGuests: 4,
    geometry: {
      type: "Point",
      coordinates: [115.1696, -8.4095], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    address: "78 Mountain View Dr, Banff, Canada",
    category: ["Mountain", "Cabin", "Nature"],
    perks: ["Scenic Views", "Hiking Trails", "Fireplace"],
    maxGuests: 6,
    geometry: {
      type: "Point",
      coordinates: [-115.5718, 51.1784], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    address: "90 Ocean Dr, Miami, FL, USA",
    category: ["Art Deco", "Apartment", "City"],
    perks: ["Historic Design", "Ocean View", "Rooftop Pool"],
    maxGuests: 4,
    geometry: {
      type: "Point",
      coordinates: [-80.1918, 25.7617], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    address: "12 Tropical Rd, Phuket, Thailand",
    category: ["Tropical", "Villa", "Luxury"],
    perks: ["Infinity Pool", "Private Beach", "Ocean View"],
    maxGuests: 8,
    geometry: {
      type: "Point",
      coordinates: [98.295, 7.8804], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    address: "1 Castle Rd, Scottish Highlands, UK",
    category: ["Historic", "Castle", "Luxury"],
    perks: ["Grand Hall", "Scenic Views", "Historic Charm"],
    maxGuests: 12,
    geometry: {
      type: "Point",
      coordinates: [-4.5001, 56.4914], // Longitude, Latitude
    },
  },
  {
    owner: "615a1b2e3c4d5e6f7a8b9c0d",
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    address: "1 Oasis Rd, Dubai, UAE",
    category: ["Desert", "Luxury", "Oasis"],
    perks: ["Private Pool", "Desert Views", "Luxury Amenities"],
    maxGuests: 6,
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048], // Longitude, Latitude
    },
  },
];

module.exports = { data: sampleListings };
