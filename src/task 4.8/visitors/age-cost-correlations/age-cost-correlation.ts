import { makeAmount, ServiceLogRecord } from '../../i-face-service-log';
import { AgeCostCorrelation } from './i-face-age-cost-correlations';

export const ageCostCorrelation = (records: ServiceLogRecord[]): AgeCostCorrelation => {
  const correlation = new Map();

  records.reduce((correlationAccumulator, currentLog) => {
    const ageOfCar = new Date().getFullYear() - currentLog.year;

    const amountOfThatAge = correlationAccumulator.get(ageOfCar) || 0;

    correlationAccumulator.set(ageOfCar, makeAmount(amountOfThatAge + currentLog.paid) );

    return correlationAccumulator;
  }, correlation);

  return correlation as AgeCostCorrelation;
};
