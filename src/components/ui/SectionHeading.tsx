type SectionHeadingProps = {
  label: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">

      <p className="text-[#F28026] font-semibold mb-3 uppercase tracking-wide">
        {label}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        {title}
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>

    </div>
  );
}