import { getHistoricalRates, Config, Instrument, Timeframe, Format, Price } from 'dukascopy-node';

const config: Config = {
  instrument: Instrument.eurusd,
  dates: {
    from: new Date('2021-03-30'),
    to: new Date('2021-03-31')
  },
  timeframe: Timeframe.d1,
  format: Format.json,
  priceType: Price.bid
};

getHistoricalRates(config).then(data => console.log(data));