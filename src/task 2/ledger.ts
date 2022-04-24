export interface GeneralLedgerEntry {
  generalLedgerId: number;
  posted: string;
  debitAccountId: string;
  creditAccountId: string;
  amount: number;
  referenceId: string;
}

export interface AccountDaily {
  date: string;
  debitDayTotal: number;
  creditDayTotal: number;
}

export type AccountDailyReducer = (accountId: string, ledger: GeneralLedgerEntry[]) => AccountDaily[];

export const accountDailyReducer: AccountDailyReducer = (accountId, ledger) => {

  const result = ledger.reduce((prev, cur) => {


    const isCurrentItemHasNeededAccountId = () => cur.creditAccountId === accountId || cur.debitAccountId === accountId;

    if (!isCurrentItemHasNeededAccountId()) {
      return prev;
    }

    const postedDate = cur.posted.split('T')[0];

    const indexOfAccountDailuItem = prev.findIndex((item) => item.date === postedDate);

    let updatedAccauntDailyItem:AccountDaily = {
      creditDayTotal: 0,
      debitDayTotal: 0,
      date: postedDate
    };

    if (indexOfAccountDailuItem > 0) {
      updatedAccauntDailyItem = prev[indexOfAccountDailuItem];
    } else {
      prev.push(updatedAccauntDailyItem);
    }


    if (cur.creditAccountId === accountId) {
      updatedAccauntDailyItem.creditDayTotal += cur.amount;
    }

    if (cur.debitAccountId === accountId) {
      updatedAccauntDailyItem.debitDayTotal
        += cur.amount;
    }

    return prev;

  }, [] as AccountDaily[]);
  return result ;
};
