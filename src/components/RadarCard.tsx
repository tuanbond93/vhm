'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { RadarItem } from '@/lib/radar-data';
import { Analytics } from '@/lib/analytics';

interface RadarCardProps {
  item: RadarItem;
}

export function RadarCard({ item }: RadarCardProps) {
  const getVerdictStyle = (verdict: string) => {
    switch (verdict) {
      case 'ADOPT':
        return 'bg-[#E8F5F2] text-[#167A65] border-[#BDE3DA]';
      case 'TEST':
        return 'bg-[#EBF2FE] text-[#235789] border-[#C5D8F9]';
      case 'WATCH':
        return 'bg-[#FEF5E7] text-[#C47A16] border-[#F9E2C1]';
      case 'SKIP':
        return 'bg-[#FDF2F2] text-[#B5473C] border-[#F8D7D7]';
      default:
        return 'bg-[#F7F8F5] text-[#435164] border-[#DCE2E7]';
    }
  };

  return (
    <div className="card-surface p-6 sm:p-8 flex flex-col justify-between space-y-6 group hover:border-[#2F6FED] transition-all">
      <div className="space-y-4">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#14202B] text-white">
            {item.type}
          </span>
          <div className="flex items-center gap-2">
            <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full border ${getVerdictStyle(item.verdict)}`}>
              {item.verdictLabel}
            </span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <Link
          href={`/radar/${item.slug}`}
          onClick={() => Analytics.radarArticleView(item.id, item.verdict, item.evidenceTier)}
          className="block group-hover:text-[#2F6FED] transition-colors"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-[#14202B] leading-tight mb-2">
            {item.title}
          </h3>
        </Link>

        <p className="text-[#435164] text-xs sm:text-sm leading-relaxed">
          {item.subtitle}
        </p>

        {/* Key Operator Insight */}
        <div className="bg-[#F7F8F5] border border-[#DCE2E7] border-l-4 border-l-[#235789] p-3.5 rounded-xl text-xs text-[#14202B] italic">
          &ldquo;{item.operatorKeyInsight}&rdquo;
        </div>
      </div>

      <div className="pt-4 border-t border-[#DCE2E7] space-y-4">
        {/* Decision Metadata Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-[#F7F8F5] p-3 rounded-xl border border-[#E9EFF4]">
          <div>
            <span className="text-[#667085] block text-[10px] uppercase">EVIDENCE LEVEL:</span>
            <span className="font-semibold text-[#14202B]">{item.evidenceTier}</span>
          </div>
          <div>
            <span className="text-[#667085] block text-[10px] uppercase">CONFIDENCE:</span>
            <span className="font-semibold text-[#167A65]">{item.confidence}</span>
          </div>
        </div>

        {/* Topics */}
        <div className="flex flex-wrap gap-1.5">
          {item.topics.map((t) => (
            <span key={t} className="text-[11px] font-mono text-[#667085] bg-white border border-[#DCE2E7] px-2 py-0.5 rounded">
              #{t}
            </span>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-mono text-[#667085]">{item.readTime}</span>
          <Link
            href={`/radar/${item.slug}`}
            onClick={() => Analytics.radarCtaClick(item.id, 'Đọc phân tích', '/radar')}
            className="inline-flex items-center gap-1.5 bg-[#2F6FED] hover:bg-[#1D5BD8] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"
          >
            <span>Đọc phân tích</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
