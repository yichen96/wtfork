import { Button, Card, Divider, Grid, Link, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../icons/CheckIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Plans = () => {
  return (
    <>
      <Flex
        css={{ py: '$20', gap: '1rem', px: '$6' }}
        justify={'center'}
        wrap={'wrap'}
        direction={'column'}
        align={'center'}
      >
        <Flex direction={'column'} align={'center'}>
          <Text span css={{ color: '$blue600' }}>
            Embrace the future now
          </Text>
          <Text h2>Flexible Plans</Text>
        </Flex>

        <Flex
          css={{ gap: '2rem', width: '100%' }}
          wrap={'wrap'}
          justify={'center'}
        >
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Base
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    No commitment
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ paddingTop: '$4', paddingBottom: '$4' }}>
              <Text css={{ display: 'contents' }} h2>
                $0{' '}
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}>/ month</Text>
              <Button css={{ mt: '$7', mb: '$12' }}>Get Started</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon size={20} />
                  <Text span css={{ color: '$accents8' }}>
                    1 Product
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon size={20} />
                  <Text span css={{ color: '$accents8' }}>
                    5 Entropy calculation per day
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon size={20} />
                  <Text span css={{ color: '$accents8' }}>
                    Email support
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    WTF add-on
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    Do you know what &quot;add-on&quot; means?
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ paddingTop: '$4', paddingBottom: '$4' }}>
              <Text css={{ display: 'contents' }} h2>
                $19{' '}
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}>/ month</Text>
              <Button css={{ mt: '$7', mb: '$12' }}>Get Started</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon size={20} />
                  <Text span css={{ color: '$accents8' }}>
                    Everything of the base plan
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon size={20} />
                  <Text span css={{ color: '$accents8' }}>
                    Link with 5 more products
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon size={20} />
                  <Text span css={{ color: '$accents8' }}>
                  50 Entropy calculation per day
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon size={20} />
                  <Text span css={{ color: '$accents8' }}>
                  Store your product road map on cloud
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon size={20} />
                  <Text span css={{ color: '$accents8' }}>
                    More email support
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    The add-on of the WTF add-on plan
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    Oh. You must be really desperate.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ paddingTop: '$4', paddingBottom: '$4' }}>
              <Text css={{ display: 'contents' }} h2>
                $9999{' '}
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}>/ month</Text>
              <Button css={{ mt: '$7', mb: '$12' }}>Get Started</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon size={20} />
                  <Text span css={{ color: '$accents8' }}>
                    Everything of the WTF add-on and the base plan
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon size={20} />
                  <Text span css={{ color: '$accents8' }}>
                    Bring all your products
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon size={20} />
                  <Text span css={{ color: '$accents8' }}>
                    As much entropy calculation as your poor heart can handle
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon size={20} />
                  <Text span css={{ color: '$accents8' }}>
                    Infinite Email Support
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
        </Flex>
      </Flex>

      <Divider
        css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
      />
    </>
  );
};
