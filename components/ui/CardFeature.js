// components/ui/CardFeature.jsx
export default function CardFeature({ icon, title, description }) {
    return (
      <div className="group rounded-xl border border-base-content/10 bg-base p-6 transition-all hover:border-primary/20 hover:shadow-md">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20">
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-base-content/70">{description}</p>
      </div>
    );
  }