import { useState } from 'react';
import { MapPin, Bed, Bath, Square, Heart, ArrowRight, Star } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const FeaturedProperties = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [likedProperties, setLikedProperties] = useState<Set<number>>(new Set());
  const [selectedProperty, setSelectedProperty] = useState<typeof properties[0] | null>(null);
  const [showAllProperties, setShowAllProperties] = useState(false);
  const { toast } = useToast();

  const properties = [
    {
      id: 1,
      title: "Seaside Serenity Villa",
      location: "Malibu, California",
      price: "$550,000",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=400&fit=crop",
      beds: 4,
      baths: 3,
      sqft: 2800,
      type: "Villa",
      featured: true,
      description: "Experience luxury living at its finest in this stunning Malibu villa. Featuring breathtaking ocean views, a private infinity pool, and state-of-the-art amenities. The open-concept living space seamlessly blends indoor and outdoor living, perfect for entertaining or relaxing by the sea.",
      features: [
        "Ocean View",
        "Private Pool",
        "Smart Home System",
        "Wine Cellar",
        "Chef's Kitchen",
        "Home Theater"
      ],
      yearBuilt: 2020,
      parking: "2-Car Garage",
      lotSize: "0.5 acres",
      rating: 4.9,
      reviews: 28,
      virtualTour: true,
      energyRating: "A+",
      nearbyAmenities: [
        "Beach Access",
        "Shopping Center",
        "Fine Dining",
        "Golf Course"
      ]
    },
    {
      id: 2,
      title: "Metropolitan Haven",
      location: "Downtown, New York",
      price: "$650,000",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      beds: 3,
      baths: 2,
      sqft: 1900,
      type: "Apartment",
      featured: true,
      description: "Live in the heart of Manhattan in this luxurious penthouse apartment. Floor-to-ceiling windows offer spectacular city views, while high-end finishes and smart home features provide the ultimate urban living experience. Walking distance to Central Park and premier shopping.",
      features: [
        "City Views",
        "Doorman Building",
        "Fitness Center",
        "Rooftop Terrace",
        "Concierge Service",
        "Pet Friendly"
      ],
      yearBuilt: 2018,
      parking: "Valet Parking",
      lotSize: "N/A",
      rating: 4.8,
      reviews: 42,
      virtualTour: true,
      energyRating: "A",
      nearbyAmenities: [
        "Central Park",
        "Subway Station",
        "Luxury Shopping",
        "Museums"
      ]
    },
    {
      id: 3,
      title: "Rustic Retreat Cottage",
      location: "Aspen, Colorado",
      price: "$350,000",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&fit=crop",
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: "Cottage",
      featured: true,
      description: "Escape to this charming mountain cottage in Aspen. Perfect for ski enthusiasts or those seeking a peaceful mountain getaway. Features include a cozy fireplace, rustic wood finishes, and stunning mountain views. Close to ski slopes and hiking trails.",
      features: [
        "Mountain Views",
        "Fireplace",
        "Ski Storage",
        "Hot Tub",
        "Heated Floors",
        "Wood Deck"
      ],
      yearBuilt: 2015,
      parking: "2 Outdoor Spaces",
      lotSize: "0.25 acres",
      rating: 4.7,
      reviews: 35,
      virtualTour: true,
      energyRating: "B+",
      nearbyAmenities: [
        "Ski Resort",
        "Hiking Trails",
        "Local Shops",
        "Restaurants"
      ]
    },
    {
      id: 4,
      title: "Urban Luxury Penthouse",
      location: "Miami, Florida",
      price: "$890,000",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
      beds: 3,
      baths: 3,
      sqft: 2200,
      type: "Penthouse",
      featured: false,
      description: "Experience the epitome of luxury living in this Miami penthouse. Featuring panoramic ocean views, designer finishes, and a private rooftop terrace. The open floor plan and floor-to-ceiling windows create a bright, airy atmosphere perfect for modern living.",
      features: [
        "Ocean Views",
        "Private Terrace",
        "Smart Home",
        "Private Elevator",
        "Wine Room",
        "Spa Bathroom"
      ],
      yearBuilt: 2021,
      parking: "2 Reserved Spaces",
      lotSize: "N/A",
      rating: 5.0,
      reviews: 15,
      virtualTour: true,
      energyRating: "A+",
      nearbyAmenities: [
        "Beach",
        "Marina",
        "Nightlife",
        "Shopping"
      ]
    },
    {
      id: 5,
      title: "Mountain View Estate",
      location: "Boulder, Colorado",
      price: "$720,000",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
      beds: 5,
      baths: 4,
      sqft: 3500,
      type: "Estate",
      featured: false,
      description: "This magnificent estate offers unparalleled mountain views and luxury living. The property features expansive outdoor living spaces, a gourmet kitchen, and high-end finishes throughout. Perfect for those seeking privacy and natural beauty.",
      features: [
        "Mountain Views",
        "Guest House",
        "Home Gym",
        "Solar Panels",
        "Garden",
        "Media Room"
      ],
      yearBuilt: 2017,
      parking: "3-Car Garage",
      lotSize: "2.5 acres",
      rating: 4.9,
      reviews: 23,
      virtualTour: true,
      energyRating: "A",
      nearbyAmenities: [
        "Hiking Trails",
        "Parks",
        "Schools",
        "Downtown"
      ]
    },
    {
      id: 6,
      title: "Modern Lakefront Home",
      location: "Lake Tahoe, California",
      price: "$1,200,000",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
      beds: 4,
      baths: 3,
      sqft: 2800,
      type: "Lakefront",
      featured: true,
      description: "Stunning lakefront property with direct water access and a private dock. Modern architecture meets natural beauty with walls of glass showcasing lake views. Features include a gourmet kitchen, home automation, and outdoor entertainment areas.",
      features: [
        "Lake Views",
        "Private Dock",
        "Boat Slip",
        "Outdoor Kitchen",
        "Fire Pit",
        "Game Room"
      ],
      yearBuilt: 2019,
      parking: "2-Car Garage",
      lotSize: "0.75 acres",
      rating: 4.8,
      reviews: 31,
      virtualTour: true,
      energyRating: "A",
      nearbyAmenities: [
        "Lake Access",
        "Ski Resort",
        "Marina",
        "Restaurants"
      ]
    }
  ];

  const handleFavoriteToggle = (propertyId: number, propertyTitle: string) => {
    const newLikedProperties = new Set(likedProperties);
    if (likedProperties.has(propertyId)) {
      newLikedProperties.delete(propertyId);
      toast({
        title: "Removed from favorites",
        description: `${propertyTitle} has been removed from your favorites.`,
      });
    } else {
      newLikedProperties.add(propertyId);
      toast({
        title: "Added to favorites",
        description: `${propertyTitle} has been added to your favorites.`,
      });
    }
    setLikedProperties(newLikedProperties);
  };

  const handleQuickView = (property: typeof properties[0]) => {
    toast({
      title: "Quick View",
      description: `Opening quick view for ${property.title}`,
    });
  };

  const handleViewDetails = (property: typeof properties[0]) => {
    setSelectedProperty(property);
  };

  const handleScheduleViewing = () => {
    setSelectedProperty(null);
    
    toast({
      title: "Viewing Scheduled",
      description: "A representative will contact you shortly to confirm your viewing appointment.",
    });

    setTimeout(() => {
      // Find the specific CTA section with the Schedule Consultation button
      const ctaSection = document.querySelector('#services .glass-card-dark .flex.flex-col.sm\\:flex-row.gap-4.justify-center');
      if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 500);
  };

  const handleVirtualTour = () => {
    toast({
      title: "Virtual Tour",
      description: "Launching virtual tour experience...",
    });
  };

  const handleContactAgent = () => {
    setSelectedProperty(null);
    
    toast({
      title: "Contact Agent",
      description: "Connecting you with our property specialist...",
    });

    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  const handleViewAllProperties = () => {
    setShowAllProperties(true);
    toast({
      title: "All Properties",
      description: "Showing all available properties...",
    });
  };

  const handleExploreAllProperties = () => {
    setShowAllProperties(true);
    toast({
      title: "Explore Properties",
      description: "Showing comprehensive property listings...",
    });
  };

  // Filter properties based on showAllProperties state
  const displayedProperties = showAllProperties ? properties : properties.filter(property => property.featured);

  return (
    <section id="properties" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {showAllProperties ? 'All' : 'Featured'} <span className="text-gradient">Properties</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {showAllProperties 
              ? 'Browse our complete collection of exceptional properties that offer the perfect blend of luxury, comfort, and location.'
              : 'Explore our handpicked selection of exceptional properties that offer the perfect blend of luxury, comfort, and location.'}
          </p>
          {!showAllProperties && (
            <button 
              className="btn-secondary"
              onClick={handleViewAllProperties}
            >
              View All Properties
            </button>
          )}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProperties.map((property, index) => (
            <div
              key={property.id}
              className="property-card perspective-1000"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(property.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Property Image */}
              <div className="relative overflow-hidden rounded-xl mb-6 group">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                {/* Featured Badge */}
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-electric-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                
                {/* Favorite Button */}
                <button 
                  className={`absolute top-4 right-4 w-10 h-10 glass-card rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 ${
                    likedProperties.has(property.id) ? 'bg-red-500/20' : ''
                  }`}
                  onClick={() => handleFavoriteToggle(property.id, property.title)}
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors ${
                      likedProperties.has(property.id) ? 'text-red-500 fill-red-500' : 'text-white'
                    }`} 
                  />
                </button>
                
                {/* Quick View Button */}
                <button 
                  className="absolute bottom-4 right-4 btn-primary px-4 py-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  onClick={() => handleQuickView(property)}
                >
                  Quick View
                </button>
              </div>

              {/* Property Details */}
              <div className="space-y-4">
                {/* Type and Location */}
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-semibold bg-cyan-400/10 px-3 py-1 rounded-full">
                    {property.type}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>
                </div>

                {/* Title and Price */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                    {property.title}
                  </h3>
                  <div className="text-2xl font-bold text-gradient">
                    {property.price}
                  </div>
                </div>

                {/* Property Features */}
                <div className="flex items-center justify-between text-gray-300 text-sm border-t border-gray-700 pt-4">
                  <div className="flex items-center space-x-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="w-4 h-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group/btn ${
                    hoveredCard === property.id
                      ? 'btn-primary'
                      : 'glass-card text-white hover:bg-white/20'
                  }`}
                  onClick={() => handleViewDetails(property)}
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* 3D Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-500/0 to-purple-500/0 group-hover:from-electric-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {!showAllProperties && (
          <div className="text-center mt-16">
            <button 
              className="btn-primary px-8 py-4 text-lg flex items-center space-x-2 mx-auto group"
              onClick={handleExploreAllProperties}
            >
              <span>Explore All Properties</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>

      {/* Property Details Dialog */}
      <Dialog open={!!selectedProperty} onOpenChange={() => setSelectedProperty(null)}>
        <DialogContent className="max-w-4xl bg-navy-800/95 backdrop-blur-lg border-electric-500/20 animate-in fade-in-0 zoom-in-95 duration-500 ease-out max-h-[90vh] overflow-y-auto">
          <DialogHeader className="animate-in slide-in-from-top-5 duration-500 fixed top-0 left-0 right-0 bg-navy-800/95 backdrop-blur-lg z-10 p-6 border-b border-electric-500/20">
            <DialogTitle className="text-3xl font-bold text-gradient">
              {selectedProperty?.title}
            </DialogTitle>
            <DialogDescription className="text-gray-300 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              {selectedProperty?.location}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-8 animate-in slide-in-from-bottom-5 duration-500 mt-24">
            {/* Main Image and Price Section */}
            <div className="relative rounded-xl overflow-hidden group animate-in fade-in-0 duration-700">
              <img
                src={selectedProperty?.image}
                alt={selectedProperty?.title}
                className="w-full h-[400px] object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
              
              {/* Price Tag */}
              <div className="absolute bottom-6 left-6 space-y-2">
                <div className="text-4xl font-bold text-gradient">
                  {selectedProperty?.price}
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">{selectedProperty?.rating}</span>
                  <span className="text-sm">({selectedProperty?.reviews} reviews)</span>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="absolute top-6 right-6 flex gap-3">
                <button 
                  onClick={() => handleVirtualTour()}
                  className="btn-primary py-2 px-4 text-sm"
                >
                  Virtual Tour
                </button>
                <button 
                  onClick={() => selectedProperty && handleFavoriteToggle(selectedProperty.id, selectedProperty.title)}
                  className={`glass-card w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    selectedProperty && likedProperties.has(selectedProperty.id) ? 'bg-red-500/20' : ''
                  }`}
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      selectedProperty && likedProperties.has(selectedProperty.id) 
                        ? 'text-red-500 fill-red-500' 
                        : 'text-white'
                    }`} 
                  />
                </button>
              </div>
            </div>

            {/* Property Details Grid */}
            <div className="grid md:grid-cols-2 gap-8 animate-in fade-in-0 duration-700 delay-200">
              {/* Left Column - Main Details */}
              <div className="space-y-6">
                <div className="glass-card-dark p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gradient">Property Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-gray-400 text-sm">Property Type</p>
                      <p className="text-white font-medium">{selectedProperty?.type}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-400 text-sm">Year Built</p>
                      <p className="text-white font-medium">{selectedProperty?.yearBuilt}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-400 text-sm">Lot Size</p>
                      <p className="text-white font-medium">{selectedProperty?.lotSize}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-400 text-sm">Parking</p>
                      <p className="text-white font-medium">{selectedProperty?.parking}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-400 text-sm">Energy Rating</p>
                      <p className="text-white font-medium">{selectedProperty?.energyRating}</p>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="glass-card-dark p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gradient">Key Features</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProperty?.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-electric-500 to-purple-500" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Additional Info */}
              <div className="space-y-6">
                {/* Description */}
                <div className="glass-card-dark p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gradient">Description</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProperty?.description}
                  </p>
                </div>

                {/* Nearby Amenities */}
                <div className="glass-card-dark p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gradient">Nearby Amenities</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProperty?.nearbyAmenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                        <span className="text-gray-300">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-in fade-in-0 duration-700 delay-300">
              <button 
                onClick={handleScheduleViewing}
                className="btn-primary flex-1 py-4 text-lg"
              >
                Schedule Viewing
              </button>
              <button 
                onClick={handleContactAgent}
                className="btn-secondary flex-1 py-4 text-lg"
              >
                Contact Agent
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FeaturedProperties;