import {Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import Image from 'next/image';

export const Features1 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex align={'center'}>
            <Image
               src="/evil_octopus.png"
               alt=""
               width={550}
               height={550}
               priority
            />
            </Flex>
            <Flex direction="column">
               <Text span css={{color: '$blue600'}}>
                  Stop fighting with the engineers
               </Text>
               <Text h3>Re:invent Product Design</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                  Wait - did you just break my customer journey?
               </Text>

               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                       🧠 Entropy Score
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                       Our machine-learning model screams internally so you don&apos;t have to. Get a single number to summarize your product&apos;s architecture: 0 is zen; 100 is Lovecraftian horror. Most real apps score 94+.
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                       🌳 Feature Sphere
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Because flat maps are for cowards. Explore an elegant hyper-orb of your app&apos;s customer journey. Every click, every rage-quit, every WTF moment — visualized in glorious spherical agony.
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                       🚪 Graceful Exit Planner
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        We plot your product&apos;s projected entropy against your stock price, so you can pinpoint the perfect moment to sell, pivot, or fake your own disappearance — all before tech debt becomes soul debt.
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
