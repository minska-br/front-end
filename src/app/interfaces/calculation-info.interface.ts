interface CalculationInfo {
  id: string;
  name: string;
  unit: string;
  processes: CalculationInfoProcess[];
  calculatedPercentage: number;
  totalCarbonFootprint: number;
}

interface CalculationInfoProcess {
  name: string;
  value: number;
  unit: string;
  processNameFound: string;
  calculated: boolean;
}

export { CalculationInfo };
