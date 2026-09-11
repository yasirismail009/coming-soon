import CompareToolPage, { compareToolMetadata } from '@/components/CompareToolPage';
import { getToolComparison } from '@/lib/competitors';
import { FAQ_BY_EXPORT } from '@/lib/structuredData';

const tool = getToolComparison('databox');

export const metadata = compareToolMetadata(tool);

export default function DataboxComparePage() {
  return <CompareToolPage tool={tool} faqs={FAQ_BY_EXPORT[tool.faqExport]} />;
}
