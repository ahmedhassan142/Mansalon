// components/BarberOpenStreetMap.tsx
'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default icons in Next.js - IMPORTANT!
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
  iconUrl: '/leaflet/images/marker-icon.png',
  shadowUrl: '/leaflet/images/marker-shadow.png',
})

interface BarberOpenStreetMapProps {
  position: [number, number]
  zoom?: number
  salonName?: string
  address?: string
  phone?: string
}

const BarberOpenStreetMap = ({ 
  position, 
  zoom = 15, 
  salonName = "Gent's Grooming Salon",
  address = "123 Barber Street, Downtown District, City, State 12345",
  phone = "(555) 123-4567"
}: BarberOpenStreetMapProps) => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        {/* OpenStreetMap Tile Layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Salon Marker */}
        <Marker position={position}>
          <Popup>
            <div className="p-3">
              <h3 className="font-bold text-lg text-amber-700 mb-1">{salonName}</h3>
              <p className="text-gray-700 mb-1">{address}</p>
              <p className="text-gray-700 mb-3">{phone}</p>
              <div className="space-y-2">
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-blue-500 text-white text-center py-2 px-4 rounded hover:bg-blue-600 transition-colors text-sm"
                >
                  Get Google Directions
                </a>
                <a 
                  href={`http://maps.apple.com/?daddr=${position[0]},${position[1]}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-black text-white text-center py-2 px-4 rounded hover:bg-gray-800 transition-colors text-sm"
                >
                  Get Apple Directions
                </a>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default BarberOpenStreetMap