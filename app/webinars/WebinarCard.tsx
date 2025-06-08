"use client";

import React from "react";
import { Webinar } from "./types";

interface WebinarCardProps {
  webinar: Webinar;
  onViewDetails: (id: number) => void;
}

export default function WebinarCard({ webinar, onViewDetails }: WebinarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
          {webinar.description && (
            <p className="text-gray-500 mb-6 line-clamp-2">
              {webinar.description}
            </p>
          )}
        </div>
        <button
          onClick={() => onViewDetails(webinar.id)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
