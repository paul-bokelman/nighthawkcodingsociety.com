import React from "react";
export const FormWrapper = ({ children }: { children: React.ReactChild }) => (
  <div className="grid grid-cols-1 gap-8">{children}</div>
);

export const fs = {
  label: "uppercase font-semibold text-xs text-black/60 dark:text-white/50",
  form: "mt-1 text-black dark:text-white px-2 py-1 text-opacity-80 bg-transparent block w-full rounded-md border-2 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50",
  button:
    "mt-4 w-full flex-none bg-black hover:bg-black/80 text-white text-sm font-semibold py-2.5 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#dc6bf517] focus:ring-black/20 focus:outline-none transition-colors duration-200",
};
