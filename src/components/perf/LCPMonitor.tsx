'use client';

import { useEffect } from 'react';

export function LCPMonitor() {
  useEffect(() => {
    // 确保代码只在浏览器环境中执行
    if (typeof window !== 'undefined') {
      new PerformanceObserver((list) => {
        const lcpEntry = list.getEntries().at(-1) as LargestContentfulPaintEntry | undefined;
        if (!lcpEntry?.url) return;

        const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const resEntries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        const lcpResEntry = resEntries.filter((e) => e.name === lcpEntry.url)[0];

        const docTTFB = navEntry.responseStart;

        const lcpRequestStart = Math.max(
          docTTFB,
          lcpResEntry ? lcpResEntry.requestStart : 0
        );

        const lcpResponseEnd = Math.max(
          lcpRequestStart,
          lcpResEntry ? lcpResEntry.responseEnd : 0
        );

        const lcpRenderTime = Math.max(
          lcpResponseEnd,
          lcpEntry ? lcpEntry.startTime : 0
        );

        console.log('LCP: ', lcpRenderTime, lcpEntry.element);
        console.log('document_ttfb', docTTFB);
        console.log('resource_load_delay', lcpRequestStart - docTTFB);
        console.log('resource_load_time', lcpResponseEnd - lcpRequestStart);
        console.log('element_render_delay', lcpRenderTime - lcpResponseEnd);

        performance.measure('document_ttfb', { start: 0, end: docTTFB });
        performance.measure('resource_load_delay', {
          start: docTTFB - 0.01,
          end: lcpRequestStart - 0.01,
        });
        performance.measure('resource_load_time', {
          start: lcpRequestStart,
          end: lcpResponseEnd,
        });
        performance.measure('element_render_delay', {
          start: lcpResponseEnd - 0.01,
          end: lcpRenderTime - 0.01,
        });
      }).observe({ type: 'largest-contentful-paint', buffered: true });
    }
  }, []);

  // 这个组件不需要渲染任何内容
  return null;
}

// 添加LCP相关的类型定义
interface LargestContentfulPaintEntry extends PerformanceEntry {
  renderTime: DOMHighResTimeStamp;
  loadTime: DOMHighResTimeStamp;
  size: number;
  id: string;
  url: string;
  element: Element;
}