import React from 'react';

import imgEnthusiasts from '/images/homepage/user-enthusiasts.jpg';
import imgScientists from '/images/homepage/user-scientists.jpg';
import imgResearcher from '/images/homepage/user-researcher.jpg';

import {
  Fold,
  FoldHeader,
  FoldTitle,
  FoldLead,
  FoldBody
} from '$components/common/fold';
import { Figure } from '$components/common/figure';
import { VarProse } from '$styles/variable-components';
import { variableGlsp } from '$styles/variable-utils';

const BlockAudience = styled.article`
  display: flex;
  flex-flow: column nowrap;
  gap: ${variableGlsp()};
  text-align: center;
`;

const BlockAudienceProse = styled(VarProse)`
  /* styled-component */
`;

const BlockAudienceMedia = styled(Figure)`
  order: -1;
  overflow: hidden;
  border-radius: ${themeVal('shape.ellipsoid')};
`;

const AudienceList = styled.ul`
  ${listReset()};
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${variableGlsp()};

  ${media.smallUp`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.largeUp`
    grid-template-columns: repeat(3, 1fr);
  `}

  li {
    padding: ${variableGlsp(0, 2)};
  }
`;

export default function Page() {
  return (
    <section>
      <h1 className='mb-8 text-2xl font-semibold tracking-tighter'>
        VEDA Dashboard Template Instance
      </h1>

      <p className='mb-4'>
        The Visualization, Exploration, and Data Analysis (VEDA) platfomr is intended to show the capabilities of Analysis-Ready, Cloud-Optimized (ARCO) data. The VEDA Dashboard is one interface for the VEDA platform, that allows science teams to showcase their work for a variety of stakeholders. This flexible dashboard can be customized for your own needs. To learn more about creating your own self-hosted instance of the VEDA Dashboard, and how to manage it, visit our [VEDA Documentation](https://docs.openveda.cloud/instance-management/). 
        
        This is a template for what your own instance of the VEDA Dashboard might look like. It includes the core VEDA Dashboard features, compiled using Next JS. You can copy this template instance to start your own custom instance of the VEDA Dashboard. For more help with this, reach out to veda@uah.edu. 


      </p>
    </section>
  );
}

function Audience() {
  return (
    <Fold>
      <FoldHeader>
        <FoldTitle>VEDA serves a wide scientific audience</FoldTitle>
        <FoldLead>
          VEDA makes science based on NASA datasets inclusive, accessible, and
          reproducible.
        </FoldLead>
      </FoldHeader>
      <FoldBody>
        <AudienceList>
          <li>
            <BlockAudience>
              <BlockAudienceProse>
                <h3>Earth scientists</h3>
                <p>
                  Easily access high quality Earth data from NASA and its
                  associated partners.
                </p>
              </BlockAudienceProse>
              <BlockAudienceMedia>
                <img
                  src={imgScientists}
                  alt='United States at night seen from orbit'
                />
              </BlockAudienceMedia>
            </BlockAudience>
          </li>

          <li>
            <BlockAudience>
              <BlockAudienceProse>
                <h3>Academic researchers</h3>
                <p>
                  Support your research efforts with an open source
                  cloud-computing platform backed by NASA data.
                </p>
              </BlockAudienceProse>
              <BlockAudienceMedia>
                <img
                  src={imgResearcher}
                  alt='Philippine woman scientist working at a desk in front of a computer'
                />
              </BlockAudienceMedia>
            </BlockAudience>
          </li>

          <li>
            <BlockAudience>
              <BlockAudienceProse>
                <h3>Science enthusiasts</h3>
                <p>
                  Discover the latest in Earth Observation, how that might impact environmental change,
                  and how this might impact where you live.
                </p>
              </BlockAudienceProse>
              <BlockAudienceMedia>
                <img
                  src={imgEnthusiasts}
                  alt={`An intricate maze of small lakes and waterways define the Yukon Delta at the confluence of Alaska's Yukon and Kuskokwim Rivers with the frigid Bering Sea.`}
                />
              </BlockAudienceMedia>
            </BlockAudience>
          </li>
        </AudienceList>
      </FoldBody>
    </Fold>
  );
}

export default Audience;