import React from "react";
import { UserProps } from "@/interfaces";

interface UserCardProps {
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 mb-1">Email: {email}</p>
      <p className="text-gray-600 text-sm">
        Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
