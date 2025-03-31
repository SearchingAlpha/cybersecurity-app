// components/ui/CardFeature.jsx
export default function CardFeature({ icon, title, description }) {
    return (
      <div className="relative rounded-none border border-gray-100 bg-white p-6 shadow-sm">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-none bg-[#2DD4BF]">
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="text-[#6B7280]">{description}</p>
        
        {/* Geometric corner accents */}
        <div className="absolute -top-1 -left-1 h-3 w-3 border-t border-l border-[#2DD4BF]"></div>
        <div className="absolute -top-1 -right-1 h-3 w-3 border-t border-r border-[#2DD4BF]"></div>
        <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b border-l border-[#2DD4BF]"></div>
        <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-[#2DD4BF]"></div>
      </div>
    );
  }