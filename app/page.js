'use client'

import { useState } from 'react'

const restaurants = [
  {
    id: 1,
    name: "Lung King Heen",
    cuisine: "Cantonese (3 Michelin Stars)",
    location: "Central",
    description: "The world's first Chinese restaurant to receive three Michelin stars, offering exquisite Cantonese cuisine with harbor views.",
    priceRange: "$$$$",
    highlights: "Dim Sum, Roasted Meats, Seafood"
  },
  {
    id: 2,
    name: "Amber",
    cuisine: "French Contemporary (2 Michelin Stars)",
    location: "Central",
    description: "Modern French fine dining with innovative techniques and impeccable presentation.",
    priceRange: "$$$$",
    highlights: "Tasting Menus, Wine Pairing"
  },
  {
    id: 3,
    name: "Tim Ho Wan",
    cuisine: "Dim Sum (Michelin Star)",
    location: "Multiple Locations",
    description: "The world's most affordable Michelin-starred restaurant, famous for BBQ pork buns.",
    priceRange: "$",
    highlights: "BBQ Pork Buns, Har Gow, Siu Mai"
  },
  {
    id: 4,
    name: "Yardbird",
    cuisine: "Japanese Yakitori",
    location: "Sheung Wan",
    description: "Trendy izakaya serving exceptional yakitori and Japanese small plates.",
    priceRange: "$$",
    highlights: "Chicken Skewers, Cauliflower, KFC"
  },
  {
    id: 5,
    name: "The Chairman",
    cuisine: "Cantonese",
    location: "Central",
    description: "Farm-to-table Cantonese restaurant focusing on local ingredients and traditional techniques.",
    priceRange: "$$$",
    highlights: "Steamed Crab, Roasted Goose, Flower Crab"
  },
  {
    id: 6,
    name: "Duddell's",
    cuisine: "Cantonese (1 Michelin Star)",
    location: "Central",
    description: "Elegant Cantonese dining with contemporary art gallery setting.",
    priceRange: "$$$",
    highlights: "Dim Sum, Barbecue Platter"
  },
  {
    id: 7,
    name: "Caprice",
    cuisine: "French (3 Michelin Stars)",
    location: "Central",
    description: "Classic French haute cuisine with stunning harbor views.",
    priceRange: "$$$$",
    highlights: "Seafood, Foie Gras, Extensive Wine List"
  },
  {
    id: 8,
    name: "Seventh Son",
    cuisine: "Cantonese",
    location: "Wan Chai",
    description: "Modern Cantonese cuisine with refined execution and seasonal ingredients.",
    priceRange: "$$$",
    highlights: "Double-boiled Soups, Wok-fried Dishes"
  },
  {
    id: 9,
    name: "Rōnin",
    cuisine: "Japanese Contemporary",
    location: "Sheung Wan",
    description: "Creative Japanese-inspired cuisine with an open kitchen and energetic atmosphere.",
    priceRange: "$$",
    highlights: "Omakase, Wagyu, Uni"
  },
  {
    id: 10,
    name: "Ho Lee Fook",
    cuisine: "Chinese Contemporary",
    location: "Central",
    description: "Modern Chinese restaurant with a playful twist on traditional dishes.",
    priceRange: "$$",
    highlights: "Drunken Chicken Wings, Wagyu Fried Rice"
  },
  {
    id: 11,
    name: "Sushi Shikon",
    cuisine: "Japanese Sushi (3 Michelin Stars)",
    location: "Sheung Wan",
    description: "Intimate sushi counter offering traditional Edomae sushi.",
    priceRange: "$$$$",
    highlights: "Omakase Only, Seasonal Fish"
  },
  {
    id: 12,
    name: "Mott 32",
    cuisine: "Chinese Contemporary",
    location: "Central",
    description: "Stunning underground restaurant serving modern Chinese cuisine with global influences.",
    priceRange: "$$$",
    highlights: "Apple Wood Roasted Duck, Dim Sum"
  },
  {
    id: 13,
    name: "Kam's Roast Goose",
    cuisine: "Cantonese BBQ",
    location: "Wan Chai",
    description: "Famous for its crispy-skinned roast goose, a Hong Kong classic.",
    priceRange: "$",
    highlights: "Roast Goose, BBQ Pork"
  },
  {
    id: 14,
    name: "Neighborhood",
    cuisine: "International",
    location: "Kennedy Town",
    description: "Cozy neighborhood bistro with excellent brunch and seasonal dishes.",
    priceRange: "$$",
    highlights: "Brunch, Craft Cocktails"
  },
  {
    id: 15,
    name: "Belon",
    cuisine: "French Contemporary",
    location: "Soho",
    description: "Modern French bistro with focus on natural wines and quality ingredients.",
    priceRange: "$$",
    highlights: "Oysters, Whole Fish, Natural Wines"
  }
]

