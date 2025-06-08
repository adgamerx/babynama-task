"use client";

import { Webinar } from "./types";
import Image from "next/image";

const webinarsData: Webinar[] = [
  {
    id: 1,
    title: "Essential Baby Care Tips for New Parents",
    speaker: "Dr. Sumitra Meena",
    date: "2024-02-25T14:00:00Z",
    description: "Learn fundamental baby care techniques and best practices for new parents."
  },
  {
    id: 2,
    title: "Nutrition During First Year",
    speaker: "Dr. Anjali Sharma",
    date: "2024-03-01T15:30:00Z",
    description: "Understanding your baby's nutritional needs during their crucial first year."
  },
  {
    id: 3,
    title: "Sleep Training Methods",
    speaker: "Dr. Priya Patel",
    date: "2024-03-05T13:00:00Z",
    description: "Effective sleep training techniques for infants and toddlers."
  }
];

export default function WebinarsPage() {
  const handleViewDetails = (id: number) => {
    console.log(`Viewing details for webinar ID: ${id}`);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <Image
          src="https://babynama.com/_next/static/media/logo-light.f8d530c6.svg"
          alt="Babynama Logo"
          width={150}
          height={40}
          style={{ height: 'auto' }}
          priority
          className="mx-auto mb-8"
        />
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Upcoming Webinars
        </h1>
        <p className="text-lg text-gray-600">
          Join our expert pediatricians for informative sessions on baby care
        </p>
      </div>

      {/* Webinars Grid */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {webinarsData.map((webinar) => (
          <div
            key={webinar.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600">
                    {new Date(webinar.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(webinar.date).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {webinar.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  Speaker: {webinar.speaker}
                </p>
                <p className="text-gray-500 mb-6 line-clamp-2">
                  {webinar.description}
                </p>
              </div>
              <button
                onClick={() => handleViewDetails(webinar.id)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
