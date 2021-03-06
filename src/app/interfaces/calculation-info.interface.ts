interface CalculationInfo {
  id: string;
  name: string;
  unit: string;
  processes: CalculationInfoProcess[];
  calculatedPercentage: number;
  totalCarbonFootprint: number;
  conversions: CalculationConversions[];
}

interface CalculationConversions {
  name: string;
  value: number;
  unit: string;
}

interface CalculationInfoProcess {
  name: string;
  value: number;
  unit: string;
  processNameFound: string;
  amount: number;
  calculated: boolean;
  recalculated?: boolean;
}

export { CalculationInfo, CalculationInfoProcess };
