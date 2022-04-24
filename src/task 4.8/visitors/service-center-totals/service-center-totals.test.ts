import { expect } from 'chai';
import { ServiceLogRecords } from '../../i-face-service-log';
import { simpleLog } from '../../test-mock/service-log';
import { ServiceCenterTotalsReportBuilder } from './service-center-totals';

const serviceLogsData = new ServiceLogRecords(simpleLog);

describe('сбор статистики по стоимости обслуживания автомобилей от возраста', () => {
  it('MY Variant: собирает статистику из единственной записи для прошлогодней машины', () => {
    const result = serviceLogsData.report(new ServiceCenterTotalsReportBuilder());

    expect(result).to.deep.eq({
      'KNOWN_WORKSHOP': {
        'totalIncome': 1,
        'vehicleCount': 1
      }
    });
  });
});
