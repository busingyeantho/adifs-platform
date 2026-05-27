import { theme } from "@/constants/theme";
import { typography } from "@/constants/typography";
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

      <p
        style={{ color: theme.colors.primary }}
        className="font-semibold mb-3 uppercase tracking-wide"
      >
        {label}
      </p>

      <h2 className={typography.h2 + " mb-6 text-gray-900"}>
        {title}
      </h2>

      <p className={typography.body + " max-w-2xl mx-auto text-gray-600"}>
        {description}
      </p>

    </div>
  );
}