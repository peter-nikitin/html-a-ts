import { makeAmount, ServiceLogRecord } from '../../i-face-service-log';
import { CustomerOutstanding } from './i-face-customer-outstanding';

export const customerOutstanding = (records: ServiceLogRecord[]): CustomerOutstanding => {
  const customerOutstandingMap = records.reduce((correlationAccumulator, currentLog) => {

    const customerAmount = correlationAccumulator.get(currentLog.customer) || 0;

    correlationAccumulator.set(currentLog.customer, makeAmount(customerAmount + currentLog.paid) );

    return correlationAccumulator;
  }, new Map());

  return customerOutstandingMap as CustomerOutstanding;
};
