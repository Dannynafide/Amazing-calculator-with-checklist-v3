import {Outlet} from 'react-router-dom';

import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import {CalculatorProvider} from 'context/calculatorContext';

export default function RootPage() {
  return (
    <CalculatorProvider>
      <MainTemplate>
        <Outlet />
      </MainTemplate>
    </CalculatorProvider>
  );
}
