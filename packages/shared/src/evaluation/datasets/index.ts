// Embedded benchmark datasets (spec §22). Add new datasets here to ship with the app.
import type { EmbeddedDataset } from '../datasets.ts';
import { alphaDeskAgentV1Dataset } from './alphadesk-agent-v1.ts';
import { alphaDeskAgentV1ZhDataset } from './alphadesk-agent-v1-zh.ts';
import { deepResearchGoldV1Dataset } from './deep-research-gold-v1.ts';

export const embeddedDatasets: EmbeddedDataset[] = [
  {
    id: 'alphadesk-agent-v1',
    version: '1.0.0',
    load: () => alphaDeskAgentV1Dataset,
  },
  {
    id: 'alphadesk-agent-v1-zh',
    version: '1.0.0',
    load: () => alphaDeskAgentV1ZhDataset,
  },
  {
    id: 'deep-research-gold-v1',
    version: '1.0.0',
    load: () => deepResearchGoldV1Dataset,
  },
];
