import { expect } from 'chai';
import { ServiceLogRecords } from '../../i-face-service-log';
import { simpleLog } from '../../test-mock/service-log';
import { CustomerOutstandingsReportBuilder } from './customer-outstanding';

const serviceLogsData = new ServiceLogRecords(simpleLog);

describe('сбор статистики по стоимости обслуживания автомобилей от возраста', () => {
  it('MY Variant: собирает статистику из единственной записи для прошлогодней машины', () => {
    const result = serviceLogsData.report(new CustomerOutstandingsReportBuilder());

    expect(result).to.deep.eq({ 'c1': 1 });
  });
});
