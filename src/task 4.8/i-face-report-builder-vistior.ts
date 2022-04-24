import { ServiceLogRecord } from './i-face-service-log';

export interface ReportBuilderVisitor <ReportType> {
  report: (data: ReportType) => ReportType;
  initialReportState: () => ReportType;
  onLogStep: (reportState: ReportType, logItem: ServiceLogRecord) => ReportType;
}
