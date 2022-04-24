import { makeAmount, ServiceLogRecord } from '../../i-face-service-log';
import { ReportBuilder } from '../../reportBuilder';
import { ServiceCenterTotals, Totals } from './i-face-service-center-totals';

const makeNewValue = (reportStateTotal: Totals, total: number, workshop: string): ServiceCenterTotals => {
  if (typeof reportStateTotal === 'undefined') {
    return {
      [workshop]: {
        totalIncome: makeAmount(total),
        vehicleCount: 1
      }
    };
  } else {
    return {
      [workshop]: {
        totalIncome: makeAmount(reportStateTotal.totalIncome + total),
        vehicleCount: reportStateTotal.vehicleCount + 1
      }
    };
  }
};
export class ServiceCenterTotalsReportBuilder extends ReportBuilder<ServiceCenterTotals> {
  onLogStep(reportState: ServiceCenterTotals, logItem: ServiceLogRecord) {
    const {workshop, total} = logItem;
    return {
      ...reportState,
      ...makeNewValue(reportState[workshop], total, workshop )
    };
  }
}
