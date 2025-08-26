#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const BUDGET_FILE = './performance-budget.json';
const RESULTS_FILE = './lighthouse-current.json';

function checkBudget() {
  try {
    // Read budget and results
    const budget = JSON.parse(fs.readFileSync(BUDGET_FILE, 'utf8'));
    const results = JSON.parse(fs.readFileSync(RESULTS_FILE, 'utf8'));

    console.log('🎯 PERFORMANCE BUDGET CHECK');
    console.log('============================');
    console.log('');

    // Performance Score
    const score = Math.round(results.categories.performance.score * 100);
    const budgetScore = budget.monitoring.alerts.performance_score_threshold;
    console.log(`📊 Performance Score: ${score}/100 (Budget: ${budgetScore}/100) ${score >= budgetScore ? '✅' : '❌'}`);
    
    // Core Web Vitals
    const metrics = [
      {
        name: 'First Contentful Paint',
        current: results.audits['first-contentful-paint'].numericValue / 1000,
        budget: parseFloat(budget.budget.firstContentfulPaint.replace('s', '')),
        unit: 's'
      },
      {
        name: 'Largest Contentful Paint', 
        current: results.audits['largest-contentful-paint'].numericValue / 1000,
        budget: parseFloat(budget.budget.largestContentfulPaint.replace('s', '')),
        unit: 's'
      },
      {
        name: 'Cumulative Layout Shift',
        current: results.audits['cumulative-layout-shift'].numericValue,
        budget: budget.budget.cumulativeLayoutShift,
        unit: ''
      },
      {
        name: 'Total Blocking Time',
        current: results.audits['total-blocking-time'].numericValue,
        budget: parseFloat(budget.budget.totalBlockingTime.replace('ms', '')),
        unit: 'ms'
      }
    ];

    console.log('');
    console.log('🌟 Core Web Vitals:');
    let budgetPassed = score >= budgetScore;

    metrics.forEach(metric => {
      const passed = metric.current <= metric.budget;
      budgetPassed = budgetPassed && passed;
      
      console.log(`   ${metric.name}: ${metric.current.toFixed(metric.unit === 's' ? 1 : 0)}${metric.unit} (Budget: ${metric.budget}${metric.unit}) ${passed ? '✅' : '❌'}`);
    });

    // Asset size analysis
    console.log('');
    console.log('📦 Asset Analysis:');
    const totalSize = results.audits['network-requests'].details.items.reduce((sum, item) => sum + (item.transferSize || 0), 0);
    const budgetSizeBytes = parseFloat(budget.budget.totalSize.replace('MB', '')) * 1024 * 1024;
    
    console.log(`   Total Size: ${(totalSize / 1024 / 1024).toFixed(1)}MB (Budget: ${budget.budget.totalSize}) ${totalSize <= budgetSizeBytes ? '✅' : '❌'}`);

    // Largest assets
    console.log('');
    console.log('🔍 Top 5 Largest Assets:');
    results.audits['network-requests'].details.items
      .sort((a, b) => (b.transferSize || 0) - (a.transferSize || 0))
      .slice(0, 5)
      .forEach((item, index) => {
        const size = Math.round((item.transferSize || 0) / 1024);
        const filename = item.url.split('/').pop() || item.url;
        console.log(`   ${index + 1}. ${filename} (${size} KB)`);
      });

    // Summary
    console.log('');
    console.log('📋 SUMMARY:');
    if (budgetPassed && totalSize <= budgetSizeBytes) {
      console.log('✅ All performance budgets are within limits!');
      console.log('');
      console.log('🎉 Great job! Your site meets the performance standards.');
      process.exit(0);
    } else {
      console.log('❌ Performance budget exceeded!');
      console.log('');
      console.log('🔧 Recommended actions:');
      
      if (score < budgetScore) {
        console.log('   - Focus on Core Web Vitals optimization');
      }
      if (totalSize > budgetSizeBytes) {
        console.log('   - Reduce asset sizes (images, JS, CSS)');
        console.log('   - Enable compression (gzip/brotli)');
        console.log('   - Implement lazy loading');
      }
      
      console.log('   - Check performance-budget.json for detailed optimization roadmap');
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Error checking performance budget:', error.message);
    console.log('');
    console.log('Make sure to run a Lighthouse audit first:');
    console.log('npm run perf:audit');
    process.exit(1);
  }
}

checkBudget();
