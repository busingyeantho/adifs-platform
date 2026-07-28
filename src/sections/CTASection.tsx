import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { layout } from "@/constants/layout";
import { typography } from "@/constants/typography";
import { theme } from "@/constants/theme";
import { sectionsContent } from "@/constants/sectionData";

export default function CTASection() {
  const { titleMain, titleHighlight, description, ctaText } = sectionsContent.cta;

  return (
    <section
      className={`${layout.sectionSpacing} text-white`}
      style={{ backgroundColor: theme.colors.darkBg }}
    >

      <Container>

        <div className="text-center space-y-8">

          <h2 className={typography.h2 + " text-white leading-tight"}>
            {titleMain}
            <span style={{ color: theme.colors.primary }}>{titleHighlight}</span>
          </h2>

          <p className={typography.body + " text-gray-300 max-w-2xl mx-auto"}>
            {description}
          </p>

          <div className="flex justify-center">
            <Button text={ctaText} />
          </div>

        </div>

      </Container>

    </section>
  );
}