export default function Home() {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.location.toLowerCase().includes(searchTerm.toLowerCase())

    if (filter === 'all') return matchesSearch
    if (filter === 'michelin') return matchesSearch && restaurant.cuisine.includes('Michelin')
    if (filter === 'budget') return matchesSearch && (restaurant.priceRange === '$' || restaurant.priceRange === '$$')
    if (filter === 'fine-dining') return matchesSearch && restaurant.priceRange === '$$$$'
    return matchesSearch
  })

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: 'white', fontSize: '48px', marginBottom: '10px', fontWeight: 'bold' }}>
            🍜 Best Restaurants in Hong Kong
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px' }}>
            Discover the finest dining experiences in the culinary capital of Asia
          </p>
        </header>

        <div style={{ background: 'white', borderRadius: '12px', padding: '20px', marginBottom: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <input
            type="text"
            placeholder="Search by name, cuisine, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              marginBottom: '15px',
              boxSizing: 'border-box'
            }}
          />

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {['all', 'michelin', 'budget', 'fine-dining'].map(filterOption => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                style={{
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '20px',
                  background: filter === filterOption ? '#667eea' : '#f0f0f0',
                  color: filter === filterOption ? 'white' : '#333',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.2s'
                }}
              >
                {filterOption === 'all' ? 'All' :
                 filterOption === 'michelin' ? '⭐ Michelin' :
                 filterOption === 'budget' ? '💰 Budget-Friendly' :
                 '👔 Fine Dining'}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
          {filteredRestaurants.map(restaurant => (
            <div
              key={restaurant.id}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                <h2 style={{ margin: '0', fontSize: '24px', color: '#333' }}>{restaurant.name}</h2>
                <span style={{ fontSize: '18px', color: '#667eea' }}>{restaurant.priceRange}</span>
              </div>

              <p style={{ margin: '0 0 8px 0', color: '#667eea', fontWeight: '500', fontSize: '14px' }}>
                {restaurant.cuisine}
              </p>

              <p style={{ margin: '0 0 12px 0', color: '#666', fontSize: '13px' }}>
                📍 {restaurant.location}
              </p>

              <p style={{ margin: '0 0 12px 0', color: '#555', fontSize: '14px', lineHeight: '1.5' }}>
                {restaurant.description}
              </p>

              <div style={{
                padding: '12px',
                background: '#f8f8f8',
                borderRadius: '8px',
                borderLeft: '3px solid #667eea'
              }}>
                <p style={{ margin: '0', fontSize: '13px', color: '#555', fontWeight: '500' }}>
                  <strong>Must Try:</strong> {restaurant.highlights}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '40px',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <p style={{ fontSize: '18px', color: '#666' }}>
              No restaurants found matching your criteria. Try adjusting your search or filters.
            </p>
          </div>
        )}

        <footer style={{ marginTop: '60px', textAlign: 'center', color: 'rgba(255,255,255,0.8)' }}>
          <p style={{ fontSize: '14px' }}>
            Price Guide: $ = Under HK$200 | $$ = HK$200-500 | $$$ = HK$500-1000 | $$$$ = Over HK$1000
          </p>
        </footer>
      </div>
    </div>
  )
}
