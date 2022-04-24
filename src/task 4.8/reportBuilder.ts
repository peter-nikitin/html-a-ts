import { ReportBuilderVisitor } from './i-face-report-builder-vistior';
import { ServiceLogRecord } from './i-face-service-log';

export abstract class ReportBuilder<T> implements ReportBuilderVisitor<T> {
  initialReportState():T { return {} as T; }
  report(data: T) { return data; }

  onLogStep(reportState: T, logItem: ServiceLogRecord): T {
    throw new Error('not Implemented');
  }
}
