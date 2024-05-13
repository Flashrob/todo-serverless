"use client";

import React from "react";

type InputProps = {
  title: string;
  setTitle: (title: string) => void;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ title, setTitle }, ref) => (
    <>
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Title
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Title"
            ref={ref}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
    </>
  )
);
