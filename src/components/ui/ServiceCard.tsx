// Reusable service card component.
// Used for displaying scalable service data
// across homepage and future services pages.

type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="p-6 rounded-xl 
    bg-white 
    shadow-md 
    transition-all
    duration-300
    hover:shadow-2xl 
    hover:-translate-y-2">

      <h3 className="text-2xl font-semibold mb-4 text-gray-900">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  );
}