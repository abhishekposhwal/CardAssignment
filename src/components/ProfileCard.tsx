import React from 'react';
import { Mail, MapPin, Phone, Calendar } from 'lucide-react';

type User = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
  };
  dob: {
    date: string;
  };
  picture: {
    large: string;
  };
};

type ProfileCardProps = {
  user: User | null;
  isLoading: boolean;
  error: string | null;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ user, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="min-h-[400px] w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="absolute -bottom-16 inset-x-0 flex justify-center">
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
      
      <div className="pt-20 pb-8 px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-500 flex items-center justify-center gap-1 mt-2">
            <MapPin size={16} />
            {user.location.city}, {user.location.country}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-600">
            <Mail className="w-5 h-5 text-blue-500" />
            <span>{user.email}</span>
          </div>
          
          <div className="flex items-center gap-3 text-gray-600">
            <Phone className="w-5 h-5 text-blue-500" />
            <span>{user.phone}</span>
          </div>
          
          <div className="flex items-center gap-3 text-gray-600">
            <Calendar className="w-5 h-5 text-blue-500" />
            <span>{new Date(user.dob.date).toLocaleDateString()}</span>
          </div>
          
          <div className="flex items-center gap-3 text-gray-600">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span>
              {user.location.street.number} {user.location.street.name},
              {user.location.city}, {user.location.state}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;