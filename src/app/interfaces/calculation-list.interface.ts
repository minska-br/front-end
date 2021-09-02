interface CalculationList {
  name: string;
  href: string;
  method: string;
  startTime: string;
  requestId: string;
  calculationId: string;
  status: 'CALCULATED' | 'CALCULATING';
}

export { CalculationList };
