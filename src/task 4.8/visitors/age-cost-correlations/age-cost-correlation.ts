import { makeAmount, ServiceLogRecord } from '../../i-face-service-log';
import { ReportBuilder } from '../../reportBuilder';

import { AgeCostCorrelation } from './i-face-age-cost-correlations';
export class AgeCostCorrelationReportBuilder extends ReportBuilder<AgeCostCorrelation> {
  initialReportState() { return {}; }
  report (data: AgeCostCorrelation)  {return data;}

  onLogStep(reportState: AgeCostCorrelation, logItem: ServiceLogRecord) {
    const ageOfCar = new Date().getFullYear() - logItem.year;
    return {
      ...reportState,
      [ageOfCar]: makeAmount((reportState[ageOfCar] || 0) + logItem.paid)
    };
  }


}
