import { expect } from 'chai';
import { ServiceLogRecords } from '../../i-face-service-log';
import { simpleLog } from '../../test-mock/service-log';
import { AgeCostCorrelationReportBuilder } from './age-cost-correlation';

const serviceLogsData = new ServiceLogRecords(simpleLog);

describe('сбор статистики по стоимости обслуживания автомобилей от возраста', () => {
  it('MY Variant: собирает статистику из единственной записи для прошлогодней машины', () => {
    const result = serviceLogsData.report(new AgeCostCorrelationReportBuilder());

    expect(result).to.deep.eq({ 1: 1 });
  });
});
