import {
  makeAmount,
  makeDateTime,
  ServiceLogRecord
} from '../i-face-service-log';

export const RECORD_COUNT = 30;
export const serviceLogMock = () => {
  throw new Error('not implemented yet');
};

export const KNOWN_WORKSHOP = 'KNOWN_WORKSHOP';
export const simpleLog: ServiceLogRecord[] = [
  {
    customer: 'c1',
    description: 'd1',
    discount: makeAmount(0),
    id: 'n1',
    mechanic: 'mek1',
    milage: 100,
    paid: makeAmount(1),
    parts: makeAmount(1),
    serviced: makeDateTime(new Date().toISOString()),
    total: makeAmount(1),
    vehicle: {
      body: 'b1',
      make: 'mk1',
      model: 'md1',
      trim: 't1'
    },
    work: makeAmount(1),
    workshop: KNOWN_WORKSHOP,
    year: new Date().getFullYear() - 1
  }
];

export const doubleLog: ServiceLogRecord[] = [
  simpleLog[0],
  {
    ...simpleLog[0],
    total: makeAmount(2)
  }
];
