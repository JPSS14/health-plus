import { PlanType } from "../components/plans/types";

export const hplusPlans: PlanType[] = [{
  planName: 'Essencial',
  planBenefits: [
    '30% de desconto em qualquer cosulta no Brasil',
    '30% de desconto em 3 compras nas farmácias credenciadas por mês',
    '30% de desconto em 5 exames médicos em qualquer especialidade por mês'
  ],
  planPrice: 'R$ 29,99',
}, {
  planName: 'Absoluto',
  planBenefits: [
    '35% de desconto em qualquer cosulta no Brasil',
    '35% de desconto em compras nas farmácias credenciadas',
    '15% de desconto em farmácias não credenciadas',
    '35% de desconto nos exames médicos em qualquer especialidade'
  ],
  planPrice: 'R$ 49,99',
},
];