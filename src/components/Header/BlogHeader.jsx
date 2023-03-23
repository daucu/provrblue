import React from "react";

function BlogHeader() {
  return (
    <div className="bg-white border-b-2 p-4 shadow-md">
      <div className="flex items-end justify-end">
        <div className="w-1/2 flex items-end justify-end">
          <div className="text-[20px] text-blue-500 w-[33%]">Home</div>
          <div className="text-[20px] text-blue-500 w-[33%]">
            Virtual Reality
          </div>
          <div className="text-[20px] text-blue-500 w-[33%]">Metaverse</div>
          <div className="text-[20px] text-blue-500 w-[33%]">
            Property Branding
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHeader;
