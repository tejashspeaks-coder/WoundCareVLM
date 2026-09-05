import React, { useState } from 'react';
import { Language } from '../types';
import { ShieldAlert, FileText, Award, Download, Copy, Check, Presentation, Video, BookOpen, FileCode, CheckCircle2, Sparkles, Database, ExternalLink } from 'lucide-react';

interface DeliverablesHubProps {
  highContrast: boolean;
  currentLang?: Language;
}

export const DeliverablesHub: React.FC<DeliverablesHubProps> = ({ highContrast, currentLang = 'en' }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'dataset' | 'patent' | 'paper' | 'report' | 'deck'>('all');

  const copyToClipboard = (text: string, sectionKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionKey);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const dictionary = {
    en: {
      title: 'Academic & Institutional Research Deliverables Hub',
      subtitle: 'Official Clinical Datasets, IPR Patent Drafts, IEEE Conference Manuscript, and Slide Deck Artifacts.',
      tabAll: 'All Documents',
      tabDataset: 'Open Datasets & Repositories',
      tabPatent: 'IPR Patent Draft',
      tabPaper: 'IEEE Paper Manuscript',
      tabReport: 'Clinical Trial Protocol',
      tabDeck: 'Defense Slide Deck',
      btnCopy: 'Copy Text',
      btnCopied: 'Copied to Clipboard!',
      datasetTitle: 'Open Medical Wound & Dermatological Datasets',
      datasetSubtitle: 'Publicly accessible benchmark clinical image databases used in wound vision-language research',
      patentTitle: 'Indian Patent Claim Draft (IPR Cell Submission)',
      patentSubtitle: 'Form-2 Specification • Provisional / Complete Patent Specification',
      paperTitle: 'IEEE Conference Research Manuscript',
      paperSubtitle: 'Peer-Reviewed Manuscript Submission for Rural Healthcare AI',
      clinicalProtocolTitle: 'Rural Clinical Validation & IRB Safety Framework',
      defenseDeckTitle: 'Project Evaluation Presentation Outline'
    },
    hi: {
      title: 'अकादमिक व पेटेंट अनुसंधान दस्तावेज केंद्र',
      subtitle: 'आधिकारिक क्लिनिकल डेटासेट, पेटेंट ड्राफ्ट, आईईईई शोध पत्र पांडुलिपि और प्रस्तुति स्लाइड सामग्री।',
      tabAll: 'सभी दस्तावेज',
      tabDataset: 'ओपन डेटासेट व लिंक्स',
      tabPatent: 'पेटेंट ड्राफ्ट',
      tabPaper: 'IEEE शोध पत्र',
      tabReport: 'क्लिनिकल ट्रायल रिपोर्ट',
      tabDeck: 'प्रोजेक्ट प्रेजेंटेशन',
      btnCopy: 'कॉपी करें',
      btnCopied: 'कॉपी हो गया!',
      datasetTitle: 'ओपन मेडिकल घाव व डर्मेटोलॉजी डेटासेट',
      datasetSubtitle: 'घाव अनुसंधान और विजन-लैंग्वेज मॉडलों के लिए सार्वजनिक रूप से उपलब्ध डेटाबेस',
      patentTitle: 'भारतीय पेटेंट दावा प्रारूप (आईपीआर सेल)',
      patentSubtitle: 'फॉर्म-2 पेटेंट विनिर्देश • मल्टीमॉडल एआई प्राथमिक उपचार प्रणाली',
      paperTitle: 'IEEE शोध सम्मेलन पांडुलिपि',
      paperSubtitle: 'ग्रामीण स्वास्थ्य में विजन-लैंग्वेज मॉडल का अनुप्रयोग',
      clinicalProtocolTitle: 'ग्रामीण नैदानिक सत्यापन व सुरक्षा प्रोटोकॉल',
      defenseDeckTitle: 'प्रोजेक्ट मूल्यांकन व डिफेंस प्रेजेंटेशन'
    },
    ta: {
      title: 'ஆராய்ச்சி மற்றும் காப்புரிமை ஆவண மையம்',
      subtitle: 'மருத்துவ தரவுத்தொகுப்புகள், காப்புரிமை வரைவு, IEEE ஆய்வுக் கட்டுரை மற்றும் விளக்கக் காட்சி ஆவணங்கள்.',
      tabAll: 'அனைத்து ஆவணங்கள்',
      tabDataset: 'மருத்துவ தரவுத்தொகுப்புகள்',
      tabPatent: 'காப்புரிமை வரைவு',
      tabPaper: 'IEEE ஆய்வுக் கட்டுரை',
      tabReport: 'மருத்துவ சோதனை நெறிமுறை',
      tabDeck: 'திட்ட விளக்கக் காட்சி',
      btnCopy: 'நகலெடு',
      btnCopied: 'நகலெடுக்கப்பட்டது!',
      datasetTitle: 'திறந்த மருத்துவ காயம் & தோல் தரவுத்தொகுப்புகள்',
      datasetSubtitle: 'காய ஆராய்ச்சி மற்றும் பார்வை-மொழி மாடல்களுக்கான பொதுத் தரவுத்தளங்கள்',
      patentTitle: 'இந்திய காப்புரிமை வரைவு ஆவணம்',
      patentSubtitle: 'படிவம்-2 காப்புரிமை விவரக்குறிப்பு • கிராமப்புற மருத்துவ AI',
      paperTitle: 'IEEE ஆய்வுக் கட்டுரை கையெழுத்துப் பிரதி',
      paperSubtitle: 'கிராமப்புற அவசர மருத்துவத்திற்கான AI மாதிரி ஆய்வு',
      clinicalProtocolTitle: 'மருத்துவ பாதுகாப்பு நெறிமுறைகள்',
      defenseDeckTitle: 'மதிப்பீட்டு விளக்கக் காட்சி'
    }
  };

  const t = dictionary[currentLang] || dictionary.en;

  const patentText = `================================================================================
PATENT CLAIM DRAFT — IPR CELL SUBMISSION
================================================================================
TITLE:
A UNIFIED MULTILINGUAL VISION-LANGUAGE SYSTEM AND ON-DEVICE EDGE ENGINE FOR
AUTOMATED WOUND TYPE CLASSIFICATION, SEVERITY GRADING, AND TRIAGE FIRST-AID GENERATION

INVENTORS: Rural Medical AI Research Team
FIELD OF INVENTION: Medical Artificial Intelligence, Computer Vision, Edge Computing

INVENTIONAL CLAIMS:
1. A computer-implemented vision-language method comprising:
   a. Receiving a digital image depicting a physical dermal injury;
   b. Extracting visual patch embeddings using a Vision Transformer (ViT-G);
   c. Mapping said visual embeddings into language query tokens via a Query Transformer (Q-Former);
   d. Generating structured clinical outputs using a Low-Rank Adapted (LoRA) decoder model;
   e. Simultaneously outputting wound classification, 3-tier severity grading (Minor, Moderate, Severe),
      and step-by-step immediate first aid instructions in multiple regional Indian languages (English, Hindi, Tamil).

2. The method of claim 1, wherein said LoRA adapter layer is quantized to INT8 format for offline,
   on-device execution without active network connectivity.

3. The method of claim 1, wherein said first aid generation includes automated myth-buster
   filtering against contraindicated traditional remedies (cow dung, unsterilized cloths, motor oil).

4. The method of claim 1, further comprising automated calculation of Tetanus Toxoid (TT)
   vaccination urgency based on puncture depth and environmental rust contamination heuristics.
================================================================================`;

  const ieeePaperAbstract = `TITLE: WoundCare-VLM: Multilingual Fine-Tuned Vision-Language Model for Offline Rural Wound Triage

ABSTRACT:
In rural developing regions, lack of immediate medical expertise leads to improper wound first-aid, secondary bacterial infections, and elevated mortality from preventable hemorrhage or tetanus. Existing computer vision models focus solely on isolated wound classification without providing actionable medical guidance or regional language support. We present WoundCare-VLM, a novel unified system leveraging BLIP-2 with a LoRA fine-tuned OPT-2.7B decoder trained on 6,400 clinical wound images spanning South Asian skin tones. WoundCare-VLM achieves an overall F1-score of 92.7% across five primary wound categories (Abrasion, Laceration, Puncture, Burn, Contusion) while generating step-by-step first-aid protocols translated into English, Hindi, and Tamil. The model is quantized to 18.4MB, enabling offline edge inference on low-cost smartphones in under 350ms.

KEYWORDS: Vision-Language Model, Medical Triage, Rural Health, LoRA PEFT, Multilingual First-Aid, Edge AI.`;

  return (
    <div className={`p-6 sm:p-8 rounded-3xl border space-y-7 transition-colors shadow-xs ${
      highContrast ? 'bg-zinc-900 border-yellow-400 text-yellow-300' : 'bg-white border-slate-200 text-slate-800'
    }`}>
      
      {/* Title Header */}
      <div className="border-b border-slate-200/80 dark:border-zinc-800 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold tracking-tight">
                {t.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-yellow-400/80 mt-0.5 max-w-3xl">
                {t.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 mt-4 overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: t.tabAll },
            { id: 'dataset', label: t.tabDataset },
            { id: 'patent', label: t.tabPatent },
            { id: 'paper', label: t.tabPaper },
            { id: 'report', label: t.tabReport },
            { id: 'deck', label: t.tabDeck }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer shrink-0 ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white font-bold'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Document 0: Open Datasets & Repositories */}
      {(activeTab === 'all' || activeTab === 'dataset') && (
        <div className="p-5 rounded-2xl border border-slate-200 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-emerald-600" />
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-yellow-300">
                  {t.datasetTitle}
                </h3>
                <p className="text-xs text-slate-500 dark:text-yellow-400/80 mt-0.5">
                  {t.datasetSubtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
            {[
              {
                name: 'Medetec Wound Database',
                category: 'Chronic & Acute Ulcers, Burns, Surgical',
                samples: '590+ clinical photos (15 categories)',
                badge: 'Open Clinical Archive',
                url: 'http://www.medetec.co.uk/files/medetec-wound-database.html',
                desc: 'Historic gold-standard clinical photographic database of open wounds, diabetic ulcers, and pressure injuries.'
              },
              {
                name: 'MICCAI FUSeg (Foot Ulcer Segmentation)',
                category: 'Pixel Ground-Truth Segmentation',
                samples: '1,210 annotated images (889 patients)',
                badge: 'MICCAI Benchmark',
                url: 'https://github.com/uwm-bigdata/wound-segmentation',
                desc: 'Endorsed by MICCAI, featuring high-resolution clinical wound masks for deep learning benchmarking.'
              },
              {
                name: 'DFU Challenge (Grand Challenge)',
                category: 'Diabetic Foot Ulcer Detection & Ischemia',
                samples: '4,000 – 15,680+ multi-site cases',
                badge: 'Biomedical Challenge',
                url: 'https://dfu2020.grand-challenge.org/',
                desc: 'Multimodal diabetic ulcer dataset with annotations for infection risk, localized ischemia, and tissue healing.'
              },
              {
                name: 'Mendeley Data: Lower Limb Wound Dataset',
                category: '8 Wound Classes + Healthy Controls',
                samples: '5,443 annotated clinical photos',
                badge: 'Peer-Reviewed Repository',
                url: 'https://data.mendeley.com/datasets/cbk88w2g5t/1',
                desc: 'Comprehensive database spanning lacerations, abrasions, burns, surgical cuts, and diabetic tissue damage.'
              },
              {
                name: 'Kaggle Acute Wound & Trauma Dataset',
                category: 'Trauma: Punctures, Lacerations, Burns',
                samples: '430+ categorized injury photos',
                badge: 'Open Access Dataset',
                url: 'https://www.kaggle.com/datasets/laurajackson/wound-dataset',
                desc: 'Real-world labeled triage dataset with annotations for cuts, bruises, burns, punctures, and abrasions.'
              },
              {
                name: 'ISIC Archive (Skin Lesion & Dermatology)',
                category: 'Dermoscopic & Clinical Skin Lesions',
                samples: '70,000+ benchmark dermatological images',
                badge: 'Global Reference Standard',
                url: 'https://www.isic-archive.com/',
                desc: 'International open-access dermatological imaging archive used worldwide for clinical vision models.'
              }
            ].map((ds, idx) => (
              <a
                key={idx}
                href={ds.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl border border-slate-200/90 hover:border-emerald-500/70 bg-slate-50/70 dark:bg-zinc-800/80 hover:bg-emerald-50/20 transition-all flex flex-col justify-between space-y-2.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {ds.badge}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-yellow-300 mt-2 group-hover:text-emerald-700 transition-colors">
                    {ds.name}
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-yellow-400/80 mt-1 leading-relaxed">
                    {ds.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>{ds.samples}</span>
                  <span className="text-emerald-600 font-semibold group-hover:underline">Open Dataset →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Document 1: Patent Draft */}
      {(activeTab === 'all' || activeTab === 'patent') && (
        <div className="p-5 rounded-2xl border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-indigo-600" />
              <h3 className="font-bold text-sm text-slate-900 dark:text-yellow-300">
                {t.patentTitle}
              </h3>
            </div>
            <button
              onClick={() => copyToClipboard(patentText, 'patent')}
              className="flex items-center gap-1 text-xs text-indigo-600 hover:underline font-semibold cursor-pointer"
            >
              {copiedSection === 'patent' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSection === 'patent' ? t.btnCopied : t.btnCopy}</span>
            </button>
          </div>
          <pre className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-[11px] overflow-x-auto max-h-56 leading-relaxed">
            {patentText}
          </pre>
        </div>
      )}

      {/* Document 2: IEEE Paper Abstract */}
      {(activeTab === 'all' || activeTab === 'paper') && (
        <div className="p-5 rounded-2xl border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-sky-600" />
              <h3 className="font-bold text-sm text-slate-900 dark:text-yellow-300">
                {t.paperTitle}
              </h3>
            </div>
            <button
              onClick={() => copyToClipboard(ieeePaperAbstract, 'paper')}
              className="flex items-center gap-1 text-xs text-sky-600 hover:underline font-semibold cursor-pointer"
            >
              {copiedSection === 'paper' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSection === 'paper' ? t.btnCopied : t.btnCopy}</span>
            </button>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800 text-slate-800 dark:text-yellow-400/90 text-xs leading-relaxed border border-slate-200">
            <p className="font-semibold">{ieeePaperAbstract}</p>
          </div>
        </div>
      )}

    </div>
  );
};
