import classNames from 'classnames';
import React from 'react';

interface IStack {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  spacing?: number;
  wrap?: boolean;
}

function Stack({ children, direction, spacing, wrap }: IStack): JSX.Element {
  const stackStyle = classNames('flex', {
    [`flex-row space-x-${spacing}`]: direction === 'row',
    [`flex-col space-y-${spacing}`]: direction === 'column',
    'flex-wrap': wrap,
  });

  return <div className={stackStyle}>{children}</div>;
}

Stack.defaultProps = {
  direction: 'row',
  spacing: 2,
  wrap: false,
};

export default Stack;
