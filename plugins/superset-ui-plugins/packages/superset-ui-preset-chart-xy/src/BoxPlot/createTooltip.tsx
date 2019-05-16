import { isDefined } from '@superset-ui/core';
import React from 'react';
import TooltipFrame from '../components/tooltip/TooltipFrame';
import TooltipTable from '../components/tooltip/TooltipTable';
import Encoder from './Encoder';
import { BoxPlotDataRow } from './types';

export default function createBoxPlotTooltip(encoder: Encoder) {
  const { channels } = encoder;

  return function BoxPlotTooltip({ datum, color }: { datum: BoxPlotDataRow; color: string }) {
    const { label, min, max, median, firstQuartile, thirdQuartile, outliers } = datum;

    const formatValue =
      channels.y.definition.type === 'nominal' ? channels.x.formatValue : channels.y.formatValue;

    const data = [];
    if (isDefined(min)) {
      data.push({ key: 'Min', valueColumn: formatValue(min) });
    }
    if (isDefined(max)) {
      data.push({ key: 'Max', valueColumn: formatValue(max) });
    }
    if (isDefined(median)) {
      data.push({ key: 'Median', valueColumn: formatValue(median) });
    }
    if (isDefined(firstQuartile)) {
      data.push({ key: '1st Quartile', valueColumn: formatValue(firstQuartile) });
    }
    if (isDefined(thirdQuartile)) {
      data.push({ key: '3rd Quartile', valueColumn: formatValue(thirdQuartile) });
    }
    if (isDefined(outliers) && outliers.length > 0) {
      data.push({ key: '# Outliers', valueColumn: outliers.length });
    }

    return (
      <TooltipFrame>
        <div>
          <strong style={{ color }}>{label}</strong>
        </div>
        {data.length > 0 && <br />}
        <TooltipTable data={data} />
      </TooltipFrame>
    );
  };
}