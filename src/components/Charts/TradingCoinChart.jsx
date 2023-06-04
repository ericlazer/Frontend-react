import React, { useEffect, useRef } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const TradingCoinChart = () => {
  // const chartContainerRef = useRef();
  // const chart = useRef();
  // const resizeObserver = useRef();

  // useEffect(() => {
  //   chart.current = createChart(chartContainerRef.current, { 
  //       width: 400, 
  //       height: 300,
  //       layout: {
  //           backgroundColor: '#000000',
  //           textColor: '#d1d4dc',
  //       },
  //       grid: {
  //           vertLines: {
  //               color: '#334158',
  //           },
  //           horzLines: {
  //               color: '#334158',
  //           },
  //       },
  //       candlestick: {
  //           wickUpColor: '#336854',
  //           wickDownColor: '#7f323f',
  //       },
  //   });

  //   const candleSeries = chart.current.addCandlestickSeries();

  //   fetch('https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m')
  //       .then(res => res.json())
  //       .then(data => {
  //           const cdata = data.map(d => {
  //               return { time: d[0] / 1000, open: parseFloat(d[1]), high: parseFloat(d[2]), low: parseFloat(d[3]), close: parseFloat(d[4]) }
  //           });
  //           candleSeries.setData(cdata);
  //       });

  //   // Clean up on unmount
  //   return () => {
  //       chart.current.remove();
  //       resizeObserver.current.disconnect();
  //   }
  // }, []);

  // useEffect(() => {
  //   resizeObserver.current = new ResizeObserver(entries => {
  //       const { width, height } = entries[0].contentRect;
  //       chart.current.applyOptions({ width, height });
  //   });

  //   resizeObserver.current.observe(chartContainerRef.current);
  // }, []);

  // return (
  //     <div ref={chartContainerRef} style={{ width: '100%', height: '500px' }} />
  // );
}

export default TradingCoinChart;