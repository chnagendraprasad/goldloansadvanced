import { Box, Grid, Show, GridItem, Flex } from '@chakra-ui/react'
import CustomerGrid from '../components/CustomerGrid'
import CustomerHeading from '../components/CustomerHeading'
import BranchList from '../components/BranchList'
import LoanTypeSelector from '../components/LoanTypeSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
    <Grid
    templateAreas={{
      base: `"main"`,
      lg: `"aside main"`,
    }}
    templateColumns={{
      base: '1fr',
      lg: '250px 1fr',
    }}
  >
    <Show above="lg">
      <GridItem area="aside" paddingX={5}>
        <BranchList />
      </GridItem>
    </Show>
    <GridItem area="main">
      <Box paddingLeft={2}>
        <CustomerHeading />
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <LoanTypeSelector />
          </Box>
          <SortSelector />
        </Flex>
      </Box>
      <CustomerGrid />
    </GridItem>
  </Grid>
  )
}

export default HomePage