import connectDB from './mongodb';
import Service from './models/Service';
import Staff from './models/Staff';

export const seedServices = async () => {
  const services = [
    {
      name: 'Classic Haircut',
      description: 'Professional haircut with precision styling and finishing',
      price: 35,
      duration: 30,
      category: 'Haircut',
      features: ['Precision cutting', 'Style consultation', 'Hair wash', 'Professional styling']
    },
    {
      name: 'Beard Grooming',
      description: 'Expert beard trim, shape, and conditioning',
      price: 25,
      duration: 20,
      category: 'Beard',
      features: ['Beard trimming', 'Shape design', 'Hot towel', 'Beard oil']
    },
    {
      name: 'Hair Coloring',
      description: 'Premium hair coloring and treatment services',
      price: 65,
      duration: 60,
      category: 'Coloring',
      features: ['Color consultation', 'Premium products', 'Root touch-up', 'Color sealing']
    },
    {
      name: 'Royal Shave',
      description: 'Traditional straight razor shave experience',
      price: 40,
      duration: 30,
      category: 'Shave',
      features: ['Hot towel prep', 'Straight razor', 'After-shave', 'Face massage']
    },
    {
      name: 'Hair Treatment',
      description: 'Specialized hair treatments for health and vitality',
      price: 45,
      duration: 45,
      category: 'Treatment',
      features: ['Deep conditioning', 'Scalp treatment', 'Hair repair', 'Moisturizing']
    },
    {
      name: 'Complete Package',
      description: 'Full grooming experience with all premium services',
      price: 85,
      duration: 90,
      category: 'Package',
      features: ['Haircut & style', 'Beard grooming', 'Facial treatment', 'Head massage']
    }
  ];

  await Service.deleteMany({});
  await Service.insertMany(services);
  console.log('Services seeded successfully!');
};

export const seedStaff = async () => {
  const staffMembers = [
    {
      name: 'Michael Rodriguez',
      role: 'Head Barber & Owner',
      bio: 'With over 12 years of experience in men\'s grooming, Michael specializes in classic cuts and modern styles.',
      image: '/images/staff/michael.jpg',
      experience: 12,
      specialties: ['Classic Cuts', 'Beard Styling', 'Traditional Shaves'],
      socialLinks: {
        instagram: 'https://instagram.com/michael_barber'
      }
    },
    {
      name: 'James Wilson',
      role: 'Senior Stylist',
      bio: 'James brings 8 years of expertise in contemporary hairstyles and hair coloring.',
      image: '/images/staff/james.jpg',
      experience: 8,
      specialties: ['Modern Styles', 'Hair Coloring', 'Texture Cutting'],
      socialLinks: {
        instagram: 'https://instagram.com/james_stylist'
      }
    },
    {
      name: 'David Chen',
      role: 'Beard Specialist',
      bio: 'David is our go-to expert for all things beard-related with 6 years of experience.',
      image: '/images/staff/david.jpg',
      experience: 6,
      specialties: ['Beard Grooming', 'Mustache Styling', 'Facial Hair Design'],
      socialLinks: {
        instagram: 'https://instagram.com/david_beardmaster'
      }
    }
  ];

  await Staff.deleteMany({});
  await Staff.insertMany(staffMembers);
  console.log('Staff seeded successfully!');
};

export const seedAll = async () => {
  try {
    await connectDB();
    await seedServices();
    await seedStaff();
    console.log('All data seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

// Run if called directly
if (require.main === module) {
  seedAll();
}