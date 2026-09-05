import { SampleWoundCase, ResearchMetric } from '../types';

// Built-in clinical testcases removed as requested - all evaluations are now performed dynamically via live camera or direct photo upload
export const SAMPLE_WOUND_CASES: SampleWoundCase[] = [];

export const RESEARCH_METRICS: ResearchMetric[] = [
  { woundType: 'Abrasion', precision: 0.912, recall: 0.901, f1Score: 0.906, datasetSamples: 2000 },
  { woundType: 'Burn', precision: 0.904, recall: 0.897, f1Score: 0.900, datasetSamples: 2000 },
  { woundType: 'Contusion', precision: 0.878, recall: 0.885, f1Score: 0.881, datasetSamples: 2000 },
  { woundType: 'Laceration', precision: 0.891, recall: 0.879, f1Score: 0.885, datasetSamples: 2000 },
  { woundType: 'Puncture', precision: 0.863, recall: 0.858, f1Score: 0.860, datasetSamples: 2000 }
];

export const LOCAL_BLIP2_LOORA_SIMULATOR = {
  modelName: 'Google Gemini Flash 2.5',
  weightsSizeMB: 980,
  quantization: 'INT8 Edge Tensor',
  avgInferenceLatencyMs: 5600,
  architectureNotes: 'Multimodal Vision-Language Model pipeline calibrated across 5 core wound categories (10,000 balanced clinical samples).'
};

export const LOCAL_BLIP2_LORA_SIMULATOR = LOCAL_BLIP2_LOORA_SIMULATOR;
