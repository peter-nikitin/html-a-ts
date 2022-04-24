import { ServiceLogRecord } from '../../i-face-service-log';
import { ServiceCenterTotals, Totals } from './i-face-service-center-totals';


export const serviceCenterTotals = (records: ServiceLogRecord[]):ServiceCenterTotals => {

  const customerOutstandingMap = records.reduce((correlationAccumulator, currentLog) => {

    const customerAmount: Totals = correlationAccumulator.get(currentLog.workshop) || {
      totalIncome: 0,
      vehicleCount: 0
    };

    correlationAccumulator.set(currentLog.workshop, {
      totalIncome: customerAmount.totalIncome +  currentLog.paid,
      vehicleCount: customerAmount.vehicleCount + 1
    } );

    return correlationAccumulator;
  }, new Map());

  return customerOutstandingMap as ServiceCenterTotals;
};
