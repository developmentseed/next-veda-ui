'use client'

// import VEDA from "@developmentseed/veda-ui";
import { Block, Caption, Figure, Prose } from "@developmentseed/veda-ui"; // This returns undefined
// console.log(VEDA)
// console.log(Block)
import {
  DevseedUiThemeProvider,
  createUITheme,
} from "@devseed-ui/theme-provider";
import React, { Children } from 'react'

export const VEDA_OVERRIDE_THEME = {
  zIndices: {
    hide: -1,
    docked: 10,
    sticky: 900,
    dropdown: 1550,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  color: {
    base: "#2c3e50",
    primary: "#2276ac",
    danger: "#FC3D21",
    infographicA: "#fcab10",
    infographicB: "#f4442e",
    infographicC: "#b62b6e",
    infographicD: "#2ca58d",
    infographicE: "#2276ac",
  },
  type: {
    base: {
      leadSize: "1.25rem",
      extrabold: "800",
      // Increments to the type.base.size for each media breakpoint.
      sizeIncrement: {
        small: "0rem",
        medium: "0rem",
        large: "0.25rem",
        xlarge: "0.25rem",
      },
    },
    heading: {
      settings: '"wdth" 100, "wght" 700',
    },
  },
  layout: {
    min: "384px",
    max: "1440px",
    glspMultiplier: {
      xsmall: 1,
      small: 1,
      medium: 1.5,
      large: 2,
      xlarge: 2,
    },
  },
};

function EnhancedBlock(props) {
  
  const childrenAsArray = Children.toArray(props.children);
  console.log('children array')
  console.log(childrenAsArray)

  const childrenComponents: string[] = childrenAsArray.map(
    // @ts-expect-error type may not exist depending on the node, but the error
    // will be caught and this won't break.
    (e) => {
      console.log(e.type)
      console.log(e.name)
      return e.type?.displayName ?? 'undefined'
    }
  );

  const childrenNames = childrenComponents.reduce(
    (acc, curr) => acc + curr,
    ''
  );
  console.log(childrenNames)
  
  return (
    <DevseedUiThemeProvider theme={createUITheme(VEDA_OVERRIDE_THEME)}>
      {/* <Block {...props} /> */}
      <Prose {...props} />
    </DevseedUiThemeProvider>
  );
}


// function EnhancedProse(props) {
//   const Prose = Prose
//   return (
    
//       <Prose {...props} />
    
//   );
// }

// EnhancedProse.displayName= 'Prose'


function EnhancedCaption(props) {
  return (
    
      <Caption {...props} />
    
  );
}

EnhancedCaption.displayName='Caption'

function EnhancedFigure(props) {
  return (
    
      <Figure {...props} />
    
  );
}

console.log(Prose)
EnhancedFigure.displayName = 'Figure'

export {
  EnhancedBlock,
  Prose,
  EnhancedCaption,
  EnhancedFigure
}