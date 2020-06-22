import React from 'react';
import { ColorPalette, ColorItem } from '@storybook/addon-docs/blocks';

import { colors } from '.';

const Palette = () => {

  return (
    <ColorPalette>
      {Object.keys(colors).map(color => <ColorItem title={color} subtitle={colors[color].meaning} colors={[colors[color].value]} />)}
    </ColorPalette>
  )
}

export {
  Palette,
}
