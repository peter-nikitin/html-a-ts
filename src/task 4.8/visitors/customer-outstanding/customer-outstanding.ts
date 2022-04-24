import { ReportBuilderVisitor } from '../../i-face-report-builder-vistior';
import { makeAmount, ServiceLogRecord } from '../../i-face-service-log';
import { ReportBuilder } from '../../reportBuilder';
import { CustomerOutstanding } from './i-face-customer-outstanding';

const makeNewValue = (customerId: string, state: CustomerOutstanding, value: number) => ({
  [customerId]: makeAmount((state[customerId] || 0) + value)
});
export class CustomerOutstandingsReportBuilder extends ReportBuilder<CustomerOutstanding> {

  onLogStep(reportState: CustomerOutstanding, logItem: ServiceLogRecord) {
    return {
      ...reportState,
      ...makeNewValue(logItem.customer, reportState,logItem.paid - logItem.discount )
    };
  }
}
