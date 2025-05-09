import React from 'react';
import { ResponsiveContainer, Sankey } from 'recharts';

const data = {
  nodes: [
    { name: '収入' }, // Income
    { name: '予算' }, // Budget
    { name: '投資' }, // Investment
    { name: '不動産' }, // Real Estate
    { name: '暗号資産' }, // Crypto
    { name: '株式・ファンド' }, // Stocks & Funds
    { name: '貯金' }, // Saving
    { name: 'SCPI' }, // SCPI
    { name: 'ビットコイン' }, // Bitcoin
    { name: 'イーサリアム' }, // Ethereum
    { name: 'ソラナ' }, // Solana
    { name: '住宅費' }, // Housing
    { name: '食費' }, // Food
    { name: '家賃' }, // Rent
    { name: '光熱費' }, // Utility
    { name: '住宅ローン' }, // Mortgage
    { name: '食料品' }, // Groceries
    { name: '配達' }, // Delivery
    { name: 'レストラン' }, // Restaurant
  ],
  links: [
    { source: 0, target: 1, value: 8500 },
    { source: 1, target: 2, value: 2300 },
    { source: 1, target: 3, value: 400 },
    { source: 1, target: 4, value: 1250 },
    { source: 2, target: 5, value: 1800 },
    { source: 2, target: 6, value: 500 },
    { source: 3, target: 7, value: 400 },
    { source: 4, target: 8, value: 500 },
    { source: 4, target: 9, value: 500 },
    { source: 4, target: 10, value: 250 },
    { source: 1, target: 11, value: 3384 },
    { source: 1, target: 12, value: 800 },
    { source: 11, target: 13, value: 1234 },
    { source: 11, target: 14, value: 150 },
    { source: 11, target: 15, value: 2000 },
    { source: 12, target: 16, value: 450 },
    { source: 12, target: 17, value: 200 },
    { source: 12, target: 18, value: 150 },
  ],
};

const colors = ['#3C898E', '#486DF0', '#6F50E5'];

type SankeyNode = {
  name: string;
  x: number;
  y: number;
};

type CustomNodePayload = {
  name: string;
  sourceNodes: number[];
  sourceLinks: number[];
  targetLinks: number[];
  targetNodes: number[];
  value: number;
  depth: number;
  x: number;
  dx: number;
  y: number;
  dy: number;
};

const CustomNode = (
  props: SankeyNode & {
    width: number;
    height: number;
    payload: CustomNodePayload;
  }
): React.ReactElement<SVGElement> => {
  return (
    <rect
      x={props.x + 4}
      y={props.y - 2}
      width={props.width - 8}
      height={props.height + 4}
      fill={colors[props.payload.depth % colors.length]}
      rx={2.5}
    />
  );
};

type CustomLinkPayload = {
  source: CustomNodePayload;
  target: CustomNodePayload;
  value: number;
  dy: number;
  sy: number;
  ty: number;
};

const CustomLink = (props: {
  sourceX: number;
  targetX: number;
  sourceY: number;
  targetY: number;
  sourceControlX: number;
  targetControlX: number;
  sourceRelativeY: number;
  targetRelativeY: number;
  linkWidth: number;
  index: number;
  payload: CustomLinkPayload;
}) => {
  return (
    <g>
      <path
        d={`
  M${props.sourceX},${props.sourceY}
  C${props.sourceControlX},${props.sourceY} ${props.targetControlX},${props.targetY} ${props.targetX},${props.targetY}`}
        fill="none"
        stroke={colors[props.payload.source.depth % colors.length]}
        strokeOpacity={0.4}
        strokeWidth={props.linkWidth}
        strokeLinecap="butt"
      />
      <foreignObject
        x={props.sourceX}
        y={props.targetY - props.linkWidth / 2}
        width={
          Math.max(props.targetX, props.sourceX) -
          Math.min(props.targetX, props.sourceX)
        }
        height={props.linkWidth}
        style={{
          overflow: 'visible',
        }}
      >
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%',
            height: '100%',
            overflow: 'visible',
            padding: '0.5em',
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontFamily: 'sans-serif',
              textAlign: 'center',
              backgroundColor: '#f1f5fe80',
              padding: '0.25em 0.5em',
              borderRadius: 4,
              position: 'relative',
              zIndex: 1,
            }}
          >
            {props.payload.target.name ? `${props.payload.target.name}: ` : ''}
            {props.payload.value}
            &nbsp;円
          </div>
        </div>
      </foreignObject>
    </g>
  );
};

const SankeySample: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <Sankey
        data={data}
        node={CustomNode}
        link={CustomLink}
        width={960}
        height={500}
        nodeWidth={16}
        nodePadding={14}
        sort={false}
        margin={{
          left: 20,
          right: 20,
          top: 20,
          bottom: 20,
        }}
      />
    </ResponsiveContainer>
  );
};

export default SankeySample;
