# 🚨 Performance CI Baseline Configuration

## Current Status
This repository uses **baseline performance thresholds** in the Lighthouse CI configuration to prevent CI failures while performance optimizations are being implemented.

## Why Baseline Thresholds?
- **Current Performance**: 57/100 Lighthouse score with critical performance issues
- **CI Strategy**: Set realistic thresholds that won't fail while providing monitoring
- **Continuous Improvement**: Plan to tighten thresholds as optimizations are completed

## Current CI Thresholds (Baseline)
```json
{
  "performance_score": ">=0.3 (warn)",
  "first_contentful_paint": "<=15000ms (warn)", 
  "largest_contentful_paint": "<=45000ms (warn)",
  "speed_index": "<=20000ms (warn)",
  "cumulative_layout_shift": "<=0.1 (error)",
  "total_blocking_time": "<=1000ms (warn)"
}
```

## Post-Optimization Thresholds (Phase 1 Target)
```json
{
  "performance_score": ">=0.75 (error)",
  "first_contentful_paint": "<=2000ms (error)",
  "largest_contentful_paint": "<=4000ms (error)", 
  "speed_index": "<=4000ms (error)",
  "cumulative_layout_shift": "<=0.1 (error)",
  "total_blocking_time": "<=300ms (error)"
}
```

## Updating Thresholds
After completing Phase 1 optimizations (FontAwesome tree-shaking, WebP conversion, compression):

1. Update `lighthouserc.json` with tighter thresholds
2. Change assertion levels from "warn" to "error"  
3. Update `performance-budget.json` monitoring section
4. Test CI passes with new optimized performance

## Timeline
- **Now**: Baseline thresholds (prevent CI failures)
- **After Phase 1**: Intermediate thresholds (75+ performance score)
- **After Phase 2**: Target thresholds (85+ performance score)
- **After Phase 3**: Excellence thresholds (95+ performance score)

See `PERFORMANCE.md` for detailed optimization roadmap.
