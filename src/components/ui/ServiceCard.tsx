type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <h3 className="text-2xl font-semibold mb-4 text-gray-900">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  );
}