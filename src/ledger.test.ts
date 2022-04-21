import { expect } from 'chai';
import { AccountDaily, accountDailyReducer, GeneralLedgerEntry } from './ledger';

const mockLedger:GeneralLedgerEntry[] = [{
  'generalLedgerId': 1,
  'posted': '2021-07-20T01:13:45.507',
  'debitAccountId': '245.0001 project',
  'creditAccountId': '158.0001 project',
  'amount': 8719.8200,
  'referenceId': 'invoice'
},
{
  'generalLedgerId': 2,
  'posted': '2021-07-28T07:49:45.507',
  'debitAccountId': '311.0001 income',
  'creditAccountId': '158.0001 project',
  'amount': 2021.4300,
  'referenceId': 'promo'
},
{
  'generalLedgerId': 3,
  'posted': '2021-07-31T13:31:45.507',
  'debitAccountId': '313.0001 expenses',
  'creditAccountId': '245.0001 project',
  'amount': 1067.2900,
  'referenceId': 'order'
},
{
  'generalLedgerId': 4,
  'posted': '2021-07-28T07:49:45.507',
  'debitAccountId': '311.0001 income',
  'creditAccountId': '158.0001 project',
  'amount': 2021.4300,
  'referenceId': 'promo'
},
];

const mockResult: AccountDaily[] = [
  {
    date: '2021-07-20',
    creditDayTotal: 8719.8200,
    debitDayTotal: 0
  },
  {
    date: '2021-07-28',
    creditDayTotal: 2021.4300 * 2,
    debitDayTotal: 0
  },

];

describe('accountDailyReducer', () => {
  it('should return correct reduced array', () => {
    const result = accountDailyReducer('158.0001 project', mockLedger);

    expect(result).to.deep.eq(mockResult);
  });
});
