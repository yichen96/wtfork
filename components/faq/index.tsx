import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Faq = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               gap: '$18',
               px: '$6',
            }}
            direction={'column'}
         >
            <Flex align={'center'} direction={'column'}>
               <Text span css={{color: '$blue600'}}>
                  FAQ
               </Text>
               <Text h2>You Have Questions?</Text>
               <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  Everything here is generated by AI, so take the answers with a pinch of salt.
               </Text>
            </Flex>

            <Flex
               css={{
                  'gap': '$10',
                  '@lg': {
                     px: '$64',
                  },
               }}
               direction={'column'}
            >
               <Flex css={{gap: '$5'}} justify={'start'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3', flex: 1}}>
                     <Text h3>
                        Is WTFork used at WTFork?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Absolutely not.
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        We have 0 Product Managers, 0 QA Engineers, and 100% confidence. Every release is considered a feature by default, freeing up budget to pay AI coders to ship more untested brilliance.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3', flex: 1}}>
                     <Text h3>
                        What does WTFork stand for?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Whatever The Fork you want it to be.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3', flex: 1}}>
                     <Text h3>
                        Is this open source?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Yes, but only the bugs.
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        The good parts are locked in a vault guarded by legacy code and broken CI pipelines.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'start'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3', flex: 1}}>
                     <Text h3>
                        Can WTFork fix my product?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        No, but it can tell you exactly when it became unfixable.
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Then it will print a sympathy card and send it to your CTO.
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
